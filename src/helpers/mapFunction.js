import * as L from "leaflet";

export const BaseMapsLayers = [
    {
        name: "Street Map",
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        subdomains: ['a', 'b', 'c'],
        attribution: 'Basemap: Esri, TomTom, FAO, NOAA, USGS'
    },

    {
        name: "Hybrid Map",
        url: 'https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        attribution: "Basemap: &copy;2024 NASA, TerraMetrics <a href='https://www.google.com/intl/en-US_US/help/terms_maps/'> Terms</a>"
    },
    // {
    //     name: "Google Map",
    //     url: 'https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
    //     subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    //     attribution: "Basemap: &copy;2024 Google"
    // },
    // {
    //   name: "Open Street Map",
    //   url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    //   subdomains: ['a', 'b', 'c'],
    //   attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // },
    // {
    //     name: "Topographic Map",
    //     url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    //     subdomains: ['a', 'b', 'c'],
    //     attribution: 'Basemap:: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> </a>'
    // },
    // {
    //     name: "Satellite Map",
    //     url: 'https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
    //     subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    //     attribution: "Basemap: &copy;2024 Google"
    // },
    // {
    //     name: "Physical Map",
    //     url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}',
    //     subdomains: ['a', 'b', 'c'],
    //     attribution: "Basemap: &copy; Esri &mdash; Source: US National Park Service"
    // },

    // {
    //     name: "Terrain Map",
    //     url: 'https://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
    //     subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    //     attribution: "&copy;2024 Google"
    // },
    // {
    //     name: "Google Roads Map",
    //     url: 'https://{s}.google.com/vt/lyrs=h&x={x}&y={y}&z={z}',
    //     subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    //     attribution: "&copy;2024 Google"
    // },

]




export const mapCenter = [34, 67]

export const setInitialMapZoom = () => {
    var viewportWidth = window.innerWidth;
    var mapZoom;
    if (viewportWidth <= [767]) {
        mapZoom = [5];
    } if (viewportWidth >= [768]) {
        mapZoom = [5.5];
    } if (viewportWidth >= [1600]) {
        mapZoom = [6];
    }
    return mapZoom;
}

export const setDragging = () => {
    var viewportWidth = window.innerWidth;
    var dragging;
    if (viewportWidth <= [767]) {
        dragging = false;
    } if (viewportWidth >= [768]) {
        dragging = true;
    }
    return dragging;
}




export const maxBounds = L.latLngBounds(
    L.latLng(23, 49),  
    L.latLng(43, 82)  
);

