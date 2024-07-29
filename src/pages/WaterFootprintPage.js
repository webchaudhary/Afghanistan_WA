import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import { MapContainer, GeoJSON, TileLayer, ImageOverlay, WMSTileLayer } from 'react-leaflet'
import * as L from "leaflet";
import "leaflet/dist/leaflet.css"
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import BaseMap from '../components/BaseMap';
import { SelectedFeaturesAverageStatsFunction, SelectedFeaturesWeightedAverageStatsFunction, calculateAverageOfArray, calculateSumOfArray, fillDensityColor, getSumAnnualDataFromMonthly, renderTimeOptions } from '../helpers/functions';
import { BaseMapsLayers, mapCenter, setDragging, setInitialMapZoom } from '../helpers/mapFunction';

import { ColorLegendsData } from "../assets/data/ColorLegendsData";
import { useSelectedFeatureContext } from '../contexts/SelectedFeatureContext';
import CropWaterFootprintChart from '../components/charts/CropWaterFootprintChart';

import WaterFootprintChart from '../components/charts/WaterFootprintChart';
import PixelValue from './PixelValue';
import FiltereredDistrictsFeatures from '../components/FiltereredDistrictsFeatures.js';
import SelectedFeatureHeading from '../components/SelectedFeatureHeading.js';
import { useLoaderContext } from '../contexts/LoaderContext.js';
import axios from 'axios';
import Preloader from '../components/Preloader.js';
import TableView from '../components/TableView.js';
import { BsInfoCircleFill } from 'react-icons/bs';
import GeoserverLegend from '../components/legend/GeoserverLegend.js';
import DynamicLegend from '../components/legend/DynamicLegend.js';
import { useModalHandles } from '../components/ModalHandles.js';


const MapDataLayers = [
  {
    name: "Annual ET Blue (Avg. 2018-2023)",
    value: "avg_ETB_raster",
    legend: "",
    attribution: "Data Source: <a href='https://www.fao.org/in-action/remote-sensing-for-water-productivity/wapor-data/en' target='_blank'>WaPOR L1 V3	</a>"
  },
  {
    name: "Annual ET Green (Avg. 2018-2023)",
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
  const { selectedView, selectedFeatureName, dataView } = useSelectedFeatureContext();
  const { setIsLoading } = useLoaderContext();
  const [hydroclimaticStats, setHydroclimaticStats] = useState(null);
  const [allWaterFootprintStats, setAllWaterFootprintStats] = useState(null);
  const [cropSpecificWaterFootprints, setCropSpecificWaterFootprints] = useState(null);
  const { handleWaterFootprint, handleBlueAndGreenET} = useModalHandles();



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


  const fetchCropSpecificWaterFootprintStats = (view, featureName) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/data/CropSpecificWaterFootprints/`)
      .then(response => {
        setCropSpecificWaterFootprints(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }


  const fetchWaterFootprintStats = (view, featureName) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/featureData/AllWaterFootprints/`, {
        params: {
          view: view,
          featureName: featureName
        }
      })
      .then(response => {
        setAllWaterFootprintStats(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }


  useEffect(() => {
    if (selectedView && selectedFeatureName) {
      setIsLoading(true);
      Promise.all([
        fetchHydroclimaticStats(selectedView, selectedFeatureName),
        fetchWaterFootprintStats(selectedView, selectedFeatureName),
        fetchCropSpecificWaterFootprintStats(selectedView, selectedFeatureName),

      ]).then(() => {
        setIsLoading(false);
      }).catch(() => {
        setIsLoading(false);
      });
    }
  }, [selectedView, selectedFeatureName]);

  const SelectedFeaturesStatsData = hydroclimaticStats && SelectedFeaturesWeightedAverageStatsFunction(hydroclimaticStats);



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
    if (hydroclimaticStats) {

      layer.on('mouseover', function (e) {
        const DataItem = hydroclimaticStats.find(
          (item) => item[dataView] === feature.properties.NAME
        );

        const popupContent = `
          <div>
            ${dataView}: ${feature.properties.NAME}<br/>
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
  }


  const DistrictStyle = (feature => {
    if (selectedTime !== "" && hydroclimaticStats) {
      const getDensityFromData = (name, view) => {
        const DataItem = hydroclimaticStats && hydroclimaticStats.find((item) => item[view] === name);

        return DataItem[selectedDataType.value] ? DataItem[selectedDataType.value][selectedTime] : null
      };

      const density = getDensityFromData(feature.properties.NAME, dataView);
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
    <>
      {SelectedFeaturesStatsData ? (
        <div className='dasboard_page_container'>
          <div className='main_dashboard'>
            <div className='left_panel_equal'>

              <SelectedFeatureHeading />


              {allWaterFootprintStats && (
                <div className='card_container'>
                  <div className='card_heading_container'>
                    <div className='card_heading'>
                      <h4>Water Footprint</h4>
                    </div>

                    <div className='info_container'>
                      <div className='heading_info_button' onClick={handleWaterFootprint}>
                        <BsInfoCircleFill />
                      </div>
            
                    </div>
                  </div>




                  <WaterFootprintChart
                    allWaterFootprintStats={allWaterFootprintStats} />

                </div>

              )}






              <div className='card_container'>
                <div className='card_heading_container'>
                  <div className='card_heading'>
                    <h4>Average anuual Green and Blue ET by {dataView.toLowerCase()}</h4>
                  </div>
                  <div className='info_container'>
                    <div className='heading_info_button' onClick={handleBlueAndGreenET}>
                      <BsInfoCircleFill />
                    </div>
                
                  </div>
                </div>


                <TableView
                  tableHeaders={[
                    dataView.charAt(0).toUpperCase() + dataView.slice(1).toLowerCase(),
                    "Average ET Blue (mm/year)",
                    "Average ET Green (mm/year)",
                    "Average ET Blue Volume (MCM/year)",
                    "Average ET Green Volume (MCM/year)"
                  ]}
                  tableBody={hydroclimaticStats.map(districtData => [
                    districtData[dataView],
                    calculateSumOfArray(districtData.ETB).toFixed(2),
                    calculateSumOfArray(districtData.ETG).toFixed(2),
                    (calculateAverageOfArray(districtData.ETB) * 0.001 * districtData.AREA / 1000000).toFixed(2),
                    (calculateAverageOfArray(districtData.ETG) * 0.001 * districtData.AREA / 1000000).toFixed(2),
                  ])}
                />


              </div>

              {selectedView === "COUNTRY" && (
                <div className="card_container" style={{ overflow: "scroll" }}>

                  <div className='card_heading_container'>
                    <div className='card_heading'>
                      <h4>Crop Specific water footprint </h4>
                    </div>

                    
                    
                  </div>


                  {cropSpecificWaterFootprints && (
                    <CropWaterFootprintChart cropSpecificWaterFootprints={cropSpecificWaterFootprints} />
                  )}

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
                            <button className="accordion-button map_layer_collapse" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                              Raster layers
                            </button>
                          </h2>
                          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
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
                        zIndex={3}
                      />
                      <PixelValue layername="ETb_2018-2023_avg" unit="mm/year" />

                      <GeoserverLegend
                        layerName="ETb_2018-2023_avg"
                        Unit="ET Blue (mm/year)"
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
                        zIndex={3}
                      />

                      <PixelValue layername="ETg_2018-2023_avg" unit="mm/year" />

                      <GeoserverLegend
                        layerName="ETg_2018-2023_avg"
                        Unit="ET Green (mm/year)"
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





                  <BaseMap />

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

export default WaterFootprintPage