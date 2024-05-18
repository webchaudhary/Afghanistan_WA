import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import { MapContainer, GeoJSON, TileLayer, WMSTileLayer, ImageOverlay } from 'react-leaflet'
import * as L from "leaflet";
import "leaflet/dist/leaflet.css"
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import { SelectedFeaturesCroplandStatFunction } from '../helpers/functions';
import { BaseMapsLayers, mapCenter, setDragging, setInitialMapZoom } from '../helpers/mapFunction';
import worldcover_Legend from "../assets/legends/worldcover_Legend.png"
import { useSelectedFeatureContext } from '../contexts/SelectedFeatureContext';
import { LandcoverStats } from "../assets/data/LandcoverStats.js";
import LandCoverPiChart from '../components/charts/LandCoverPiChart';
import BaseMap from '../components/BaseMap';
import irrigated_rainfed_cropland_area_legend from "../assets/legends/irrigated_rainfed_cropland_area_legend.jpg";
import FiltereredDistrictsFeatures from './FiltereredDistrictsFeatures';
import SelectedFeatureHeading from '../components/SelectedFeatureHeading.js';

const MapDataLayers = [
  {
    name: "Afghanistan Landcover",
    value: "AFG_Landcover",
    legend:"",
    attribution:'Data Source: <a href="https://www.sciencedirect.com/science/article/pii/S2352340924002853?via%3Dihub" target="_blank">Afghanistan Land cover</a>'
  },
  {
    name: "ESA World Cover",
    value: "ESA_Landcover",
    legend:"",
    attribution:'Data Source: <a href="https://esa-worldcover.org/en/data-access" target="_blank">ESA WorldCover</a>'
  },
]


