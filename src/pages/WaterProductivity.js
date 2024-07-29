import React, { useEffect, useState } from 'react'
import { MapContainer, GeoJSON, TileLayer, WMSTileLayer } from 'react-leaflet'
import * as L from "leaflet";
import "leaflet/dist/leaflet.css"
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import BaseMap from '../components/BaseMap';
import { WaterProductivityWeightedMeanStatsFunction, YearsArray, calculateAverageOfArray, fillDensityColor, getSumAnnualDataFromMonthly, getAnnualMeanDataFromMonthly, renderTimeOptions, MonthsArray } from '../helpers/functions';
import { BaseMapsLayers, mapCenter, setDragging, setInitialMapZoom } from '../helpers/mapFunction';

import Plot from 'react-plotly.js';
import { ColorLegendsData } from '../assets/data/ColorLegendsData';
import { useSelectedFeatureContext } from '../contexts/SelectedFeatureContext';

import FiltereredDistrictsFeatures from '../components/FiltereredDistrictsFeatures.js';
import PixelValue from './PixelValue';
import SelectedFeatureHeading from '../components/SelectedFeatureHeading.js';
import { useLoaderContext } from '../contexts/LoaderContext.js';
import axios from 'axios';
import Preloader from '../components/Preloader.js';
import ReactApexChart from 'react-apexcharts';
import { BsInfoCircleFill } from 'react-icons/bs';
import GeoserverLegend from '../components/legend/GeoserverLegend.js';
import DynamicLegend from '../components/legend/DynamicLegend.js';
import { useModalHandles } from '../components/ModalHandles.js';



