import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-side-by-side";

const SplitLeafletMap = () => {
  useEffect(() => {
    const map = L.map("map").setView([51.505, -0.09], 13);

    const osmLayer = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var stamenLayer = L.tileLayer(
      "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png",
      {
        attribution:
          'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ' +
          '<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; ' +
          "Map data {attribution.OpenStreetMap}",
        minZoom: 1,
        maxZoom: 16
      }
    ).addTo(map);

    L.control.sideBySide(stamenLayer, osmLayer).addTo(map);
  }, []);

  return <div id="map" />;
};

export default SplitLeafletMap;