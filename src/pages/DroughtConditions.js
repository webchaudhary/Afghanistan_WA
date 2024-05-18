import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import { MapContainer, GeoJSON, WMSTileLayer, TileLayer } from 'react-leaflet'
import * as L from "leaflet";
import "leaflet/dist/leaflet.css"
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import BaseMap from '../components/BaseMap';
import { MonthsArray, SelectedFeaturesAverageSPEIFunction, calculateAverageOfArray, fillDensityColor, renderTimeOptions } from '../helpers/functions';


import Plot from 'react-plotly.js';
import {DroughtConditionStats} from "../assets/data/DroughtConditionStats.js"
import { useSelectedFeatureContext } from '../contexts/SelectedFeatureContext';
import { BaseMapsLayers, mapCenter, setDragging, setInitialMapZoom } from '../helpers/mapFunction';
import spei_legend from "../assets/legends/spei_legend.jpg"
import { ColorLegendsData } from '../assets/data/ColorLegendsData';
import FiltereredDistrictsFeatures from './FiltereredDistrictsFeatures';
import SelectedFeatureHeading from '../components/SelectedFeatureHeading.js';


const MapDataLayers = [
  {
    name: "SPEI 3-month",
    value: "spei_03",
  },
  {
    name: "SPEI 6-month",
    value: "spei_06",
  },
  {
    name: "SPEI 12-month",
    value: "spei_12",
  },
]


const XYZTilelayersData = [
  {
    value: "SPEI_3m",
    layerName: "Standardised Precipitation-Evapotranspiration Index (SPEI)-03 Months",
    baselayerURL: `https://www.ncei.noaa.gov/pub/data/nidis/tile/csic-spei-1d-03m/`,
    // legendURL: `https://www.ncei.noaa.gov/pub/data/nidis/tile/csic-spei-1d-03m/legend.png`,
    legendURL: spei_legend,
    attribution: 'Data Source: <a href="https://spei.csic.es/">CSIC</a>'
  },
  {
    value: "SPEI_6m",
    layerName: "Standardised Precipitation-Evapotranspiration Index (SPEI)-06 Months",
    baselayerURL: `https://www.ncei.noaa.gov/pub/data/nidis/tile/csic-spei-1d-06m/`,
    legendURL: spei_legend,
    attribution: 'Data Source: <a href="https://spei.csic.es/">CSIC</a>'
  },
  {
    value: "SPEI_12m",
    layerName: "Standardised Precipitation-Evapotranspiration Index (SPEI)-12 Months",
    baselayerURL: `https://www.ncei.noaa.gov/pub/data/nidis/tile/csic-spei-1d-12m/`,
    legendURL: spei_legend,
    attribution: 'Data Source: <a href="https://spei.csic.es/">CSIC</a>'
  },

  // {
  //   value: "EDDI_3m",
  //   layerName: "Evaporative Demand Drought Index (EDDI)-03 Months",
  //   baselayerURL: `https://www.ncei.noaa.gov/pub/data/nidis/tile/noaa-eddi-global-03mn/`,
  //   legendURL: `https://www.ncei.noaa.gov/pub/data/nidis/tile/noaa-eddi-global-03mn/legend.png`,
  //   attribution: 'Data Source: <a href="https://psl.noaa.gov/eddi/">NOAA</a>'
  // },
  // {
  //   value: "EDDI_6m",
  //   layerName: "Evaporative Demand Drought Index (EDDI)-06 Months",
  //   baselayerURL: `https://www.ncei.noaa.gov/pub/data/nidis/tile/noaa-eddi-global-06mn/`,
  //   legendURL: `https://www.ncei.noaa.gov/pub/data/nidis/tile/noaa-eddi-global-06mn/legend.png`,
  //   attribution: 'Data Source: <a href="https://psl.noaa.gov/eddi/">NOAA</a>'
  // },
  // {
  //   value: "EDDI_12m",
  //   layerName: "Evaporative Demand Drought Index (EDDI)-12 Months",
  //   baselayerURL: `https://www.ncei.noaa.gov/pub/data/nidis/tile/noaa-eddi-global-12mn/`,
  //   legendURL: `https://www.ncei.noaa.gov/pub/data/nidis/tile/noaa-eddi-global-12mn/legend.png`,
  //   attribution: 'Data Source: <a href="https://psl.noaa.gov/eddi/">NOAA</a>'
  // },
  // {
  //   value: "VHI",
  //   layerName: "Vegetation Health Index (VHI)",
  //   baselayerURL: `https://www.ncei.noaa.gov/pub/data/nidis/tile/noaa-vhi-1km/`,
  //   legendURL: `https://www.ncei.noaa.gov/pub/data/nidis/tile/noaa-vhi-1km/legend.png`,
  //   attribution: 'Data Source: <a href="https://www.star.nesdis.noaa.gov/smcd/emb/vci/VH/vh_1km.php">NOAA</a>'
  // },


];

