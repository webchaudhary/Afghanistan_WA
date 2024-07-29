import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import {
  MapContainer,
  GeoJSON,
  TileLayer,
  ImageOverlay,
  WMSTileLayer,
} from "react-leaflet";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-fullscreen/dist/Leaflet.fullscreen.js";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import BaseMap from "../components/BaseMap";
import {
  MonthsArray,
  SelectedFeaturesAverageStatsFunction,
  SelectedFeaturesWeightedAverageStatsFunction,
  calculateAverageOfArray,
  fillDensityColor,
  getSumAnnualDataFromMonthly,
  renderTimeOptions,
} from "../helpers/functions";
import {
  BaseMapsLayers,
  mapCenter,
  maxBounds,
  setDragging,
  setInitialMapZoom,
} from "../helpers/mapFunction";

import { ColorLegendsData } from "../assets/data/ColorLegendsData";
import { useSelectedFeatureContext } from "../contexts/SelectedFeatureContext";
import BiomassProductionChart from "../components/charts/BiomassProductionChart";
import PixelValue from "./PixelValue";
import FiltereredDistrictsFeatures from "../components/FiltereredDistrictsFeatures.js";
import SelectedFeatureHeading from "../components/SelectedFeatureHeading.js";
import { useLoaderContext } from "../contexts/LoaderContext.js";
import axios from "axios";
import Preloader from "../components/Preloader.js";
import ReactApexChart from "react-apexcharts";
import { BsInfoCircleFill } from "react-icons/bs";
import GeoserverLegend from "../components/legend/GeoserverLegend.js";
import DynamicLegend from "../components/legend/DynamicLegend.js";
import { useModalHandles } from "../components/ModalHandles.js";

const MapDataLayers = [
  {
    name: "Annual Biomass Production (Avg. 2018-2023)",
    value: "avg_biomass_raster",
    legend: "",
    attribution: "Data Source: <a href='https://www.fao.org/in-action/remote-sensing-for-water-productivity/wapor-data/en' target='_blank'>WaPOR L1 V3	</a>"
  },
  {
    name: "Biomass Production",
    value: "NPP",
    legend: "",
    attribution: "Data Source: <a href='https://www.fao.org/in-action/remote-sensing-for-water-productivity/wapor-data/en' target='_blank'>WaPOR L1 V3	</a>"
  },
];

