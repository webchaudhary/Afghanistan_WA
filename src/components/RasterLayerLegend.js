import React from 'react'

const RasterLayerLegend = ({ layerName, Unit }) => {
    return (
        <div className="geoserver_legend">

            <div className="legend_heading">
                <p>
                    {Unit}
                </p>
            </div>


            <img src={`${process.env.REACT_APP_GEOSERVER_URL}/geoserver/AFG_Dashboard/wms?REQUEST=GetLegendGraphic&VERSION=1.1.0&FORMAT=image/png&LAYER=AFG_Dashboard:${layerName}`} alt='Legend' />

        </div>

    )
}

export default RasterLayerLegend