import React, { useState, useEffect } from 'react';
import { useMap } from 'react-leaflet';

const PixelValue = ({ layername, unit }) => {
  const [clickedPixelValue, setClickedPixelValue] = useState(null);
  const map = useMap();

  useEffect(() => {
    const handleClick = (e) => {
      var url = `${process.env.REACT_APP_GEOSERVER_URL}/geoserver/AFG_Dashboard/wms?request=GetFeatureInfo` +
        `&service=WMS` +
        `&version=1.1.0` +
        `&layers=AFG_Dashboard:${layername}` +
        `&styles=` +
        `&srs=EPSG%3A4326` +
        `&format=image%2Fpng` +
        `&bbox=${map.getBounds().toBBoxString()}` +
        `&width=${map.getSize().x}` +
        `&height=${map.getSize().y}` +
        `&query_layers=AFG_Dashboard:${layername}` +
        `&info_format=text%2Fhtml` +
        `&feature_count=50` +
        `&x=${Math.floor(map.latLngToContainerPoint(e.latlng).x)}` +
        `&y=${Math.floor(map.latLngToContainerPoint(e.latlng).y)}`;

      fetch(url)
        .then(response => response.text())
        .then(data => {
          const pixelValueRegex = /<td>(\d+(\.\d+)?)<\/td>/;
          const match = data.match(pixelValueRegex);

          if (match) {
            const pixelValue = parseFloat(match[1]).toFixed(2);
            setClickedPixelValue(pixelValue);
          } else {
            setClickedPixelValue("No value");
          }
        })
        .catch(error => console.error('Error fetching data:', error));
    };

    map.on('click', handleClick);

    return () => {
      map.off('click', handleClick);
    };
  }, [map, layername]);

  return (
    <>
      {clickedPixelValue && (
        <div className='raster_pixel_value'>
          Pixel Value: {clickedPixelValue} {unit}
        </div>
      )}
    </>
  );
}

export default PixelValue;
