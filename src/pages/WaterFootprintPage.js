import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import { MapContainer, GeoJSON, TileLayer, ImageOverlay, WMSTileLayer } from 'react-leaflet'
import * as L from "leaflet";
import "leaflet/dist/leaflet.css"
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import BaseMap from '../components/BaseMap';
import { SelectedFeaturesAverageStatsFunction, calculateAverageOfArray, calculateSumOfArray, fillDensityColor, getAnnualDataFromMonthly, renderTimeOptions } from '../helpers/functions';
import MapLegend from '../components/MapLegend';
import { BaseMapsLayers, mapCenter, setDragging, setInitialMapZoom } from '../helpers/mapFunction';

import { ColorLegendsData } from "../assets/data/ColorLegendsData";
import { useSelectedFeatureContext } from '../contexts/SelectedFeatureContext';
import CropWaterFootprintChart from '../components/charts/CropWaterFootprintChart';
import { HydroclimaticStats } from "../assets/data/HydroclimaticStats.js";

import WaterFootprintChart from '../components/charts/WaterFootprintChart';
import RasterLayerLegend from '../components/RasterLayerLegend';
import PixelValue from './PixelValue';
import FiltereredDistrictsFeatures from './FiltereredDistrictsFeatures';
import SelectedFeatureHeading from '../components/SelectedFeatureHeading.js';


