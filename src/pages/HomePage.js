import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
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
import { SelectedFeaturesAverageStatsFunction, SelectedFeaturesCroplandStatFunction, calculateAverageOfArray, getAnnualDataFromMonthly } from '../helpers/functions';
import OverviewSection from '../components/OverviewSection';
import { useSelectedFeatureContext } from '../contexts/SelectedFeatureContext';
import { HydroclimaticStats } from "../assets/data/HydroclimaticStats.js";
import { BaseMapsLayers, mapCenter, maxBounds, setDragging, setInitialMapZoom } from '../helpers/mapFunction';
import FiltererdJsonFeature from './FiltererdJsonFeature';
import BenchmarkBarChart from '../components/charts/BenchmarkBarChart';
import { LandcoverStats } from '../assets/data/LandcoverStats.js';
import SelectedFeatureHeading from '../components/SelectedFeatureHeading.js';
import PlaceAttributes from "../assets/data/PlaceAttributes.json"

const HomePage = () => {
    const [selectedBasemapLayer, setSelectedBasemapLayer] = useState(BaseMapsLayers[0]);
    const { selectedView, setSelectedView, selectedFeatureName, setSelectedFeatureName } = useSelectedFeatureContext();

    const filteredFeaturesItems = selectedView && selectedFeatureName !== "" ? HydroclimaticStats.filter(item => item[selectedView] === selectedFeatureName) : HydroclimaticStats;
    const SelectedFeaturesStatsData = SelectedFeaturesAverageStatsFunction(filteredFeaturesItems)


    const filteredLandCoverFeaturesItems = selectedView && selectedFeatureName !== "" ? LandcoverStats.filter(item => item[selectedView] === selectedFeatureName) : LandcoverStats;
    const SelectedLandCoverFeaturesData = SelectedFeaturesCroplandStatFunction(filteredLandCoverFeaturesItems)


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




    const handleDataViewChange = (e) => {
        setSelectedView(e.target.value)
        setSelectedFeatureName('');
    }

    const handleFeatureChange = (e) => {
        setSelectedFeatureName(e.target.value);

    }

    function DistrictOnEachfeature(feature, layer) {
        // Determine the property name to use based on selectedView
        const propertyName = selectedView === "DISTRICT" ? "DISTRICT" : "NAME";

        // Click event handler
        layer.on('click', function (e) {
            setSelectedFeatureName(feature.properties[propertyName]);
        });

        // Mouseover event handler
        layer.on('mouseover', function (e) {
            if (feature.properties && feature.properties[propertyName]) {
                const popupContent = `
                    <div>
                        ${feature.properties[propertyName]}<br/>
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



    const getUniqueValues = (view) => {
        const uniqueValues = new Set();
        PlaceAttributes.forEach((item) => {
            uniqueValues.add(item[view]);
        });
        return Array.from(uniqueValues).sort();
    };




    const totalArea = SelectedFeaturesStatsData.AREA

    const croplandPercentage = (SelectedLandCoverFeaturesData.ESA_Landcover[3] * 100) / (SelectedLandCoverFeaturesData.ESA_Landcover[0] + SelectedLandCoverFeaturesData.ESA_Landcover[1] + SelectedLandCoverFeaturesData.ESA_Landcover[2] + SelectedLandCoverFeaturesData.ESA_Landcover[3] + SelectedLandCoverFeaturesData.ESA_Landcover[4] + SelectedLandCoverFeaturesData.ESA_Landcover[5] + SelectedLandCoverFeaturesData.ESA_Landcover[6] + SelectedLandCoverFeaturesData.ESA_Landcover[7] + SelectedLandCoverFeaturesData.ESA_Landcover[8] + SelectedLandCoverFeaturesData.ESA_Landcover[9])

    const totalIrrigatedLand = SelectedLandCoverFeaturesData.AFG_Landcover[4]



    const weightedAvgAeti = calculateAverageOfArray(getAnnualDataFromMonthly(SelectedFeaturesStatsData.AETI))
    const weightedAvgAeti_BCM = (weightedAvgAeti * 0.001 * totalArea) / 1000000000;

    const weightedAvgPCP = calculateAverageOfArray(getAnnualDataFromMonthly(SelectedFeaturesStatsData.PCP))
    const weightedAvgPCP_BCM = (weightedAvgPCP * 0.001 * totalArea) / 1000000000;


    const avg_monthly_AETI = calculateAverageOfArray((SelectedFeaturesStatsData.AETI))
    const UnitWaterConsumption = (avg_monthly_AETI / (0.1));


    const averageETG = calculateAverageOfArray(SelectedFeaturesStatsData.ETG)
    const averageETG_BCM = (averageETG * 0.001 * totalArea) / 1000000000;

    const averageETB = calculateAverageOfArray(SelectedFeaturesStatsData.ETB)
    const averageETB_BCM = (averageETB * 0.001 * totalArea) / 1000000000;


    const PCP_AETI_Difference_BCM = weightedAvgPCP_BCM - weightedAvgAeti_BCM;
    // const PCP_ETValue = PCP_AETI_Difference < 0 ? "0" : PCP_AETI_Difference.toFixed(2);

    const weightedAvgNPP = calculateAverageOfArray(getAnnualDataFromMonthly(SelectedFeaturesStatsData.NPP))


    const AvgBiomassProdction_Ton = ((weightedAvgNPP) * 22.222 * 0.001 * totalArea * 0.0001) / 1000000;


    return (
        <div className='dasboard_page_container'>
            <div className='main_dashboard'>
                <div className='left_panel_equal'>
                    <div className='card_container'>
                        <select className='m-1' value={selectedView} onChange={handleDataViewChange}>
                            <option value="COUNTRY">Country View</option>
                            <option value="BASIN">Basin View</option>
                            <option value="WATERSHED">Watershed View</option>
                            <option value="PROVINCE">Province View</option>
                            <option value="DISTRICT">District View</option>
                        </select>

                        <select className='m-1' value={selectedFeatureName} onChange={handleFeatureChange}>
                            <option value="">Select Feature</option>
                            {selectedView && getUniqueValues(selectedView).map((value, index) => (
                                <option key={index} value={value}>{value}</option>
                            ))}
                        </select>

                        {selectedFeatureName === '' && <p className='m-1' style={{ color: "red" }}>Please select a feature.</p>}

                    </div>

                    <div className='card_container'>
                        <SelectedFeatureHeading
                            selectedView={selectedView}
                            selectedFeatureName={selectedFeatureName}
                        />
                    </div>

                    <div className='card_container' >
                        <OverviewSection
                            cropLandValue={(croplandPercentage).toFixed(2)}
                            EvapotranspirationValue={(weightedAvgAeti_BCM).toFixed(2)}
                            AreaValue={(totalArea * 0.0000001).toFixed(0)}
                            IrrigatedLandValue={(totalIrrigatedLand * 0.001).toFixed(2)}
                            PrecipitationValue={(weightedAvgPCP_BCM).toFixed(2)}
                            WaterConsumption={(UnitWaterConsumption).toFixed(2)}
                            PCP_ETValue={(PCP_AETI_Difference_BCM).toFixed(2)}
                            BiomassProductionValue={(AvgBiomassProdction_Ton).toFixed(2)}
                            BlueWaterFootprintValue={(averageETB_BCM).toFixed(2)}
                            GreenWaterFootprintValue={(averageETG_BCM).toFixed(2)}
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