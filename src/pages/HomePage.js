import React, { useEffect, useState } from 'react'
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet'
import * as L from "leaflet";
import "leaflet/dist/leaflet.css"
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import BaseMap from '../components/BaseMap';
import AFG_boundary from '../assets/data/shapefiles/AFG_boundary.json';
import AFG_districts from '../assets/data/shapefiles/AFG_districts.json';
import AFG_provinces from '../assets/data/shapefiles/AFG_provinces.json';
import AFG_watershed from '../assets/data/shapefiles/AFG_watershed.json';
import AFG_water_basin from '../assets/data/shapefiles/AFG_water_basin.json';
import { SelectedFeaturesCroplandStatFunction } from '../helpers/functions';
import OverviewSection from '../components/OverviewSection';
import { useSelectedFeatureContext } from '../contexts/SelectedFeatureContext';
import { BaseMapsLayers, mapCenter, maxBounds, setDragging, setInitialMapZoom } from '../helpers/mapFunction';

import FiltererdJsonFeature from '../components/FiltererdJsonFeature.js';
import SelectedFeatureHeading from '../components/SelectedFeatureHeading.js';
import axios from 'axios';
import { useLoaderContext } from '../contexts/LoaderContext.js';

const HomePage = () => {
    const [selectedBasemapLayer, setSelectedBasemapLayer] = useState(BaseMapsLayers[0]);
    const { selectedView, setSelectedView, selectedFeatureName, setSelectedFeatureName, dataView, setDataView } = useSelectedFeatureContext();
    const [landCoverStats, setLandCoverStats] = useState(null); // Correctly declare state variables.
    const [hydroclimaticStats, setHydroclimaticStats] = useState(null);

    const { setIsLoading } = useLoaderContext();

    const handleBasemapSelection = (e) => {
        const selectedItem = BaseMapsLayers.find((item) => item.name === e.target.value);
        setSelectedBasemapLayer(selectedItem);
    };


    const getGeoJsonData = () => {
        switch (selectedView) {
            case 'DISTRICT':
                return AFG_districts;
            case 'PROVINCE':
                return AFG_provinces;
            case 'WATERSHED':
                return AFG_watershed;
            case 'BASIN':
                return AFG_water_basin;
            case 'COUNTRY':
                return AFG_boundary;
            default:
                return null;
        }
    };




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

    const fetchLandCoverStats = (view, featureName) => {
        axios
            .get(`${process.env.REACT_APP_BACKEND}/featureData/LandcoverStats/`, {
                params: {
                    view: view,
                    featureName: featureName
                }
            })
            .then(response => {
                setLandCoverStats(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }


    useEffect(() => {
        if (selectedView && selectedFeatureName) {
            setIsLoading(true);
            Promise.all([
                fetchHydroclimaticStats(selectedView, selectedFeatureName),
                fetchLandCoverStats(selectedView, selectedFeatureName)
            ]).then(() => {
                setIsLoading(false);
            }).catch(() => {
                setIsLoading(false);
            });
        }
    }, [selectedView, selectedFeatureName]);



    const SelectedLandCoverStats = landCoverStats && SelectedFeaturesCroplandStatFunction(landCoverStats)





    function DistrictOnEachfeature(feature, layer) {
        // Determine the property name to use based on selectedView

        // Click event handler
        layer.on('click', function (e) {
            setSelectedFeatureName(feature.properties["NAME"]);
        });

        // Mouseover event handler
        layer.on('mouseover', function (e) {
            if (feature.properties && feature.properties["NAME"]) {
                const popupContent = `
                    <div>
                        ${feature.properties["NAME"]}<br/>
                    </div>
                `;
                layer.bindTooltip(popupContent, { sticky: true });
            }
            layer.openTooltip();
        });

        // Mouseout event handler
        layer.on('mouseout', function () {
            layer.closeTooltip();
        });
    }







    return (
        <div className='dasboard_page_container'>
            <div className='main_dashboard'>
                <div className='left_panel_equal'>
                    <SelectedFeatureHeading />


                    <div className='card_container' >


                        {hydroclimaticStats && SelectedLandCoverStats ? (
                            <>
                                <OverviewSection

                                    SelectedLandCoverStats={SelectedLandCoverStats}
                                    hydroclimaticStats={hydroclimaticStats}
                                />

                            </>




                        ) : (
                            <div className='card_loader_container'>
                                <div className="card_loader">
                                    <div className="card_loader_line"></div>
                                </div>
                            </div>

                        )}
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
                            // attributionControl={false}
                            // scrollWheelZoom={false}

                            doubleClickZoom={false}
                        >



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




                            {selectedView && (
                                <GeoJSON
                                    key={selectedView}
                                    style={{ fillColor: '#265073', weight: 2, color: 'black', fillOpacity: "0.3" }}
                                    data={getGeoJsonData().features}
                                    onEachFeature={DistrictOnEachfeature}
                                />
                            )}

                            <FiltererdJsonFeature />






                            <BaseMap />
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage