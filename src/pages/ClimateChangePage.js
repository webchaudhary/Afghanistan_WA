import React, { useEffect, useState } from 'react'
import BaseMap from '../components/BaseMap'
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet'
import * as L from "leaflet";
import "leaflet/dist/leaflet.css"
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import { MonthsArray, SelectedFeaturesAverageClimateParaFunction, YearsArray, fillDensityColor, getSumAnnualDataFromMonthly, renderTimeOptions } from '../helpers/functions';
import { BaseMapsLayers, mapCenter, setDragging, setInitialMapZoom } from '../helpers/mapFunction';
import ClimateProjectionsChart from '../components/charts/ClimateProjectionsChart';
import { useSelectedFeatureContext } from '../contexts/SelectedFeatureContext';
import MapLegend from '../components/MapLegend';
import { ColorLegendsData } from "../assets/data/ColorLegendsData";
import FiltereredDistrictsFeatures from '../components/FiltereredDistrictsFeatures.js';
import SelectedFeatureHeading from '../components/SelectedFeatureHeading.js';
import { useLoaderContext } from '../contexts/LoaderContext.js';
import axios from 'axios';
import Preloader from '../components/Preloader.js';



const MapDataLayers = [
  {
    name: "Precipitation (ssp585)",
    value: "pcp_ssp585",
  },
  {
    name: "Precipitation (ssp245)",
    value: "pcp_ssp245",
  },
  {
    name: "Temperature (ssp585)",
    value: "tdeg_ssp585",
  },
  {
    name: "Temperature (ssp245)",
    value: "tdeg_ssp245",
  },

]

