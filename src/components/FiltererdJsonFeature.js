import React, { useEffect } from 'react';
import { GeoJSON, Pane, useMap } from 'react-leaflet';
import * as L from 'leaflet';
import { mapCenter, setDragging, setInitialMapZoom } from '../helpers/mapFunction';

import { useSelectedFeatureContext } from '../contexts/SelectedFeatureContext';
import AFG_boundary from '../assets/data/shapefiles/AFG_boundary.json';
import AFG_districts from '../assets/data/shapefiles/AFG_districts.json';
import AFG_provinces from '../assets/data/shapefiles/AFG_provinces.json';
import AFG_watershed from '../assets/data/shapefiles/AFG_watershed.json';
import AFG_water_basin from '../assets/data/shapefiles/AFG_water_basin.json';

const FiltererdJsonFeature = () => {
    const { selectedView, selectedFeatureName } = useSelectedFeatureContext();
    const map = useMap();
    const intialZoom = setInitialMapZoom()


    const selectedFeatureData = () => {
        switch (selectedView) {
            case 'BASIN':
                return AFG_water_basin.features.find(feature => feature.properties.NAME === selectedFeatureName);
            case 'WATERSHED':
                return AFG_watershed.features.find(feature => feature.properties.NAME === selectedFeatureName);
            case 'PROVINCE':
                return AFG_provinces.features.find(feature => feature.properties.NAME === selectedFeatureName);
            case 'DISTRICT':
                return AFG_districts.features.find(feature => feature.properties.NAME === selectedFeatureName);
            case 'COUNTRY':
                return AFG_boundary.features.find(feature => feature.properties.NAME === selectedFeatureName);
            default:
                return null;
        }
    };


    let filteredData;

    if (selectedFeatureData() === undefined) {
        filteredData = AFG_boundary.features[0];
    } else {
        filteredData = selectedFeatureData();
    }



    useEffect(() => {
        if (filteredData) {
            const bounds = L.geoJSON(filteredData.geometry).getBounds();
            // map.flyToBounds(bounds);
            map.setView(bounds.getCenter(), intialZoom);
        }
        else {
            // map.flyTo(mapCenter, intialZoom);
            map.setView(mapCenter, intialZoom);
        }
    }, [filteredData, map, intialZoom]);


    return (
        // <Pane name="selected_features" style={{ zIndex: 1000 }}>
        <Pane name="selected_features">
            <GeoJSON
                key={`${selectedFeatureName + selectedView}`}
                style={{ fillColor: 'none', weight: 4, color: 'yellow', fillOpacity: "0.4" }}
                data={filteredData}
            />
        </Pane>
    );
};

export default FiltererdJsonFeature;