const DroughtConditions = () => {
  // const [selectedDataType, setSelectedDataType] = useState(XYZTilelayersData[0]);
  const [selectedDataType, setSelectedDataType] = useState(MapDataLayers[0]);


  const { selectedView, selectedFeatureName } = useSelectedFeatureContext();


  const filteredFeaturesItems = selectedView && selectedFeatureName !== "" ? DroughtConditionStats.filter(item => item[selectedView] === selectedFeatureName) : DroughtConditionStats;
  const SelectedFeaturesAverageSPEIData = SelectedFeaturesAverageSPEIFunction(filteredFeaturesItems)



  const [selectedBasemapLayer, setSelectedBasemapLayer] = useState(BaseMapsLayers[0]);


  const handleBasemapSelection = (e) => {
    const selectedItem = BaseMapsLayers.find((item) => item.name === e.target.value);
    setSelectedBasemapLayer(selectedItem);


  };





  const handleDataLayerSelection = (e) => {
    const value = e.target.value;
    const selectedItem = MapDataLayers.find((item) => item.value === value);
    setSelectedDataType(selectedItem);
  };





  const DistrictDensity = (density) => {
    if (density === null) {
      return 'none';
    }

    return density > -0.5
      ? 'white'
      : density > -0.8
        ? 'yellow'
        : density > -1.3
          ? 'rgb(252, 214, 148)'
          : density > -1.6
            ? 'orange'
            : density > -2
              ? 'red'
              : density > -3
                ? 'brown'
                : 'none';
  };




  function DistrictOnEachfeature(feature, layer) {
    layer.on("mouseover", function (e) {
      const DataItem = DroughtConditionStats.find(
        (item) => item.DISTRICT === feature.properties.DISTRICT
      );

      const SPEI_value = DataItem && DataItem[selectedDataType.value] !== "NA"
        ? calculateAverageOfArray(DataItem[selectedDataType.value])
        : null;
      const popupContent = `
            <div>
              District: ${feature.properties.DISTRICT}<br/>
              SPEI: ${SPEI_value}

        <br/>
            </div>
          `;
      layer.bindTooltip(popupContent, { sticky: true });
      layer.openTooltip();
    });

    layer.on("mouseout", function () {
      layer.closeTooltip();
    });
  }


  const DistrictStyle = (feature) => {
    const getDensityFromData = (name) => {
      const DataItem = DroughtConditionStats.find((item) => item.DISTRICT === name);
      return DataItem && DataItem[selectedDataType.value] !== "NA"
        ? DataItem[selectedDataType.value][0]
        : null;
    };
    const density = getDensityFromData(feature.properties.DISTRICT);

    return {
      fillColor: DistrictDensity(density),
      // fillColor: ColorLegendsDataItem ? fillDensityColor(ColorLegendsDataItem, density) : "none",
      weight: 1,
        opacity: 1,
        color: "black",
        dashArray: "2",
        fillOpacity: 1,
    };

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

          <div className='card_container'>
            <div className='defination_container'>
              <h4>Standardised Precipitation-Evapotranspiration Index (SPEI)</h4>
            </div>
            <Plot
              data={[
                {
                  x: ["2018-1", "2018-2", "2018-3", "2018-4", "2018-5", "2018-6", "2018-7", "2018-8", "2018-9", "2018-10", "2018-11", "2018-12", "2019-1", "2019-2", "2019-3", "2019-4", "2019-5", "2019-6", "2019-7", "2019-8", "2019-9", "2019-10", "2019-11", "2019-12", "2020-1", "2020-2", "2020-3", "2020-4", "2020-5", "2020-6", "2020-7", "2020-8", "2020-9", "2020-10", "2020-11", "2020-12", "2021-1", "2021-2", "2021-3", "2021-4", "2021-5", "2021-6", "2021-7", "2021-8", "2021-9", "2021-10", "2021-11", "2021-12", "2022-1", "2022-2", "2022-3", "2022-4", "2022-5", "2022-6", "2022-7", "2022-8", "2022-9", "2022-10", "2022-11", "2022-12", "2023-1", "2023-2", "2023-3", "2023-4", "2023-5", "2023-6", "2023-7", "2023-8", "2023-9", "2023-10", "2023-11"],
                  y: SelectedFeaturesAverageSPEIData.spei_03,
                  type: 'bar',
                  // type: 'scatter',
                  mode: 'lines+markers',
                  marker: {
                    color: SelectedFeaturesAverageSPEIData.spei_03.map(value => value < 0 ? 'red' : 'blue'),
                  },
                },
              ]}
              layout={{
                xaxis: {
                  title: 'Date',
                },
                yaxis: {
                  title: "SPEI 3-Months",
                },
                legend: {
                  orientation: 'h',
                  x: 0,
                  y: 1.2,
                },
              }}
              style={{ width: "100%", height: "100%" }}
            />

            <Plot
              data={[
                {
                  x: ["2018-1", "2018-2", "2018-3", "2018-4", "2018-5", "2018-6", "2018-7", "2018-8", "2018-9", "2018-10", "2018-11", "2018-12", "2019-1", "2019-2", "2019-3", "2019-4", "2019-5", "2019-6", "2019-7", "2019-8", "2019-9", "2019-10", "2019-11", "2019-12", "2020-1", "2020-2", "2020-3", "2020-4", "2020-5", "2020-6", "2020-7", "2020-8", "2020-9", "2020-10", "2020-11", "2020-12", "2021-1", "2021-2", "2021-3", "2021-4", "2021-5", "2021-6", "2021-7", "2021-8", "2021-9", "2021-10", "2021-11", "2021-12", "2022-1", "2022-2", "2022-3", "2022-4", "2022-5", "2022-6", "2022-7", "2022-8", "2022-9", "2022-10", "2022-11", "2022-12", "2023-1", "2023-2", "2023-3", "2023-4", "2023-5", "2023-6", "2023-7", "2023-8", "2023-9", "2023-10", "2023-11"],
                  y: SelectedFeaturesAverageSPEIData.spei_06,
                  type: 'bar',
                  // type: 'scatter',
                  // mode: 'lines+markers',
                  marker: {
                    color: SelectedFeaturesAverageSPEIData.spei_06.map(value => value < 0 ? 'red' : 'blue'),
                  },
                },
              ]}
              layout={{
                xaxis: {
                  title: 'Date',
                },
                yaxis: {
                  title: "SPEI 6-Months",
                },
                legend: {
                  orientation: 'h',
                  x: 0,
                  y: 1.2,
                },
              }}
              style={{ width: "100%", height: "100%" }}
            />

            <Plot
              data={[
                {
                  x: ["2018-1", "2018-2", "2018-3", "2018-4", "2018-5", "2018-6", "2018-7", "2018-8", "2018-9", "2018-10", "2018-11", "2018-12", "2019-1", "2019-2", "2019-3", "2019-4", "2019-5", "2019-6", "2019-7", "2019-8", "2019-9", "2019-10", "2019-11", "2019-12", "2020-1", "2020-2", "2020-3", "2020-4", "2020-5", "2020-6", "2020-7", "2020-8", "2020-9", "2020-10", "2020-11", "2020-12", "2021-1", "2021-2", "2021-3", "2021-4", "2021-5", "2021-6", "2021-7", "2021-8", "2021-9", "2021-10", "2021-11", "2021-12", "2022-1", "2022-2", "2022-3", "2022-4", "2022-5", "2022-6", "2022-7", "2022-8", "2022-9", "2022-10", "2022-11", "2022-12", "2023-1", "2023-2", "2023-3", "2023-4", "2023-5", "2023-6", "2023-7", "2023-8", "2023-9", "2023-10", "2023-11"],
                  y: SelectedFeaturesAverageSPEIData.spei_12,
                  type: 'bar',
                  // type: 'scatter',
                  mode: 'lines+markers',
                  marker: {
                    color: SelectedFeaturesAverageSPEIData.spei_12.map(value => value < 0 ? 'red' : 'blue'),
                  },
                },
              ]}
              layout={{
                xaxis: {
                  title: 'Date',
                },
                yaxis: {
                  title: "SPEI 12-Months",
                },
                legend: {
                  orientation: 'h',
                  x: 0,
                  y: 1.2,
                },
              }}
              style={{ width: "100%", height: "100%" }}
            />

            {/* <select
              className="m-1"
              value={intervalType}
              onChange={handleIntervalTypeChange}
            >
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select> */}

          </div>

        </div>
        <div className='right_panel_equal' >
          <div className='card_container' style={{ height: "100%" }}>
            <MapContainer
              fullscreenControl={true}
              center={mapCenter}
              style={{ width: '100%', height: "100%", backgroundColor: 'white', border: 'none', margin: 'auto' }}
              zoom={setInitialMapZoom()}
              // maxBounds={[[23, 49], [41, 82]]}
              // maxZoom={8}
              // minZoom={setInitialMapZoom()}
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
                        {BaseMapsLayers.map((option,index) => (
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
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                      <button className="accordion-button map_layer_collapse collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Data Layers
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                      <div className="accordion-body map_layer_collapse_body">

                        {MapDataLayers.map((item, index) => (
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
                </div>
              </div>

              <TileLayer
                key={selectedBasemapLayer.url}
                attribution={selectedBasemapLayer.attribution}
                url={selectedBasemapLayer.url}
                subdomains={selectedBasemapLayer.subdomains}
              />


              <BaseMap />




              {/* {selectedDataType.value !== '' && (
                <>
                  <TileLayer
                    attribution={selectedDataType.attribution}
                    url={`${selectedDataType.baselayerURL}/{z}/{x}/{y}.png`}
                  />

                </>


              )} */}


              {/* <GeoJSON
                style={{
                  fillColor: 'black',
                  weight: 2,
                  color: 'black',
                  fillOpacity: "0.001",
                  interactive: false
                }}
                data={AfghanistanCountry.features}
              /> */}

<FiltereredDistrictsFeatures
                          DistrictStyle={DistrictStyle}
                          DistrictOnEachfeature={DistrictOnEachfeature}
                          layerKey={selectedDataType.value }

                          selectedDataType={selectedDataType}
                          attribution='Data Source: <a href="https://spei.csic.es/map/maps.html#months=1#month=1#year=2024" target="_blank">SPEI Global Drought Monitor</a>'
                        />

              <div className='drought_legend_panel'>
                {/* <div className="legend_heading">
                  <p>
                   SPEI
                  </p>
                </div> */}
                <img src={spei_legend} alt='worldcover_Legend' />
              </div>



              {/* <FiltererdJsonFeature /> */}

              {/* <BaseMap /> */}

            </MapContainer>
          </div>
        </div>


      </div>
    </div>

  )
}

export default DroughtConditions