const LandClassificationPage = () => {
  const { selectedView, selectedFeatureName } = useSelectedFeatureContext();

  const [selectedBasemapLayer, setSelectedBasemapLayer] = useState(BaseMapsLayers[0]);
  const [selectedDataType, setSelectedDataType] = useState(MapDataLayers[0]);

  const handleBasemapSelection = (e) => {
    const selectedItem = BaseMapsLayers.find((item) => item.name === e.target.value);
    setSelectedBasemapLayer(selectedItem);

  };

  const handleDataLayerSelection = (e) => {
    const value = e.target.value;
    const selectedItem = MapDataLayers.find((item) => item.value === value);
    setSelectedDataType(selectedItem);
  };


  const filteredFeaturesItems = selectedView && selectedFeatureName !== "" ? LandcoverStats.filter(item => item[selectedView] === selectedFeatureName) : LandcoverStats;
  const SelectedFeaturesStatsData = SelectedFeaturesCroplandStatFunction(filteredFeaturesItems)

  // function DistrictOnEachfeature(feature, layer) {
  //   layer.on('mouseover', function (e) {
  //     const DataItem = HydroclimaticStats.find(item => item.DISTRICT === feature.properties.DISTRICT);

  //     const initialData = [
  //       { label: 'Tree cover', value: Math.round(DataItem.Trees), color: '#006400' },
  //       { label: 'Shrubland', value: Math.round(DataItem.Shrubland), color: '#FFBB23' },
  //       { label: 'Grassland', value: Math.round(DataItem.Grassland), color: '#FFFF4C' },
  //       { label: 'Cropland', value: Math.round(DataItem.Cropland), color: '#F096FF' },
  //       { label: 'Built-up', value: Math.round(DataItem.Builtup), color: '#FA0100' },
  //       { label: 'Bare/sparse vegetation', value: Math.round(DataItem.Bare_Sparse_vegetation), color: '#B4B4B4' },
  //       { label: 'Snow and ice', value: Math.round(DataItem.Snow_and_ice), color: '#F0F0F0' },
  //       { label: 'Permanent water bodies', value: Math.round(DataItem.Permanent_water_bodies), color: '#0064C8' },
  //       { label: 'Herbaceous wetland', value: Math.round(DataItem.Herbaceous_wetland), color: '#0096A0' },
  //       { label: 'Mangroves', value: 0, color: '#04CF75' },  // Assuming 'Mangroves' data is not available
  //       { label: 'Moss and lichen', value: Math.round(DataItem.Moss_and_lichen), color: '#FAE69F' }
  //     ];

  //     // Calculate total area
  //     const totalArea = initialData.reduce((sum, item) => sum + item.value, 0);

  //     // Convert values to percentages
  //     initialData.forEach(item => {
  //       item.value = ((item.value / totalArea) * 100).toFixed(2);  // Keep two decimal places
  //     });

  //     // Sort and slice to get top 5
  //     const sortedData = initialData.sort((a, b) => b.value - a.value).slice(0, 5);

  //     // Calculate the sum of the remaining percentages
  //     const otherPercentage = initialData.filter(item => !sortedData.includes(item)).reduce((sum, current) => sum + parseFloat(current.value), 0).toFixed(2);

  //     // Add 'Other Land' if there are remaining percentages
  //     if (otherPercentage > 0) {
  //       sortedData.push({ label: 'Other Land', value: otherPercentage, color: '#000000' });  // Black color for 'Other Land'
  //     }

  //     // SVG dimensions
  //     const width = 400;
  //     const barHeight = 15;
  //     const gap = 5;
  //     const chartHeight = sortedData.length * (barHeight + gap);

  //     let svgContent = '<svg width="' + width + '" height="' + chartHeight + '" xmlns="http://www.w3.org/2000/svg">';

  //     const maxValue = Math.max(...sortedData.map(item => parseFloat(item.value)));
  //     sortedData.forEach((item, index) => {
  //       const barWidth = (parseFloat(item.value) / maxValue) * (width - 100); // Scale the bar width
  //       const y = index * (barHeight + gap);
  //       svgContent += `<rect x="100" y="${y}" width="${barWidth}" height="${barHeight}" fill="${item.color}" />`;
  //       svgContent += `<text x="95" y="${y + 15}" alignment-baseline="middle" text-anchor="end" fill="black" font-size="12">${item.label}</text>`;
  //       svgContent += `<text x="${100 + barWidth + 5}" y="${y + 15}" alignment-baseline="middle" fill="black" font-size="12">${item.value}%</text>`;
  //     });

  //     svgContent += '</svg>';

  //     const popupContent = `<div>
  //       District: ${feature.properties.DISTRICT}<br/>
  //       ${svgContent}
  //     </div>`;

  //     layer.bindTooltip(popupContent, { sticky: true });
  //     layer.openTooltip();
  //   });

  //   layer.on('mouseout', function () {
  //     layer.closeTooltip();
  //   });
  // }

  function DistrictOnEachfeature(feature, layer) {
    layer.on('mouseover', function (e) {
      const DataItem = LandcoverStats.find(item => item.DISTRICT === feature.properties.DISTRICT);

      let initialData;

      if (selectedDataType.value === "ESA_Landcover") {
        initialData = [
          { label: 'Tree cover', value: Math.round(DataItem.ESA_Landcover[0]), color: '#006400' },
          { label: 'Shrubland', value: Math.round(DataItem.ESA_Landcover[1]), color: '#FFBB23' },
          { label: 'Grassland', value: Math.round(DataItem.ESA_Landcover[2]), color: '#FFFF4C' },
          { label: 'Cropland', value: Math.round(DataItem.ESA_Landcover[3]), color: '#F096FF' },
          { label: 'Built-up', value: Math.round(DataItem.ESA_Landcover[4]), color: '#FA0100' },
          { label: 'Bare/sparse vegetation', value: Math.round(DataItem.ESA_Landcover[5]), color: '#B4B4B4' },
          { label: 'Snow and ice', value: Math.round(DataItem.ESA_Landcover[6]), color: '#F0F0F0' },
          { label: 'Permanent water bodies', value: Math.round(DataItem.ESA_Landcover[7]), color: '#0064C8' },
          { label: 'Herbaceous wetland', value: Math.round(DataItem.ESA_Landcover[8]), color: '#0096A0' },
          { label: 'Moss and lichen', value: Math.round(DataItem.ESA_Landcover[9]), color: '#FAE69F' }
        ];

      } if (selectedDataType.value === "AFG_Landcover") {
        initialData = [
          { label: 'Snow', value: Math.round(DataItem.AFG_Landcover[0]), color: '#8DFDE2' },
          { label: 'Built-up area', value: Math.round(DataItem.AFG_Landcover[1]), color: '#FD5157' },
          { label: 'Water body', value: Math.round(DataItem.AFG_Landcover[2]), color: '#2D41ED' },
          { label: 'Forest', value: Math.round(DataItem.AFG_Landcover[3]), color: '#186D5F' },
          { label: 'Irrigated agriculture', value: Math.round(DataItem.AFG_Landcover[4]), color: '#FFFE19' },
          { label: 'Rainfed agriculture', value: Math.round(DataItem.AFG_Landcover[5]), color: '#E8B21B' },
          { label: 'Fruit trees', value: Math.round(DataItem.AFG_Landcover[6]), color: '#57B67E' },
          { label: 'Vineyards', value: Math.round(DataItem.AFG_Landcover[7]), color: '#46DAA8' },
          { label: 'Marshland', value: Math.round(DataItem.AFG_Landcover[8]), color: '#2A84E5' },
          { label: 'Bare land', value: Math.round(DataItem.AFG_Landcover[9]), color: '#B9BAB6' },
          { label: 'Rangeland', value: Math.round(DataItem.AFG_Landcover[10]), color: '#CADC9F' },
          { label: 'Sand cover', value: Math.round(DataItem.AFG_Landcover[11]), color: '#C7681B' },
          { label: 'Streams', value: Math.round(DataItem.AFG_Landcover[12]), color: '#24BFFF' },
        ];

      }

      // Define colors, labels, and their corresponding data values


      // Calculate total area
      const totalArea = initialData.reduce((sum, item) => sum + item.value, 0);

      // Convert values to percentages
      initialData.forEach(item => {
        item.value = ((item.value / totalArea) * 100).toFixed(2);  // Keep two decimal places
      });

      // Sort and slice to get top 5
      const sortedData = initialData.sort((a, b) => b.value - a.value).slice(0, 5);

      // Calculate the sum of the remaining percentages
      const otherPercentage = initialData.filter(item => !sortedData.includes(item)).reduce((sum, current) => sum + parseFloat(current.value), 0).toFixed(2);

      // Add 'Other Land' if there are remaining percentages
      if (otherPercentage > 0) {
        sortedData.push({ label: 'Other Land Cover', value: otherPercentage, color: '#000000' });  // Black color for 'Other Land'
      }

      // SVG dimensions
      const radius = 70;
      let svgContent = '<svg width="200" height="200" viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">';
      let legendContent = '<ul style="list-style: none; padding: 0;">';

      // Start at the top of the circle
      let startAngle = 0;

      sortedData.forEach((item, index) => {
        // Calculate the angle for this slice
        const angle = (item.value / 100) * 2 * Math.PI;
        const endAngle = startAngle + angle;
        const largeArc = (angle > Math.PI) ? 1 : 0;

        // Calculate x, y coordinates for the arc
        const x1 = radius * Math.sin(startAngle);
        const y1 = -radius * Math.cos(startAngle);
        const x2 = radius * Math.sin(endAngle);
        const y2 = -radius * Math.cos(endAngle);

        // Draw the path for the slice
        svgContent += `<path d="M0,0 L${x1},${y1} A${radius},${radius} 0 ${largeArc} 1 ${x2},${y2} z" fill="${item.color}" />`;


        // Add to legend
        legendContent += `<li><span style="color:${item.color};">&#9632;</span> ${item.label} (${item.value}%)</li>`;

        // Move to the next slice
        startAngle = endAngle;
      });

      svgContent += '</svg>';
      legendContent += '</ul>';

      const popupContent = `<div>
        District: ${feature.properties.DISTRICT}<br/>
        ${svgContent}
        ${legendContent}
      </div>`;

      layer.bindTooltip(popupContent, { sticky: true });
      layer.openTooltip();
    });

    layer.on('mouseout', function () {
      layer.closeTooltip();
    });
  }




  // function DistrictOnEachfeature(feature, layer) {

  //   layer.on('mouseover', function (e) {
  //     const DataItem = HydroclimaticStats.find(item => item.DISTRICT === feature.properties.DISTRICT);

  //     const popupContent = `
  //           <div>
  //             District: ${feature.properties.DISTRICT}<br/>
  //             Trees: ${DataItem.Trees} ha<br/>
  //             Shrubland: ${DataItem.Shrubland} ha<br/>
  //             Grassland: ${DataItem.Grassland} ha<br/>
  //             Cropland: ${DataItem.Cropland} ha<br/>
  //             Builtup: ${DataItem.Builtup} ha<br/>
  //             Bare, Sparse vegetation: ${DataItem.Bare_Sparse_vegetation} ha<br/>
  //             Snow and Ice: ${DataItem.Snow_and_ice} ha<br/>
  //             Permanent water bodies: ${DataItem.Permanent_water_bodies} ha<br/>
  //             Herbaceous wetland: ${DataItem.Herbaceous_wetland} ha<br/>
  //             Moss and lichen: ${DataItem.Moss_and_lichen} ha<br/>
  //           </div>
  //         `;
  //     layer.bindTooltip(popupContent, { sticky: true });
  //     layer.openTooltip();
  //   });

  //   layer.on('mouseout', function () {
  //     layer.closeTooltip();
  //   });
  // }

  return (
    <div className='dasboard_page_container'>
      <div className='main_dashboard'>
        <div className='left_panel_equal'>
        <div className='card_container'>
              <SelectedFeatureHeading
                selectedView={selectedView}
                selectedFeatureName={selectedFeatureName}
              />
            </div>



          <div className="card_container" style={{ height: "700px", overflowY: "auto" }} >
            <div className='defination_container'>
              <h4>Land Cover class</h4>
            </div>

            

            {selectedDataType.value==="ESA_Landcover" ? (
              <LandCoverPiChart
              ClassesName={['Tree cover', 'Shrubland', 'Grassland', 'Cropland', 'Built-up', 'Bare/sparse vegetation', 'Snow and ice', 'Permanent water bodies', 'Herbaceous wetland', 'Moss and lichen']}
              landCoverValues={SelectedFeaturesStatsData.ESA_Landcover}
              colorPallete={['#006400', '#FFBB23', '#FFFF4C', '#F096FF', '#FA0100', '#B4B4B4', '#F0F0F0', '#0064C8', '#0096A0', '#FAE69F',]}
            />

            ):selectedDataType.value==="AFG_Landcover" ?(
              <LandCoverPiChart
              ClassesName={["Snow",	"Builtup area",	"Water body",	"Forest",	"Irrigated agriculture","Rainfed agriculture","Fruit trees","Vineyards",	"Marshland",	"Bare land",	"Rangeland",	"Sand cover",	"Streams"]}
              landCoverValues={SelectedFeaturesStatsData.AFG_Landcover}
              colorPallete={['#8DFDE2', '#FD5157', '#2D41ED', '#186D5F', '#FFFE19', '#E8B21B', '#57B67E', '#46DAA8', '#2A84E5', '#B9BAB6', '#CADC9F','#C7681B','#24BFFF',]}
            />

            ):null }
            





          </div>
          <div className='card_container'>
            <div className='defination_container'>
              <h4>Land Cover class area by district</h4>
            </div>
            <div className='item_table_container'>
              <table className='item_table'>
                <thead>
                  <tr>
                    <th>District</th>
                    <th>Irrigated cropland (ha)</th>
                    <th>Rainfed cropland (ha)</th>
                    <th>Ocean and water bodies (ha)</th>
                    <th>Non-cropland(other land covers) (ha)</th>


                  </tr>
                </thead>
                <tbody>
                  {filteredFeaturesItems.map((item, index) => (
                    <tr key={index}>
                      <td>{item.DISTRICT}</td>
                      <td>{(item.Cropland[2]).toFixed(0)}</td>
                      <td>{(item.Cropland[3]).toFixed(0)}</td>
                      <td>{(item.Cropland[0]).toFixed(0)}</td>
                      <td>{(item.Cropland[1]).toFixed(0)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
                      <button className="accordion-button map_layer_collapse collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Raster Layers
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                      <div className="accordion-body map_layer_collapse_body">

                        {MapDataLayers.map((item, index) => (
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

                </div>
              </div>

              <TileLayer
                key={selectedBasemapLayer.url}
                attribution={selectedBasemapLayer.attribution}
                url={selectedBasemapLayer.url}
                subdomains={selectedBasemapLayer.subdomains}
              />


              <BaseMap />




              <FiltereredDistrictsFeatures
                // DistrictStyle={DistrictStyle}
                attribution={selectedDataType.attribution}
                layerKey={selectedDataType.value}
                DistrictStyle={{
                  fillColor: 'black',
                  weight: 2,
                  color: 'black',
                  fillOpacity: "0.001",
                }}
                DistrictOnEachfeature={DistrictOnEachfeature}
              />





              {selectedDataType.value === 'AFG_Landcover' ? (
                <>
                  <WMSTileLayer
                    attribution={selectedDataType.attribution}
                    url={`${process.env.REACT_APP_GEOSERVER_URL}/geoserver/AFG_Dashboard/wms`}
                    params={{ LAYERS: '	AFG_Dashboard:KabirUddin_AFG_LANDCOVER_2018' }}
                    version="1.1.0"
                    transparent={true}
                    format="image/png"
                    key="AFG_Landcover"
                  />


                  <div className='legend-panel'>
                    <img src={irrigated_rainfed_cropland_area_legend} alt='worldcover_Legend' />
                  </div>


                  {/* <PixelValue layername="Avg_PCP_2018_2023" unit="mm/year" /> */}

                </>

              ) : selectedDataType.value === 'ESA_Landcover' ? (
                <>
                  <WMSTileLayer
                    attribution={selectedDataType.attribution}
                    url={`${process.env.REACT_APP_GEOSERVER_URL}/geoserver/AFG_Dashboard/wms`}
                    params={{ LAYERS: 'AFG_Dashboard:AFG_Landcover_ESA' }}
                    version="1.1.0"
                    transparent={true}
                    format="image/png"
                    key="AFG_Landcover"
                  />

                  {/* <WMSTileLayer
                    zIndex={10}
                    attribution='WorldCover 2021 | Source: <a href="https://esa-worldcover.org/en/data-access" target="_blank">© ESA WorldCover project 2021 </a>'
                    key="ESA_Landcover"
                    url={`https://services.terrascope.be/wms/v2?`}
                    params={{ 'LAYERS': 'WORLDCOVER_2021_MAP', "TILED": "true", "VERSION": "1.1.1" }}
                    // maxZoom={6}
                    version='1.1.1'
                    // transparent={true}
                    format='image/png'
                    opacity={1}
                  /> */}

                  {/* <PixelValue layername="Avg_RET_2018_2023" unit="mm/year" /> */}

                  <div className='legend-panel'>
                    <img src={worldcover_Legend} alt='worldcover_Legend' />
                  </div>



                </>

              ) : null}


              {/* <FiltererdJsonFeature /> */}



            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandClassificationPage