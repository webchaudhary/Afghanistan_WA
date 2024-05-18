import React, { useState } from 'react'
import { MapContainer, GeoJSON, TileLayer, ImageOverlay, WMSTileLayer } from 'react-leaflet'
import * as L from "leaflet";
import "leaflet/dist/leaflet.css"
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import BaseMap from '../components/BaseMap';
import { MonthsArray, SelectedFeaturesAverageStatsFunction, YearsArray, calculateAverageOfArray, calculateSumOfArray, fillDensityColor, getAnnualDataFromMonthly, renderTimeOptions } from '../helpers/functions';
import { BaseMapsLayers, mapCenter, maxBounds, pngRasterBounds, setDragging, setInitialMapZoom } from '../helpers/mapFunction';
import MapLegend from '../components/MapLegend';
import { ColorLegendsData } from "../assets/data/ColorLegendsData";
import { useSelectedFeatureContext } from '../contexts/SelectedFeatureContext';
import TotalConsumptionChart from '../components/charts/TotalConsumptionChart';
import UnitConsumptionChart from '../components/charts/UnitConsumptionChart';
import { HydroclimaticStats } from "../assets/data/HydroclimaticStats.js";
import Plot from 'react-plotly.js';
import RasterLayerLegend from '../components/RasterLayerLegend';
import PixelValue from './PixelValue';
import FiltereredDistrictsFeatures from './FiltereredDistrictsFeatures';
import SelectedFeatureHeading from '../components/SelectedFeatureHeading.js';


const MapDataLayers = [
  {
    name: "Annual ET",
    value: "avg_aeti_raster",
    legend: "",
    attribution: "Data Source: <a href='https://www.fao.org/in-action/remote-sensing-for-water-productivity/wapor-data/en' target='_blank'>WaPOR L1 V3</a>"
  },
  {
    name: "Annual Ref. ET",
    value: "avg_ret_raster",
    legend: "",
    attribution: "Data Source: <a href='https://data.apps.fao.org/catalog/dataset/global-weather-for-agriculture-agera5' target='_blank'>AgERA5 </a>"

  },
  // {
  //   name: "Annual Potential ET",
  //   value: "avg_pet_raster",
  //   legend: "",
  //   attribution: "Data Source: <a href='https://developers.google.com/earth-engine/datasets/catalog/NASA_GLDAS_V021_NOAH_G025_T3H' target='_blank'>GLDAS </a>"
  // },
  {
    name: "Annual PCP-ET",
    value: "avg_pcp_et",
    legend: "",
    attribution: ""
  },
  {
    name: "Evapotranspiration (ET)",
    value: "AETI",
    legend: "",
    attribution: "Data Source: <a href='https://www.fao.org/in-action/remote-sensing-for-water-productivity/wapor-data/en' target='_blank'>WaPOR L1 V3</a>"
  },
  {
    name: "Ref. ET",
    value: "RET",
    legend: "",
    attribution: "Data Source: <a href='https://data.apps.fao.org/catalog/dataset/global-weather-for-agriculture-agera5' target='_blank'>AgERA5 </a>"
  },
  // {
  //   name: "Potential ET",
  //   value: "PET",
  //   legend: "",
  //   attribution: "Data Source: <a href='https://developers.google.com/earth-engine/datasets/catalog/NASA_GLDAS_V021_NOAH_G025_T3H' target='_blank'>GLDAS </a>"
  // },
  {
    name: "PCP-ET",
    value: "PCP_ET",
    legend: "",
    attribution: ""
  },
]


const EvapotranspirationPage = () => {
  const [selectedDataType, setSelectedDataType] = useState(MapDataLayers[0]);
  const [intervalType, setIntervalType] = useState('Yearly');
  const [selectedTime, setSelectedTime] = useState(5);
  const { selectedView, selectedFeatureName } = useSelectedFeatureContext();

  const [selectedBasemapLayer, setSelectedBasemapLayer] = useState(BaseMapsLayers[0]);


  const handleBasemapSelection = (e) => {
    const selectedItem = BaseMapsLayers.find((item) => item.name === e.target.value);
    setSelectedBasemapLayer(selectedItem);
  };



  const filteredFeaturesItems = selectedView && selectedFeatureName !== "" ? HydroclimaticStats.filter(item => item[selectedView] === selectedFeatureName) : HydroclimaticStats;
  const SelectedFeaturesStatsData = SelectedFeaturesAverageStatsFunction(filteredFeaturesItems)


  const ColorLegendsDataItem = ColorLegendsData[`${intervalType}_${selectedDataType.value}`];



  function DistrictOnEachfeature(feature, layer) {
    layer.on("mouseover", function (e) {
      const DataItem = HydroclimaticStats.find(
        (item) => item.DISTRICT === feature.properties.DISTRICT
      );
      let popupContent;

      if (!DataItem) {
        popupContent = `<div> Data not available for ${feature.properties.DISTRICT}</div>`;
      } else if (selectedDataType.value === "PCP_ET") {
        const value = intervalType === 'Monthly' ?
          (DataItem["PCP"][selectedTime] - DataItem["AETI"][selectedTime]).toFixed(1) :
          (getAnnualDataFromMonthly(DataItem["PCP"])[selectedTime] - getAnnualDataFromMonthly(DataItem["AETI"])[selectedTime]).toFixed(1);
        popupContent = `
            <div>
              District: ${feature.properties.DISTRICT}<br/>
              ${selectedDataType.name} (${intervalType === 'Yearly' ? 'mm/year' : 'mm/month'}): ${value}
            </div>
          `;
      } else if (selectedDataType.value === "PET") {
        const value = DataItem["PET"][selectedTime]
        popupContent = `
            <div>
              District: ${feature.properties.DISTRICT}<br/>
              ${selectedDataType.name} (mm/year): ${value}
            </div>
          `;
      } else {
        const value = intervalType === 'Monthly' ?
          DataItem[selectedDataType.value][selectedTime] :
          getAnnualDataFromMonthly(DataItem[selectedDataType.value])[selectedTime];
        popupContent = `
            <div>
              District: ${feature.properties.DISTRICT}<br/>
              ${selectedDataType.name} ${selectedDataType.value === 'AridityIndex' ? '' : `(${intervalType === 'Yearly' ? 'mm/year' : 'mm/month'})`} : ${value}
            </div>
          `;
      }

      layer.bindTooltip(popupContent, { sticky: true });
      layer.openTooltip();
    });

    layer.on("mouseout", function () {
      layer.closeTooltip();
    });
  }


  const DistrictStyle = (feature) => {
    if (selectedTime && selectedDataType && selectedDataType.value) {
      const getDensityFromData = (name) => {
        const DataItem = HydroclimaticStats.find((item) => item.DISTRICT === name);
        if (selectedDataType.value === "PCP_ET") {
          if (intervalType === 'Monthly') {
            return DataItem["PCP"][selectedTime] - DataItem["AETI"][selectedTime];
          } else {
            return getAnnualDataFromMonthly(DataItem["PCP"])[selectedTime] - getAnnualDataFromMonthly(DataItem["AETI"])[selectedTime];
          }
        } if (selectedDataType.value === "PET") {
          if (intervalType === 'Yearly') {
            return DataItem["PET"][selectedTime];
          }
        }
        else {
          if (intervalType === 'Monthly') {
            return DataItem[selectedDataType.value] ? DataItem[selectedDataType.value][selectedTime] : null;
          } else {
            return DataItem[selectedDataType.value] ? getAnnualDataFromMonthly(DataItem[selectedDataType.value])[selectedTime] : null;
          }
        }
      };

      const density = getDensityFromData(feature.properties.DISTRICT);

      return {
        fillColor: ColorLegendsDataItem ? fillDensityColor(ColorLegendsDataItem, density) : "none",
        weight: 1,
        opacity: 1,
        color: "black",
        dashArray: "2",
        fillOpacity: 1,
      };
    }
  };


  const handleDataLayerSelection = (e) => {
    const value = e.target.value;
    const selectedItem = MapDataLayers.find((item) => item.value === value);
    setSelectedDataType(selectedItem);
  };


  const handleIntervalTypeChange = (e) => {
    setIntervalType(e.target.value);
    setSelectedTime('')
  };


  <option value="AETI">Evapotranspiration</option>


  let TableAnnualData;

  if (SelectedFeaturesStatsData) {
    TableAnnualData = {
      Year: YearsArray,
      Yearly_AETI: getAnnualDataFromMonthly(SelectedFeaturesStatsData.AETI),
      Yearly_PCP: getAnnualDataFromMonthly(SelectedFeaturesStatsData.PCP),
      Yearly_RET: getAnnualDataFromMonthly(SelectedFeaturesStatsData.RET),
      Yearly_ETB: SelectedFeaturesStatsData.ETB,
      Yearly_ETG: SelectedFeaturesStatsData.ETG,
    }
  }



  const maxAETI = Math.max(...SelectedFeaturesStatsData.AETI);
  const maxRET = Math.max(...SelectedFeaturesStatsData.RET);
  const maxRange = Math.max(maxAETI, maxRET);



  return (
    <div className='dasboard_page_container'>
      <div className='main_dashboard'>


        <>
          <div className='left_panel_equal'>

            <div className='card_container'>
              <SelectedFeatureHeading
                selectedView={selectedView}
                selectedFeatureName={selectedFeatureName}
              />
            </div>


            <div className='card_container'>
              <div className='defination_container'>
                <h4>Evapotranspiration and Ref. ET</h4>
              </div>
              <Plot
                data={[
                  {
                    x: MonthsArray,
                    y: SelectedFeaturesStatsData.AETI,
                    fill: 'tozeroy',
                    type: 'scatter',
                    name: "Evapotranspiration (mm/month)",
                    yaxis: 'y1',
                    text: MonthsArray.map((month, index) => `${month}, Evapotranspiration: ${SelectedFeaturesStatsData.AETI[index]} (mm/month)`),
                    hoverinfo: 'text',
                    textposition: 'none'

                  },
                  {
                    x: MonthsArray,
                    y: SelectedFeaturesStatsData.RET,
                    type: 'scatter',
                    mode: 'lines+markers',
                    name: "Ref. ET (mm/month)",
                    marker: { color: 'red' },
                    yaxis: 'y2',
                    text: MonthsArray.map((month, index) => `${month}, Ref. ET: ${SelectedFeaturesStatsData.RET[index]} (mm/month)`),
                    hoverinfo: 'text',
                    textposition: 'none'
                  },
                ]}
                layout={{
                  xaxis: {
                    title: 'Year',
                  },
                  yaxis: {
                    title: "Evapotranspiration (mm/month)",
                    side: 'left',
                    showgrid: false,
                    range: [0, maxRange + 10]
                  },
                  yaxis2: {
                    title: "Ref. ET (mm/month)",
                    side: 'right',
                    overlaying: 'y',
                    showgrid: false,
                    range: [0, maxRange + 10]
                  },
                  legend: {
                    orientation: 'h',
                    x: 0,
                    y: 1.2,
                  },
                }}

                style={{ width: "100%", height: "100%)" }}
              />
            </div>

            <div className='card_container'>
              <div className='item_table_container'>
                <table className='item_table'>
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Total Evapotranspiration (BCM/year)</th>
                      <th>ET Blue (BCM/year)</th>
                      <th>ET Green (BCM/year)</th>
                      <th>Precipitation (PCP) (BCM/year)</th>
                      <th>PCP - ET (BCM/year)</th>
                      <th>Portion of PCP consumed within the country (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TableAnnualData.Year.map((year, index) => (
                      <tr key={index}>
                        <td>{year}</td>
                        <td>{(TableAnnualData.Yearly_AETI[index] * 0.001 * SelectedFeaturesStatsData.AREA / 1000000000).toFixed(1)}</td>
                        <td>{(TableAnnualData.Yearly_ETB[index] * 0.001 * SelectedFeaturesStatsData.AREA / 1000000000).toFixed(1)}</td>
                        <td>{(TableAnnualData.Yearly_ETG[index] * 0.001 * SelectedFeaturesStatsData.AREA / 1000000000).toFixed(1)}</td>
                        <td>{(TableAnnualData.Yearly_PCP[index] * 0.001 * SelectedFeaturesStatsData.AREA / 1000000000).toFixed(1)}</td>
                        <td className={TableAnnualData.Yearly_PCP[index] - TableAnnualData.Yearly_AETI[index] < 0 ? 'red-text' : ''}>
                          {((TableAnnualData.Yearly_PCP[index] - TableAnnualData.Yearly_AETI[index]) * 0.001 * SelectedFeaturesStatsData.AREA / 1000000000).toFixed(2)}
                        </td>

                        <td>{(TableAnnualData.Yearly_AETI[index] * 100 / TableAnnualData.Yearly_PCP[index]).toFixed(1)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card_container" style={{ maxHeight: "600px", overflow: "scroll" }}>

              <div className='defination_container'>
                <h4>Average Annual Consumption per District</h4>
              </div>

              <TotalConsumptionChart filteredFeaturesItems={filteredFeaturesItems} />
            </div>

            <div className="card_container" style={{ maxHeight: "600px", overflow: "scroll" }}>

              <div className='defination_container'>
                <h4>Average Annual Unit Consumption per District</h4>
              </div>

              <UnitConsumptionChart filteredFeaturesItems={filteredFeaturesItems} />
            </div>


          </div>

          <div className='right_panel_equal' >
            <div className='card_container' style={{ height: "100%" }}>

              
              <MapContainer
                fullscreenControl={true}
                center={mapCenter}
                style={{ width: '100%', height: "100%", backgroundColor: 'white', border: 'none', margin: 'auto' }}
                zoom={setInitialMapZoom()}
                maxBounds={maxBounds}
                zoomSnap={0.5}
                minZoom={setInitialMapZoom() - 1}
                keyboard={false}
                dragging={setDragging()}
                doubleClickZoom={false}
              >

                <div className='map_heading'>
                  <p> {selectedDataType.name} </p>
                </div>


                <div className='map_layer_manager'>
                  <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button map_layer_collapse collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                          Base Map
                        </button>
                      </h2>
                      <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body map_layer_collapse_body">
                          {BaseMapsLayers.map((option, index) => (
                            <div key={index} className="form-check">
                              <input
                                type="radio"
                                className="form-check-input"
                                id={option.name}
                                name="data_type"
                                value={option.name}
                                checked={selectedBasemapLayer?.name === option.name}
                                onChange={handleBasemapSelection}
                              />
                              <label htmlFor={option.name}>{option.name}</label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button map_layer_collapse collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                          Raster Layers
                        </button>
                      </h2>
                      <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body map_layer_collapse_body">
                          {MapDataLayers.slice(0, 3).map((item, index) => (
                            <div key={item.value} className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={item.value}
                                value={item.value}
                                checked={selectedDataType.value === item.value}
                                onChange={handleDataLayerSelection}
                              />
                              <label htmlFor={item.value}> {item.name}</label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button map_layer_collapse collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                          Vector Data Layers
                        </button>
                      </h2>
                      <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body map_layer_collapse_body">
                          {MapDataLayers.slice(3, 6).map((item, index) => (
                            <div key={item.value} className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={item.value}
                                value={item.value}
                                checked={selectedDataType.value === item.value}
                                onChange={handleDataLayerSelection}
                              />
                              <label htmlFor={item.value}> {item.name}</label>
                            </div>
                          ))}

                          {/* <select value={intervalType} onChange={handleIntervalTypeChange}>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                          </select> */}


                          <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                            {renderTimeOptions(intervalType)}
                          </select>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {selectedBasemapLayer && selectedBasemapLayer.url && (
                  <TileLayer
                    key={selectedBasemapLayer.url}
                    attribution={selectedBasemapLayer.attribution}
                    url={selectedBasemapLayer.url}
                    subdomains={selectedBasemapLayer.subdomains}
                  />
                )}






                {selectedDataType.value === 'avg_aeti_raster' ? (
                  <>
                    <WMSTileLayer
                      attribution={selectedDataType.attribution}
                      url={`${process.env.REACT_APP_GEOSERVER_URL}/geoserver/AFG_Dashboard/wms`}
                      params={{ LAYERS: '	AFG_Dashboard:AETI_2018-2023_avg' }}
                      version="1.1.0"
                      transparent={true}
                      format="image/png"
                      key="avg_aeti_raster"
                    />
                    <PixelValue layername="AETI_2018-2023_avg" unit="mm/year" />

                    <RasterLayerLegend
                      layerName="AETI_2018-2023_avg"
                      Unit="(mm/year)"
                    />

                  </>

                ) : selectedDataType.value === 'avg_ret_raster' ? (
                  <>
                    <WMSTileLayer
                      attribution={selectedDataType.attribution}
                      url={`${process.env.REACT_APP_GEOSERVER_URL}/geoserver/AFG_Dashboard/wms`}
                      params={{ LAYERS: '	AFG_Dashboard:RET_2018-2023_avg' }}
                      version="1.1.0"
                      transparent={true}
                      format="image/png"
                      key="avg_ret_raster"
                    />

                    <PixelValue layername="RET_2018-2023_avg" unit="mm/year" />

                    <RasterLayerLegend
                      layerName="RET_2018-2023_avg"
                      Unit="(mm/year)"
                    />





                  </>

                ) : selectedDataType.value === 'avg_pet_raster' ? (
                  <>
                    <WMSTileLayer
                      attribution={selectedDataType.attribution}
                      url={`${process.env.REACT_APP_GEOSERVER_URL}/geoserver/AFG_Dashboard/wms`}
                      params={{ LAYERS: '	AFG_Dashboard:PET_2018-2023_avg' }}
                      version="1.1.0"
                      transparent={true}
                      format="image/png"
                      key="avg_pet_raster"
                    />
                    <PixelValue layername="PET_2018-2023_avg" unit="mm/year" />

                    <RasterLayerLegend
                      layerName="PET_2018-2023_avg"
                      Unit="(mm/year)"
                    />


                  </>

                ) : selectedDataType.value === 'avg_pcp_et' ? (
                  <>
                    <WMSTileLayer
                      attribution={selectedDataType.attribution}
                      url={`${process.env.REACT_APP_GEOSERVER_URL}/geoserver/AFG_Dashboard/wms`}
                      params={{ LAYERS: '	AFG_Dashboard:P-AETI_2018-2023_avg' }}
                      version="1.1.0"
                      transparent={true}
                      format="image/png"
                      key="avg_pcp_et"
                    />

                    <PixelValue layername="P-AETI_2018-2023_avg" unit="mm/year" />

                    <RasterLayerLegend
                      layerName="P-AETI_2018-2023_avg"
                      Unit="(mm/year)"
                    />





                  </>

                ) : (
                  <>

                  </>

                )}



                {selectedDataType && selectedDataType.value && selectedTime !== "" && intervalType !== "" && ColorLegendsDataItem ? (

                  <>
                    <FiltereredDistrictsFeatures
                      DistrictStyle={DistrictStyle}
                      DistrictOnEachfeature={DistrictOnEachfeature}
                      layerKey={selectedDataType.value + selectedTime + intervalType}
                      attribution={selectedDataType.attribution}
                    />

                    {ColorLegendsDataItem && (
                      <MapLegend ColorLegendsDataItem={ColorLegendsDataItem} />
                    )}

                  </>

                ) : (
                  <>
                    <FiltereredDistrictsFeatures
                      DistrictStyle={
                        {
                          fillColor: "none",
                          weight: 2,
                          opacity: 1,
                          color: "black",
                          fillOpacity: 1,
                        }}
                      layerKey={selectedDataType.value + selectedTime + intervalType}
                    />
                  </>


                )}










                {/* <FiltererdJsonFeature /> */}

                <BaseMap />

              </MapContainer>
            </div>
          </div>
        </>


      </div>
    </div >
  )
}

export default EvapotranspirationPage