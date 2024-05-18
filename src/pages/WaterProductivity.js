import React, { useState } from 'react'
import { MapContainer, GeoJSON, TileLayer, WMSTileLayer } from 'react-leaflet'
import * as L from "leaflet";
import "leaflet/dist/leaflet.css"
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import BaseMap from '../components/BaseMap';
import { MonthsArray, WaterProductivityStatsFunction, fillDensityColor, renderTimeOptions } from '../helpers/functions';
import { BaseMapsLayers, mapCenter, setDragging, setInitialMapZoom } from '../helpers/mapFunction';

import MapLegend from '../components/MapLegend';
import Plot from 'react-plotly.js';
import { ColorLegendsData } from '../assets/data/ColorLegendsData';
import { useSelectedFeatureContext } from '../contexts/SelectedFeatureContext';

import { WaterProductivityStats } from "../assets/data/WaterProductivityStats.js"
import FiltereredDistrictsFeatures from './FiltereredDistrictsFeatures';
import PixelValue from './PixelValue';
import RasterLayerLegend from '../components/RasterLayerLegend.js';
import SelectedFeatureHeading from '../components/SelectedFeatureHeading.js';





const MapDataLayers = [
  {
    name: "Annual Biomass Water Productivity",
    value: "avg_biomass_water_productivity",
    legend: "",
    attribution: "",
  },

  {
    name: "Biomass Water Productivity",
    value: "WaterProductivity",
    legend: "",
    attribution: "",
  },



]