const ClimateChangePage = () => {
  const [selectedDataType, setSelectedDataType] = useState(MapDataLayers[0]);
  const [selectedTime, setSelectedTime] = useState(8);
  const { selectedView, selectedFeatureName , dataView} = useSelectedFeatureContext();
  const { setIsLoading } = useLoaderContext();
  const [climateChangeStats, setClimateChangeStats] = useState(null);


  const [selectedBasemapLayer, setSelectedBasemapLayer] = useState(BaseMapsLayers[0]);




  const fetchClimateChangeStats = (view, featureName) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/featureData/ClimateChangeStats/`, {
        params: {
          view: view,
          featureName: featureName
        }
      })
      .then(response => {
        setClimateChangeStats(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  useEffect(() => {
    if (selectedView && selectedFeatureName) {
      setIsLoading(true);
      Promise.all([
        fetchClimateChangeStats(selectedView, selectedFeatureName),
      ]).then(() => {
        setIsLoading(false);
      }).catch(() => {
        setIsLoading(false);
      });
    }
  }, [selectedView, selectedFeatureName]);

  const SelectedFeaturesStatsData = climateChangeStats && SelectedFeaturesAverageClimateParaFunction(climateChangeStats);





  const handleBasemapSelection = (e) => {
    const selectedItem = BaseMapsLayers.find((item) => item.name === e.target.value);
    setSelectedBasemapLayer(selectedItem);
  };



  const handleDataLayerSelection = (e) => {
    const value = e.target.value;
    const selectedItem = MapDataLayers.find((item) => item.value === value);
    setSelectedDataType(selectedItem);
  };


  const ColorLegendsDataItem = ColorLegendsData[`${selectedDataType.value}`];

  function DistrictOnEachfeature(feature, layer) {
    layer.on("mouseover", function (e) {
      const DataItem = climateChangeStats.find(
        (item) => item[dataView] === feature.properties.NAME
      );
      const popupContent = `
            <div>
              ${dataView}: ${feature.properties.NAME}<br/>
              ${selectedDataType.value === 'pcp_ssp585' ? `Precipitation: ${DataItem[selectedDataType.value][selectedTime]} (mm)` :
          selectedDataType.value === 'pcp_ssp245' ? `Precipitation: ${DataItem[selectedDataType.value][selectedTime]} (mm)` :
            selectedDataType.value === 'tdeg_ssp585' ? `Temperature: ${DataItem[selectedDataType.value][selectedTime]} (°C))` :
              selectedDataType.value === 'tdeg_ssp245' ? `Temperature: ${DataItem[selectedDataType.value][selectedTime]} (°C))` :
                null}
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
    if (selectedTime !== "") {
      const getDensityFromData = (name, view) => {
        const DataItem = climateChangeStats.find((item) => item[view] === name);
        return DataItem[selectedDataType.value][selectedTime]
      };
      const density = getDensityFromData(feature.properties.NAME, dataView)
      return {
        fillColor: ColorLegendsDataItem ? fillDensityColor(ColorLegendsDataItem, density) : "none",
        // fillColor: selectedTime !== '' ? Annual_Density(density) : "none",
        weight: 1,
        opacity: 1,
        color: "black",
        dashArray: "2",
        fillOpacity: 1,
      };
    }
  };


  const ClimateChangeProjectionYears_StringArray = ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040", "2041", "2042", "2043", "2044", "2045", "2046", "2047", "2048", "2049", "2050", "2051", "2052", "2053", "2054", "2055", "2056", "2057", "2058", "2059", "2060", "2061", "2062", "2063", "2064", "2065", "2066", "2067", "2068", "2069", "2070", "2071", "2072", "2073", "2074", "2075", "2076", "2077", "2078", "2079", "2080", "2081", "2082", "2083", "2084", "2085", "2086", "2087", "2088", "2089", "2090", "2091", "2092", "2093", "2094", "2095", "2096", "2097", "2098", "2099", "2100"]

  const ClimateChangeProjectionYears_NumArray = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100]

  return (
    <>
    {SelectedFeaturesStatsData ? (
      <div className='dasboard_page_container'>
      <div className='main_dashboard'>

        <div className='left_panel_equal'>
        <SelectedFeatureHeading/>



          <div className='card_container'>

            
            <div className='defination_container'>
              <h4>Temperature</h4>
            </div>
            <ClimateProjectionsChart
            yearsArray={ClimateChangeProjectionYears_StringArray}
              xData={ClimateChangeProjectionYears_NumArray}
              yData={SelectedFeaturesStatsData.tdeg_ssp245}
              xAxisLabel="Year"
              yAxisLabel="Temperature under SSP 245 (°C)"
              color="purple"
              slopeUnit="°C"
            />
            <ClimateProjectionsChart
            yearsArray={ClimateChangeProjectionYears_StringArray}
              xData={ClimateChangeProjectionYears_NumArray}
              yData={SelectedFeaturesStatsData.tdeg_ssp585}
              xAxisLabel="Year"
              yAxisLabel="Temperature under SSP 585 (°C)"
              color="purple"
              slopeUnit="°C"
            />
          </div>

          <div className='card_container'>
            <div className='defination_container'>
              <h4>Precipitation</h4>
            </div>
            <ClimateProjectionsChart
            yearsArray={ClimateChangeProjectionYears_StringArray}
            xData={ClimateChangeProjectionYears_NumArray}
              yData={SelectedFeaturesStatsData.pcp_ssp245}
              xAxisLabel="Year"
              yAxisLabel="Precipitation under SSP 245 (mm/year)"
              color="blue"
              slopeUnit="mm/year"
            />

            <ClimateProjectionsChart
            yearsArray={ClimateChangeProjectionYears_StringArray}
            xData={ClimateChangeProjectionYears_NumArray}
              yData={SelectedFeaturesStatsData.pcp_ssp585}
              xAxisLabel="Year"
              yAxisLabel="Precipitation under SSP 585 (mm/year)"
              color="blue"
              slopeUnit="mm/year"
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
                  {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                      <button className="accordion-button map_layer_collapse collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Raster Layers
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                      <div className="accordion-body map_layer_collapse_body">
                        <div className="collapse_layers_item">
                          <input
                            type="checkbox"
                            id="avg_aeti_raster"
                            value="avg_aeti_raster"
                            checked={selectedRaster === 'avg_aeti_raster'}
                            onChange={handleRasterSelectionChange}
                          />
                          <label htmlFor="avg_aeti_raster">Avg. Annual Evapotranspiration</label>


                        </div>
                        <div className="collapse_layers_item">
                          <input
                            type="checkbox"
                            id="avg_ret_raster"
                            value="avg_ret_raster"
                            checked={selectedRaster === 'avg_ret_raster'}
                            onChange={handleRasterSelectionChange}
                          />
                          <label htmlFor="avg_ret_raster">Avg. Annual Potential ET</label>

                        </div>

                      </div>
                    </div>
                  </div> */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                      <button className="accordion-button map_layer_collapse collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Climate Change Projection
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                      <div className="accordion-body map_layer_collapse_body">

                        {MapDataLayers.map((item, index) => (
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


                        <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>

                          {Array.from({ length: 86 }, (_, index) => {
                            const year = 2015 + index;
                            return (
                              <option key={index} value={index}>
                                {`${year}`}
                              </option>
                            );
                          })}

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


              {selectedDataType && selectedDataType.value && selectedTime !== '' && (
                <>
                  {ColorLegendsDataItem && (
                    <MapLegend ColorLegendsDataItem={ColorLegendsDataItem} />
                  )}
                  <FiltereredDistrictsFeatures
                    DistrictStyle={DistrictStyle}
                    DistrictOnEachfeature={DistrictOnEachfeature}
                    layerKey={selectedDataType.value + selectedTime}
                    attribution="Model: <a href='https://gmd.copernicus.org/articles/12/4823/2019/gmd-12-4823-2019.html' target='_blank'>CanESM5.0.3</a>"
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

    ):(
      <Preloader/>
    )}</>
    
  )
}

export default ClimateChangePage