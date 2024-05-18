import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import { MapContainer, GeoJSON, WMSTileLayer, TileLayer } from 'react-leaflet'
import * as L from "leaflet";
import "leaflet/dist/leaflet.css"
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import BaseMap from '../components/BaseMap';
import { MonthsArray, SelectedFeaturesAverageSPEIFunction, calculateAverageOfArray, fillDensityColor, renderTimeOptions } from '../helpers/functions';


import Plot from 'react-plotly.js';
import { useSelectedFeatureContext } from '../contexts/SelectedFeatureContext';
import { BaseMapsLayers, mapCenter, setDragging, setInitialMapZoom } from '../helpers/mapFunction';
import spei_legend from "../assets/legends/spei_legend.jpg"
import { ColorLegendsData } from '../assets/data/ColorLegendsData';
import FiltereredDistrictsFeatures from '../components/FiltereredDistrictsFeatures.js';
import SelectedFeatureHeading from '../components/SelectedFeatureHeading.js';
import axios from 'axios';
import { useLoaderContext } from '../contexts/LoaderContext.js';
import Preloader from '../components/Preloader.js';
import SPEIChart from '../components/charts/SPEIChart.js';
import { BsInfoCircleFill } from 'react-icons/bs';


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


  const { selectedView, selectedFeatureName, dataView } = useSelectedFeatureContext();


  const { setIsLoading } = useLoaderContext();
  const [droughtConditionStats, setDroughtConditionStats] = useState(null);


  const [selectedBasemapLayer, setSelectedBasemapLayer] = useState(BaseMapsLayers[0]);



  const fetchHydroclimaticStats = (view, featureName) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/featureData/DroughtConditionStats/`, {
        params: {
          view: view,
          featureName: featureName
        }
      })
      .then(response => {
        setDroughtConditionStats(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  useEffect(() => {
    if (selectedView && selectedFeatureName) {
      setIsLoading(true);
      Promise.all([
        fetchHydroclimaticStats(selectedView, selectedFeatureName),
      ]).then(() => {
        setIsLoading(false);
      }).catch(() => {
        setIsLoading(false);
      });
    }
  }, [selectedView, selectedFeatureName]);

  const SelectedFeaturesStatsData = droughtConditionStats && SelectedFeaturesAverageSPEIFunction(droughtConditionStats);



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
      const DataItem = droughtConditionStats.find(
        (item) => item[dataView] === feature.properties.NAME
      );

      const SPEI_value = DataItem && DataItem[selectedDataType.value] !== "NA"
        ? calculateAverageOfArray(DataItem[selectedDataType.value])
        : null;
      const popupContent = `
            <div>
            ${dataView}: ${feature.properties.NAME}<br/>
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
    const getDensityFromData = (name, view) => {
      const DataItem = droughtConditionStats.find((item) => item[view] === name);
      return DataItem && DataItem[selectedDataType.value] !== "NA"
        ? DataItem[selectedDataType.value][0]
        : null;
    };
    const density = getDensityFromData(feature.properties.NAME, dataView)

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
    <>
      {SelectedFeaturesStatsData ? (
        <div className='dasboard_page_container'>
          <div className='main_dashboard'>
            <div className='left_panel_equal'>
              <SelectedFeatureHeading />

              <div className='card_container'>

                  <div className='card_heading_container'>
                    <div className='card_heading'>
                      <h4>Standardised Precipitation-Evapotranspiration Index (SPEI)</h4>
                    </div>

                    <div className='info_container'>
                      <div className='heading_info_button'>
                        <BsInfoCircleFill />
                      </div>
                      <div className='info_card_container'>
                        <p>
                        The SPEI is a multiscalar drought index based on climatic data. It can be used for determining the onset, duration and magnitude of drought conditions with respect to normal conditions in a variety of natural and managed systems such as crops, ecosystems, rivers, water resources, etc.

                        </p>
 

                      </div>
                    </div>
                  </div>


              
                <SPEIChart
                  chartData={SelectedFeaturesStatsData.spei_03}
                  title="SPEI 3-Months"
                />

                <SPEIChart
                  chartData={SelectedFeaturesStatsData.spei_06}
                  title="SPEI 6-Months"
                />

                <SPEIChart
                  chartData={SelectedFeaturesStatsData.spei_12}
                  title="SPEI 12-Months"
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
                    layerKey={selectedDataType.value}

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
      ) : (
        <Preloader />
      )}
    </>


  )
}

export default DroughtConditions