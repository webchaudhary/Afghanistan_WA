import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import * as L from 'leaflet';
import 'leaflet-geotiff-2';
import 'leaflet-geotiff-2/dist/leaflet-geotiff-rgb';
import 'leaflet-geotiff-2/dist/leaflet-geotiff-plotty';


const RasterMap = ({ url , colorPalatte, maxValue, minValue,popopContent }) => {
  const [loading, setLoading] = useState(true);
  const map = useMap();
  let popup = L.popup();

  

  useEffect(() => {
    setLoading(true);
    const plottyRenderer = L.LeafletGeotiff.plotty({
      // Optional. Minimum values to plot.
      displayMin: minValue,
      // Optional. Maximum values to plot.
      displayMax: maxValue,
      // Optional flag for plotty to enable/disable displayMin/Max.
      applyDisplayRange: true,
      // Optional. If true values outside `displayMin` to `displayMax` will be rendered as if they were valid values.
      clampLow: true,
      clampHigh: true,
  
      // colorScale: "hot",
      colorScale: colorPalatte,

  
    });
  
    // console.log(plottyRenderer)
    const options = {
      // renderer: null,
      renderer: plottyRenderer,
      // useWorker: false,
      // bounds: [[22.5444989120000017, 77.2885380120000036], [22.7877842760000000, 77.7441607800000014]],
  
      // band: 0,
      // image: 0,
      // clip: undefined,
      pane: 'overlayPane',
      onError: null,
      arrayBuffer: null,
      noDataValue: undefined,
      // noDataKey: undefined,
      // blockSize: 65536,
      opacity: 1,
      // clearBeforeMove: false,
    };



    const geotiffLayer = L.leafletGeotiff(url, options)
      .on('load', () => {
        setLoading(false);
      })
      .addTo(map);


  map.on('mousemove', (event) => {
    const latlng = event.latlng;

    const pixelValue = geotiffLayer.getValueAtLatLng(latlng.lat, latlng.lng);
    if (pixelValue && pixelValue !== null && pixelValue !== '' && pixelValue !== 9999 && pixelValue !== -9999) {

      // Format the pixelValue to show up to 3 decimal places
      const formattedPixelValue = pixelValue.toFixed(3);
      // Update the content of the popup with the formatted pixel value
      popup
        .setLatLng(latlng)
        .setContent(`${popopContent}: ${formattedPixelValue}`)
        .openOn(map);
    } else {
      // If pixelValue is empty, null, or 999, close the popup
      map.closePopup();
    }
  });

   // Clean up when the component unmounts
   return () => {
    map.removeLayer(geotiffLayer);
    map.off('mousemove');
    map.closePopup(); 

  };

  }, [url, map]);

  return loading ?
  <div className='map_layer_loader_container'>
    <div className="map_loader_container">
      <span className="map_loader"></span>
    </div>

  </div> : null;
};

export default RasterMap;