const MapDataLayers = [
  {
    name: "Annual Biomass Water Productivity (Avg. 2018-2023)",
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
  const { selectedView, selectedFeatureName, dataView } = useSelectedFeatureContext();
  const [selectedBasemapLayer, setSelectedBasemapLayer] = useState(BaseMapsLayers[0]);
  const [selectedDataType, setSelectedDataType] = useState(MapDataLayers[0]);
  const { setIsLoading } = useLoaderContext();
  const [waterProductivityStats, setWaterProductivityStats] = useState(null);
  const {  handleBiomassWaterProductivity} = useModalHandles();




  const fetchWaterProductivityStats = (view, featureName) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/featureData/WaterProductivityStats/`, {
        params: {
          view: view,
          featureName: featureName
        }
      })
      .then(response => {
        setWaterProductivityStats(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  useEffect(() => {
    if (selectedView && selectedFeatureName) {
      setIsLoading(true);
      Promise.all([
        fetchWaterProductivityStats(selectedView, selectedFeatureName),
      ]).then(() => {
        setIsLoading(false);
      }).catch(() => {
        setIsLoading(false);
      });
    }
  }, [selectedView, selectedFeatureName]);

  const SelectedFeaturesStatsData = waterProductivityStats && WaterProductivityWeightedMeanStatsFunction(waterProductivityStats);


  console.log(SelectedFeaturesStatsData)


  // console.log(SelectedFeaturesStatsData && SelectedFeaturesStatsData.NPP_overall.map((value, index) => ((value * 22.222 * 0.1) )))


  const handleBasemapSelection = (e) => {
    const selectedItem = BaseMapsLayers.find((item) => item.name === e.target.value);
    setSelectedBasemapLayer(selectedItem);

  };



  function DistrictOnEachfeature(feature, layer) {
    layer.on("mouseover", function (e) {
      const DataItem = waterProductivityStats.find(
        (item) => item[dataView] === feature.properties.NAME
      );

      const biomassProduction = (DataItem['NPP_overall'][selectedTime] * 22.22 * 0.1 / DataItem['AETI_overall'][selectedTime]).toFixed(2);


      const popupContent = `
            <div>
            ${dataView}: ${feature.properties.NAME}<br/>
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
      const getDensityFromData = (name, view) => {
        const DataItem = waterProductivityStats.find((item) => item[view] === name);
        return DataItem ? DataItem['NPP_overall'][selectedTime] * 22.22 * 0.1 / DataItem['AETI_overall'][selectedTime] : null;
      };
      const density = getDensityFromData(feature.properties.NAME, dataView)

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
    <>
      {SelectedFeaturesStatsData ? (
        <div className='dasboard_page_container'>
          <div className='main_dashboard'>
            <div className='left_panel_equal'>

              <SelectedFeatureHeading />






              <div className="card_container">
                <div className='card_heading_container'>
                  <div className='card_heading'>
                    <h4>Biomass Water Productivity (BWP)</h4>
                  </div>

                  <div className='info_container'>
                    <div className='heading_info_button' onClick={handleBiomassWaterProductivity}>
                      <BsInfoCircleFill />
                    </div>
                    
                  </div>
                </div>




                <ReactApexChart options={
                  {
                    chart: {
                      type: 'bar',
                      height: "100%"
                    },
                    dataLabels: {
                      enabled: false
                    },

                    xaxis: {
                      type: 'datetime',
                      categories: YearsArray,
                      labels: {
                        rotate: 0,
                      },
                      tickPlacement: 'on',
                    },
                    yaxis: {
                      title: {
                        text: 'Biomass Water Productivity (kg/m³)'
                      }
                    },
                    fill: {
                      opacity: 1
                    },
                    tooltip: {
                      x: {
                        format: 'yyyy'
                      },
                      y: {
                        formatter: function (val) {
                          return `${val.toFixed(2)}`
                        }
                      }
                    }
                  }
                }
                  series={
                    [{
                      name: 'Biomass Water Productivity (kg/m³)',
                      data: getAnnualMeanDataFromMonthly(SelectedFeaturesStatsData.NPP_overall.map((value, index) => ((value * 22.222 * 0.1) / SelectedFeaturesStatsData.AETI_overall[index]))),
                    }]
                  }
                  type="bar" />

              </div>








              <div className="card_container">
                <div className='card_heading_container'>
                  <div className='card_heading'>
                    <h4>Biomass Water Productivity for only cropland (BWP<sub>crop</sub>)</h4>
                  </div>


                </div>


                <ReactApexChart options={
                  {
                    chart: {
                      type: 'bar',
                      height: "100%"
                    },
                    dataLabels: {
                      enabled: false
                    },
                    stroke: {
                      curve: 'smooth',
                      width: 2
                    },
                    // markers: {
                    //   size: 3,
                    // },

                    xaxis: {
                      type: 'datetime',
                      categories: YearsArray,
                      labels: {
                        rotate: 0,
                      },
                      tickPlacement: 'on',
                    },
                    yaxis: {
                      title: {
                        text: 'BWPcrop (kg/m³)'
                      }
                    },
                    fill: {
                      opacity: 1
                    },
                    tooltip: {
                      x: {
                        format: 'yyyy'
                      },

                      y: {
                        formatter: function (val) {
                          return `${val.toFixed(2)}`
                        }
                      }
                    }
                  }
                }
                  series={
                    [{
                      name: 'BWPcrop (kg/m³)',
                      data: getAnnualMeanDataFromMonthly(SelectedFeaturesStatsData.NPP_irrigated.map((value, index) => (((value + SelectedFeaturesStatsData.NPP_rainfed[index]) / 2 * 22.222 * 0.1) / ((SelectedFeaturesStatsData.AETI_irrigated[index] + SelectedFeaturesStatsData.AETI_rainfed[index]) / 2)))),
                    }]
                  }
                  type="bar" />


              </div>






              <div className="card_container">
                <div className='card_heading_container'>
                  <div className='card_heading'>
                    <h4>Irrigated Water Productivity (IWP)</h4>
                  </div>


                </div>




                <ReactApexChart options={
                  {
                    chart: {
                      type: 'bar',
                      height: "100%"
                    },
                    dataLabels: {
                      enabled: false
                    },
                    stroke: {
                      curve: 'smooth',
                      width: 2
                    },
                    // markers: {
                    //   size: 3,
                    // },

                    xaxis: {
                      type: 'datetime',
                      categories: MonthsArray,
                      labels: {
                        rotate: 0,
                      },
                      tickPlacement: 'on',
                    },
                    yaxis: {
                      title: {
                        text: 'Irrigated Water Productivity (kg/m³)'
                      }
                    },
                    fill: {
                      opacity: 1
                    },
                    tooltip: {
                      x: {
                        format: 'MMM yyyy'
                      },
                      y: {
                        formatter: function (val) {
                          return `${val.toFixed(2)}`
                        }
                      }
                    }
                  }
                }
                  series={
                    [{
                      name: 'Irrigated Water Productivity (kg/m³)',
                      data: SelectedFeaturesStatsData.NPP_irrigated.map((value, index) => {
                        const pcpEffective = Math.max(0, SelectedFeaturesStatsData.PCP_irrigated[index] * 0.6 - 10);
                        const Irr_Water_Productivity = Math.max(0, ((value * 22.222 * 0.1) / ((SelectedFeaturesStatsData.AETI_irrigated[index] - pcpEffective) * 0.1)).toFixed(2));
                        return Irr_Water_Productivity;
                      }),
                      color: "#009957"
                    }]
                  }
                  type="line" />


              </div>


              <div className="card_container">
                <div className='card_heading_container'>
                  <div className='card_heading'>
                    <h4>Rainfed Water Productivity (RWP)</h4>
                  </div>


                </div>



                <ReactApexChart options={
                  {
                    chart: {
                      type: 'bar',
                      height: "100%"
                    },
                    dataLabels: {
                      enabled: false
                    },
                    stroke: {
                      curve: 'smooth',
                      width: 2
                    },
                    // markers: {
                    //   size: 3,
                    // },

                    xaxis: {
                      type: 'datetime',
                      categories: MonthsArray,
                      labels: {
                        rotate: 0,
                      },
                      tickPlacement: 'on',
                    },
                    yaxis: {
                      title: {
                        text: 'Rainfed Water Productivity (kg/m³)'
                      }
                    },
                    fill: {
                      opacity: 1
                    },
                    tooltip: {
                      x: {
                        format: 'MMM yyyy'
                      },
                      y: {
                        formatter: function (val) {
                          return `${val.toFixed(2)}`
                        }
                      }
                    }
                  }
                }
                  series={
                    [{
                      name: 'Rainfed Water Productivity (kg/m³)',
                      data: SelectedFeaturesStatsData.NPP_rainfed.map((value, index) => ((value * 22.222 * 0.1) / SelectedFeaturesStatsData.AETI_rainfed[index]).toFixed(2)),
                      color: "#009957"
                    }]
                  }
                  type="line" />





              </div>

              {/* <div className="card_container">
                <div className='card_heading_container'>
                  <div className='card_heading'>
                    <h4>Irrigation volume consumed</h4>
                  </div>

                  
                </div>



                <ReactApexChart options={
                  {
                    chart: {
                      type: 'bar',
                      height: "100%"
                    },
                    dataLabels: {
                      enabled: false
                    },
                    stroke: {
                      curve: 'smooth',
                      width: 2
                    },
                    xaxis: {
                      categories: MonthsArray,
                      labels: {
                        rotate: 0,
                      },
                      tickPlacement: 'on',
                    },
                    yaxis: {
                      title: {
                        text: 'Irrigation volume consumed (BCM)'
                      }
                    },
                    fill: {
                      opacity: 1
                    },
                    tooltip: {
                      y: {
                        formatter: function (val) {
                          return `${val.toFixed(1)}`
                        }
                      }
                    }
                  }
                }
                  series={
                    [{
                      name: 'Irrigation volume consumed (BCM)',
                      data: SelectedFeaturesStatsData.AETI_overall.map((value, index) => ((value - SelectedFeaturesStatsData.PCP_overall[index]) * 0.001 * SelectedFeaturesStatsData.Area_irrigated * 0.6 / 1000000000).toFixed(1)),
                      color: "#009957"
                    }]
                  }
                  type="line" />

              </div> */}


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
                            <button className="accordion-button map_layer_collapse" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                              Raster layers
                            </button>
                          </h2>
                          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
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
                        zIndex={3}
                      />
                      <PixelValue layername="Biomass_Water_Productivity_2018-2023_avg" unit="mm/year" />

                      <GeoserverLegend
                        layerName="Biomass_Water_Productivity_2018-2023_avg"
                        Unit="WP (kg/m³)"
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
                        layerKey={selectedDataType.value + selectedTime + intervalType + (waterProductivityStats && waterProductivityStats.length)}
                        attribution={selectedDataType.attribution}
                      />

                      {ColorLegendsDataItem && (
                        <DynamicLegend ColorLegendsDataItem={ColorLegendsDataItem} />


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
      ) : (
        <Preloader />


      )}</>


  )
}

export default WaterProductivity