const BiomassPage = () => {
  const [intervalType, setIntervalType] = useState("Yearly");
  const [selectedTime, setSelectedTime] = useState(5);
  const [selectedDataType, setSelectedDataType] = useState(MapDataLayers[0]);
  const { setIsLoading } = useLoaderContext();
  const [hydroclimaticStats, setHydroclimaticStats] = useState(null);
  const { handleBiomassProduction , handleBiomassWaterProductivity} = useModalHandles();
  const { selectedView, selectedFeatureName, dataView } = useSelectedFeatureContext();



  const fetchHydroclimaticStats = (view, featureName) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/featureData/HydroclimaticStats/`, {
        params: {
          view: view,
          featureName: featureName
        }
      })
      .then(response => {
        setHydroclimaticStats(response.data);
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

  const SelectedFeaturesStatsData = hydroclimaticStats && SelectedFeaturesWeightedAverageStatsFunction(hydroclimaticStats);



  const [selectedBasemapLayer, setSelectedBasemapLayer] = useState(
    BaseMapsLayers[0]
  );

  const handleBasemapSelection = (e) => {
    const selectedItem = BaseMapsLayers.find(
      (item) => item.name === e.target.value
    );
    setSelectedBasemapLayer(selectedItem);
  };

  const ColorLegendsDataItem =
    ColorLegendsData[`${intervalType}_${selectedDataType.value}`];

  function DistrictOnEachfeature(feature, layer) {
    if (hydroclimaticStats) {
      layer.on("mouseover", function (e) {
        const DataItem = hydroclimaticStats.find(
          (item) => item[dataView] === feature.properties.NAME
        );
        const biomassProduction =
          intervalType === "Monthly"
            ? (DataItem[selectedDataType.value][selectedTime] * 22.222).toFixed(2)
            : (
              getSumAnnualDataFromMonthly(DataItem[selectedDataType.value])[
              selectedTime
              ] * 22.222
            ).toFixed(2);

        const popupContent = `
            <div>
            ${dataView}: ${feature.properties.NAME}<br/>
              Biomass Production: ${biomassProduction} ${intervalType === "Yearly" ? "(kg/ha/year)" : "(kg/ha/month)"
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
  }

  const DistrictStyle = (feature) => {
    if (selectedTime !== "" && hydroclimaticStats) {
      const getDensityFromData = (name, view) => {
        const DataItem = hydroclimaticStats && hydroclimaticStats.find((item) => item[view] === name);
        if (!DataItem) return null;
        if (intervalType === "Monthly") {
          return DataItem[selectedDataType.value][selectedTime] * 22.222; // Monthly density calculation
        } else {
          const annualData = getSumAnnualDataFromMonthly(DataItem[selectedDataType.value]);
          return DataItem[selectedDataType.value] ? annualData[selectedTime] * 22.222 : null;
        }

      };
      const density = getDensityFromData(feature.properties.NAME, dataView);
      return {
        // fillColor: density ? selectedDensityFunc(density):"none",
        fillColor: ColorLegendsDataItem
          ? fillDensityColor(ColorLegendsDataItem, density)
          : "none",
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
    setSelectedTime("");
  };


  const seriesData = SelectedFeaturesStatsData && SelectedFeaturesStatsData.NPP.map((value, index) => {
    // Calculate the value
    const calculatedValue = (value * 22.222 * 0.0001) / (SelectedFeaturesStatsData.AETI[index] * 0.001);
    // Return the value rounded to one decimal place
    return parseFloat(calculatedValue.toFixed(2));
  });



  return (
    <>
      {SelectedFeaturesStatsData ? (
        <div className="dasboard_page_container">
          <div className="main_dashboard">
            <div className="left_panel_equal">
              <SelectedFeatureHeading />

              <div className="card_container">


                <div className='card_heading_container'>
                  <div className='card_heading'>
                    <h4>Biomass Production</h4>
                  </div>

                  <div className='info_container' onClick={handleBiomassProduction}>
                    <div className='heading_info_button'>
                      <BsInfoCircleFill />
                    </div>
                    
                  </div>
                </div>




                <ReactApexChart
                  options={{
                    chart: {
                      height: "100%",
                      type: 'line',
                    },

                    // markers: {
                    //   size: 2,
                    // },
                    stroke: {
                      curve: 'smooth',
                      width: 3
                    },


                    xaxis: {
                      type: 'datetime',
                      categories: MonthsArray,
                      labels: {
                        rotate: 0,
                      },
                      tickPlacement: 'on',
                    },

                    yaxis: [
                      {
                        title: {
                          text: 'Evapotranspiration (mm/month)',
                        },
                        labels: {
                          formatter: (val) => `${parseInt(val)}`, // Ensure labels are integers
                        },

                      },
                      {
                        opposite: true,
                        title: {
                          text: 'Biomass Production (kg/ha/month)',
                        },
                        labels: {
                          formatter: (val) => `${parseInt(val)}`, // Ensure labels are integers
                        },
                      }
                    ],
                    tooltip: {
                      shared: true,
                      intersect: false,
                      x: {
                        format: 'MMM yyyy'
                      },
                      y: [{
                        formatter: function (val) {
                          return `${val}`;
                        }
                      }, {
                        formatter: function (val) {
                          return `${val.toFixed(2)}`;
                        }
                      }]
                    },
                    legend: {
                      horizontalAlign: 'left',
                      offsetX: 40
                    }
                  }}
                  series={[
                    {
                      name: 'Evapotranspiration (mm/month)',
                      type: 'line',
                      data: SelectedFeaturesStatsData.AETI,
                      color: '#265073',
                    },
                    {
                      name: 'Biomass Production (kg/ha/month)',
                      type: 'line',
                      data: SelectedFeaturesStatsData.NPP.map(value => value * 22.222),
                      color: '#009957',
                    }
                  ]}
                  type="line"
                  style={{ width: "100%", height: "100%" }}
                />


              </div>

              <div className="card_container">

                <div className='card_heading_container'>
                  <div className='card_heading'>
                    <h4>Biomass Water Productivity</h4>
                  </div>

                  <div className='info_container'>
                    <div className='heading_info_button' onClick={handleBiomassWaterProductivity}>
                      <BsInfoCircleFill />
                    </div>
                    
                  </div>
                </div>



                <ReactApexChart
                  options={{
                    chart: {
                      type: 'bar',
                      height: "100%"
                    },
                    dataLabels: {
                      enabled: false
                    },

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
                        text: 'Average Water Productivity (kg/m³)'
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
                          return `${parseFloat(val).toFixed(2)} (kg/m³)`;
                        }
                      }
                    }
                  }}
                  series={[{
                    name: 'Average Water Productivity',
                    data: seriesData,
                  }]}
                  type="bar"
                />
              </div>

              <div
                className="card_container"
                style={{ maxHeight: "600px", overflow: "scroll" }}
              >
                <div className='card_heading_container'>
                  <div className='card_heading'>
                    <h4>Average annual Biomass Production per {dataView.toLowerCase()}</h4>
                  </div>

                  
                </div>

                <BiomassProductionChart
                  hydroclimaticStats={hydroclimaticStats}
                />
              </div>
            </div>

            <div className="right_panel_equal">
              <div className="card_container" style={{ height: "100%" }}>
                <MapContainer
                  fullscreenControl={true}
                  center={mapCenter}
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "white",
                    border: "none",
                    margin: "auto",
                  }}
                  zoom={setInitialMapZoom()}
                  maxBounds={maxBounds}
                  // maxZoom={8}
                  minZoom={setInitialMapZoom()}
                  keyboard={false}
                  dragging={setDragging()}
                  // attributionControl={false}
                  // scrollWheelZoom={false}
                  doubleClickZoom={false}
                >
                  <div className="map_heading">
                    <p> {selectedDataType.name} </p>
                  </div>

                  <div className="map_layer_manager">
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingOne"
                        >
                          <button
                            className="accordion-button map_layer_collapse collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseOne"
                          >
                            Base Map
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingOne"
                        >
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
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingThree"
                        >
                          <button
                            className="accordion-button map_layer_collapse collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree"
                          >
                            Vector Data Layers
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingThree"
                        >
                          <div className="accordion-body map_layer_collapse_body">
                            {MapDataLayers.slice(1, 2).map((item, index) => (
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

                            {/* <select
                          value={intervalType}
                          onChange={handleIntervalTypeChange}
                        >
                          <option value="Monthly">Monthly</option>
                          <option value="Yearly">Yearly</option>
                        </select> */}

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

                  <BaseMap />

                  {selectedDataType.value === "avg_biomass_raster" ? (
                    <>
                      <WMSTileLayer
                        attribution={selectedDataType.attribution}
                        url={`${process.env.REACT_APP_GEOSERVER_URL}/geoserver/AFG_Dashboard/wms`}
                        params={{ LAYERS: "	AFG_Dashboard:BiomassProduction_2018-2023_avg" }}
                        version="1.1.0"
                        transparent={true}
                        format="image/png"
                        key="avg_biomass_raster"
                        zIndex={3}
                      />
                      <PixelValue
                        layername="BiomassProduction_2018-2023_avg"
                        unit="kg/ha/year"
                      />
                      <GeoserverLegend
                        layerName="BiomassProduction_2018-2023_avg"
                        Unit="TBP (kg/ha/year)"
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
                        layerKey={selectedDataType.value + selectedTime + intervalType + (hydroclimaticStats && hydroclimaticStats.length)}
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
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      )
        : (
          <Preloader />

        )}</>

  );
};

export default BiomassPage;
