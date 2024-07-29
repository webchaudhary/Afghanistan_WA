import React from 'react'

const GeoserverLegend = ({ layerName, Unit }) => {
    return (

        <div className="legend_container">

            <div className="accordion" id="accordionLegend">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button map_layer_collapse_body" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Legend
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionLegend">
                        <div className="accordion-body map_layer_collapse_body">
                            <div className="legend_heading">
                                <p>
                                    {Unit}
                                </p>
                            </div>

                            <img src={`${process.env.REACT_APP_GEOSERVER_URL}/geoserver/AFG_Dashboard/wms?REQUEST=GetLegendGraphic&VERSION=1.1.0&FORMAT=image/png&LAYER=AFG_Dashboard:${layerName}`} alt='Legend' />
                        </div>
                    </div>
                </div>

            </div>





        </div>



    )
}

export default GeoserverLegend