const WaterProductivity = () => {
  const [intervalType, setIntervalType] = useState('Yearly');
  const [selectedTime, setSelectedTime] = useState(5);
  const { selectedView, selectedFeatureName } = useSelectedFeatureContext();
  const [selectedBasemapLayer, setSelectedBasemapLayer] = useState(BaseMapsLayers[0]);
  const [selectedDataType, setSelectedDataType] = useState(MapDataLayers[0]);



  const filteredFeaturesItems = selectedView && selectedFeatureName !== "" ? WaterProductivityStats.filter(item => item[selectedView] === selectedFeatureName) : WaterProductivityStats;
  const SelectedFeaturesStatsData = WaterProductivityStatsFunction(filteredFeaturesItems)


  const handleBasemapSelection = (e) => {
    const selectedItem = BaseMapsLayers.find((item) => item.name === e.target.value);
    setSelectedBasemapLayer(selectedItem);

  };



  function DistrictOnEachfeature(feature, layer) {
    layer.on("mouseover", function (e) {
      const DataItem = WaterProductivityStats.find(
        (item) => item.DISTRICT === feature.properties.DISTRICT
      );

      const biomassProduction = (DataItem['NPP_overall'][selectedTime] * 22.22 * 0.1 / DataItem['AETI_overall'][selectedTime]).toFixed(2);


      const popupContent = `
            <div>
              District: ${feature.properties.DISTRICT}<br/>
              Biomass Water Productivity: ${biomassProduction} ${intervalType === "Yearly" ? "(kg/ha/year)" : "(kg/ha/month)"
        }<br/>
            </div>
          `;
      layer.bindTooltip(popupContent, { sticky: true });
      layer.openTooltip();
    });

    layer.on("mouseout", function () {
      layer.closeTooltip();
    });
  }

  const ColorLegendsDataItem = ColorLegendsData[`${intervalType}_${selectedDataType.value}`];


  const DistrictStyle = (feature) => {
    if (selectedTime) {
      const getDensityFromData = (name) => {
        const DataItem = WaterProductivityStats.find((item) => item.DISTRICT === name);
        return DataItem ? DataItem['NPP_overall'][selectedTime] * 22.22 * 0.1 / DataItem['AETI_overall'][selectedTime] : null;
      };
      const density = getDensityFromData(feature.properties.DISTRICT);
      return {
        // fillColor: density ? selectedDensityFunc(density):"none",
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






          <div className="card_container">
            <div className='defination_container'>
              <h4>Biomass Water Productivity (BWP)</h4>
            </div>

            <Plot
              data={[
                {
                  x: MonthsArray,
                  y: SelectedFeaturesStatsData.NPP_overall.map((value, index) => ((value * 22.222 * 0.1) / SelectedFeaturesStatsData.AETI_overall[index]).toFixed(2)),

                  type: "scatter",
                  mode: "lines+markers",
                  marker: { color: "green" },
                },
              ]}
              layout={{
                xaxis: {
                  title: "Year",
                },
                yaxis: {
                  title: "Biomass Water Productivity (kg/m³)"
                },
              }}
              style={{ width: "100%", height: "100%" }}
            />
          </div>








          <div className="card_container">
            <div className='defination_container'>
              <h4>Biomass Water Productivity for only cropland (BWP<sub>crop</sub>)</h4>
            </div>
            <Plot
              data={[
                {
                  x: MonthsArray,
                  y: SelectedFeaturesStatsData.NPP_irrigated.map((value, index) => (((value + SelectedFeaturesStatsData.NPP_rainfed[index]) / 2 * 22.222 * 0.1) / ((SelectedFeaturesStatsData.AETI_irrigated[index] + SelectedFeaturesStatsData.AETI_rainfed[index]) / 2)).toFixed(2)),
                  type: "scatter",
                  mode: "lines+markers",
                  marker: { color: "green" },
                },
              ]}
              layout={{
                xaxis: {
                  title: "Year",
                },
                yaxis: {
                  title: "BWPcrop (kg/m³)"
                },
              }}
              style={{ width: "100%", height: "100%" }}
            />

          </div>

          <div className="card_container">
            <div className='defination_container'>
              <h4>Irrigated Water Productivity (IWP)</h4>
            </div>

            <Plot
              data={[
                {
                  x: MonthsArray,
                  y: SelectedFeaturesStatsData.NPP_irrigated.map((value, index) => {
                    const pcpEffective = Math.max(0, SelectedFeaturesStatsData.PCP_irrigated[index] * 0.6 - 10);
                    const Irr_Water_Productivity = Math.max(0, ((value * 22.222 * 0.1) / ((SelectedFeaturesStatsData.AETI_irrigated[index] - pcpEffective) * 0.1)).toFixed(2));
                    return Irr_Water_Productivity;
                  }),

                  type: "scatter",
                  mode: "lines+markers",
                  marker: { color: "green" },
                },
              ]}
              layout={{
                xaxis: {
                  title: "Year",
                },
                yaxis: {
                  title: "Irrigated Water Productivity (kg/m³)"
                },
              }}
              style={{ width: "100%", height: "100%" }}
            />

          </div>


          <div className="card_container">
            <div className='defination_container'>
              <h4>Rainfed Water Productivity (RWP)</h4>
            </div>
            <Plot
              data={[
                {
                  x: MonthsArray,
                  y: SelectedFeaturesStatsData.NPP_rainfed.map((value, index) => ((value * 22.222 * 0.1) / SelectedFeaturesStatsData.AETI_rainfed[index]).toFixed(2)),
                  type: "scatter",
                  mode: "lines+markers",
                  marker: { color: "green" },
                },
              ]}
              layout={{
                xaxis: {
                  title: "Year",
                },
                yaxis: {
                  title: "Rainfed Water Productivity (kg/m³)"
                },
              }}
              style={{ width: "100%", height: "100%" }}
            />


          </div>

          <div className="card_container">
            <div className='defination_container'>
              <h4>Irrigation volume consumed</h4>
            </div>
            <Plot
              data={[
                {
                  x: MonthsArray,
                  y: SelectedFeaturesStatsData.AETI_overall.map((value, index) => (value - SelectedFeaturesStatsData.PCP_overall[index]) * 0.001 * SelectedFeaturesStatsData.Area_irrigated * 0.6 / 1000000000),
                  type: "scatter",
                  mode: "lines+markers",
                  marker: { color: "green" },
                },
              ]}
              layout={{
                xaxis: {
                  title: "Year",
                },
                yaxis: {
                  title: "Irrigation volume consumed (BCM)"
                },
              }}
              style={{ width: "100%", height: "100%" }}
            />
          </div>


        </div>
        <div className='right_panel_equal' >
          <div className='card_container' style={{ height: "100%" }}>
            <MapContainer
              fullscreenControl={true}
              center={mapCenter}
              style={{ width: '100%', height: "100%", backgroundColor: 'white', border: 'none', margin: 'auto' }}
              zoom={setInitialMapZoom()}
              maxBounds={[[23, 49], [41, 82]]}
              // maxZoom={8}
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
                        {MapDataLayers.slice(0, 1).map((item, index) => (
                          <div key={index} className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
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

                        {MapDataLayers.slice(1, 2).map((item, index) => (
                          <div key={index} className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id={item.value}
                              value={item.value}
                              checked={selectedDataType.value === item.value}
                              onChange={handleDataLayerSelection}
                            />
                            <label htmlFor={item.value}> {item.name}</label>
                          </div>
                        ))}

                        <select
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                        >
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


              {selectedDataType.value === 'avg_biomass_water_productivity' ? (
                <>
                  <WMSTileLayer
                    attribution=""
                    url={`${process.env.REACT_APP_GEOSERVER_URL}/geoserver/AFG_Dashboard/wms`}
                    params={{ LAYERS: '	AFG_Dashboard:Biomass_Water_Productivity_2018-2023_avg' }}
                    version="1.1.0"
                    transparent={true}
                    format="image/png"
                    key="avg_ETB_raster"
                  />
                  <PixelValue layername="Biomass_Water_Productivity_2018-2023_avg" unit="mm/year" />

                  <RasterLayerLegend
                    layerName="Biomass_Water_Productivity_2018-2023_avg"
                    Unit="(kg/m³)"
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


      </div>
    </div>

  )
}

export default WaterProductivity