const MapDataLayers = [
  {
    name: "Annual ET Blue",
    value: "avg_ETB_raster",
    legend: "",
    attribution: "Data Source: <a href='https://www.fao.org/in-action/remote-sensing-for-water-productivity/wapor-data/en' target='_blank'>WaPOR L1 V3	</a>"
  },
  {
    name: "Annual ET Green",
    value: "avg_ETG_raster",
    legend: "",
    attribution: "Data Source: <a href='https://www.fao.org/in-action/remote-sensing-for-water-productivity/wapor-data/en' target='_blank'>WaPOR L1 V3	</a>"
  },
  {
    name: "ET Blue",
    value: "ETB",
    legend: "",
    attribution: "Data Source: <a href='https://www.fao.org/in-action/remote-sensing-for-water-productivity/wapor-data/en' target='_blank'>WaPOR L1 V3	</a>"
  },
  {
    name: "ET Green",
    value: "ETG",
    legend: "",
    attribution: "Data Source: <a href='https://www.fao.org/in-action/remote-sensing-for-water-productivity/wapor-data/en' target='_blank'>WaPOR L1 V3	</a>"
  },

]
const WaterFootprintPage = () => {
  const [selectedDataType, setSelectedDataType] = useState(MapDataLayers[0]);
  const [intervalType, setIntervalType] = useState('Yearly');
  const [selectedTime, setSelectedTime] = useState(5);
  const { selectedView, selectedFeatureName } = useSelectedFeatureContext();




  const filteredFeaturesItems = selectedView && selectedFeatureName !== "" ? HydroclimaticStats.filter(item => item[selectedView] === selectedFeatureName) : HydroclimaticStats;
  const SelectedFeaturesStatsData = SelectedFeaturesAverageStatsFunction(filteredFeaturesItems)

  const [selectedBasemapLayer, setSelectedBasemapLayer] = useState(BaseMapsLayers[0]);


  const handleDataLayerSelection = (e) => {
    const value = e.target.value;
    const selectedItem = MapDataLayers.find((item) => item.value === value);
    setSelectedDataType(selectedItem);
  };


  const handleBasemapSelection = (e) => {
    const selectedItem = BaseMapsLayers.find((item) => item.name === e.target.value);
    setSelectedBasemapLayer(selectedItem);


  };



  const ColorLegendsDataItem = ColorLegendsData[`${intervalType}_${selectedDataType.value}`];


  function DistrictOnEachfeature(feature, layer) {
    layer.on('mouseover', function (e) {
      const DataItem = HydroclimaticStats.find(item => item.DISTRICT === feature.properties.DISTRICT);
      const popupContent = `
          <div>
            District: ${feature.properties.DISTRICT}<br/>
            ${selectedDataType.name}  (${intervalType === 'Yearly' ? 'mm/year' : 'mm/month'}): ${DataItem[selectedDataType.value][selectedTime]}
          </div>
        `;
      layer.bindTooltip(popupContent, { sticky: true });
      layer.openTooltip();
    });

    layer.on('mouseout', function () {
      layer.closeTooltip();
    });
  }


  const DistrictStyle = (feature => {
    if (selectedTime !== "") {
      const getDensityFromData = (name) => {
        const DataItem = HydroclimaticStats.find(item => item.DISTRICT === name);

        return DataItem[selectedDataType.value] ? DataItem[selectedDataType.value][selectedTime] : null
      };

      const density = getDensityFromData(feature.properties.DISTRICT);
      return ({
        fillColor: ColorLegendsDataItem ? fillDensityColor(ColorLegendsDataItem, density) : "none",
        weight: 1,
        opacity: 1,
        color: 'black',
        dashArray: '2',
        fillOpacity: 1
      });

    }

  });



  return (
    <div className='dasboard_page_container'>
      <div className='main_dashboard'>
        <div className='left_panel_equal'>

        <div className='card_container'>
              <SelectedFeatureHeading
                selectedView={selectedView}
                selectedFeatureName={selectedFeatureName}
              />
            </div>


          <div className='card_container'>
            <div className='defination_container'>
              <h4>Water Footprint</h4>
            </div>
            <WaterFootprintChart />

          </div>





          <div className='card_container'>
            <div className='defination_container'>
              <h4>Average anuual Green and Blue ET by districts</h4>
            </div>
            <div className='item_table_container'>
              <table className='item_table'>
                <thead>
                  <tr>
                    <th>District</th>
                    <th>Average ET Blue (mm/year)</th>
                    <th>Average ET Green (mm/year)</th>
                    <th>Average ET Blue Volume (MCM/year)</th>
                    <th>Average ET Green Volume (MCM/year)</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFeaturesItems.map((districtData, index) => (
                    <tr key={index}>
                      <td>{districtData.DISTRICT}</td>
                      <td>{calculateSumOfArray(districtData.ETB).toFixed(2)}</td>
                      <td>{calculateSumOfArray(districtData.ETG).toFixed(2)}</td>
                      <td>{(calculateAverageOfArray(districtData.ETB) * 0.001 * districtData.AREA / 1000000).toFixed(2)}</td>
                      <td>{(calculateAverageOfArray(districtData.ETG) * 0.001 * districtData.AREA / 1000000).toFixed(2)}</td>
                    </tr>
                  ))}

                </tbody>

              </table>
            </div>
          </div>

          {selectedView === "COUNTRY" && (
            <div className="card_container" style={{ overflow: "scroll" }}>
              <div className='defination_container'>
                <h4>Crop Specific water footprint </h4>
              </div>
              <CropWaterFootprintChart />
            </div>


          )}



        </div>

        <div className='right_panel_equal' >
          <div className='card_container' style={{ height: "100%" }}>
            <MapContainer
              fullscreenControl={true}
              center={mapCenter}
              style={{ width: '100%', height: "100%", backgroundColor: 'white', border: 'none', margin: 'auto' }}
              zoom={setInitialMapZoom()}
              maxBounds={[[23, 49], [41, 82]]}
              minZoom={setInitialMapZoom()}
              keyboard={false}
              dragging={setDragging()}
              // attributionControl={false}
              // scrollWheelZoom={false}
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

                        {MapDataLayers.slice(0, 2).map((item, index) => (
                          <div key={index} className="form-check">
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

                        {MapDataLayers.slice(2, 4).map((item, index) => (
                          <div key={index} className="form-check">
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

                        <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                          {renderTimeOptions(intervalType)}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <TileLayer
                key={selectedBasemapLayer.url}
                attribution={selectedBasemapLayer.attribution}
                url={selectedBasemapLayer.url}
                subdomains={selectedBasemapLayer.subdomains}
              />




              {selectedDataType.value === 'avg_ETB_raster' ? (
                <>
                  <WMSTileLayer
                    attribution={selectedDataType.attribution}
                    url={`${process.env.REACT_APP_GEOSERVER_URL}/geoserver/AFG_Dashboard/wms`}
                    params={{ LAYERS: '	AFG_Dashboard:ETb_2018-2023_avg' }}
                    version="1.1.0"
                    transparent={true}
                    format="image/png"
                    key="avg_ETB_raster"
                  />
                  <PixelValue layername="ETb_2018-2023_avg" unit="mm/year" />

                  <RasterLayerLegend
                    layerName="ETb_2018-2023_avg"
                    Unit="(mm/year)"
                  />





                </>

              ) : selectedDataType.value === 'avg_ETG_raster' ? (
                <>
                  <WMSTileLayer
                    attribution={selectedDataType.attribution}
                    url={`${process.env.REACT_APP_GEOSERVER_URL}/geoserver/AFG_Dashboard/wms`}
                    params={{ LAYERS: '	AFG_Dashboard:ETg_2018-2023_avg' }}
                    version="1.1.0"
                    transparent={true}
                    format="image/png"
                    key="avg_ETG_raster"
                  />

                  <PixelValue layername="ETg_2018-2023_avg" unit="mm/year" />

                  <RasterLayerLegend
                    layerName="ETg_2018-2023_avg"
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





              <BaseMap />

            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WaterFootprintPage