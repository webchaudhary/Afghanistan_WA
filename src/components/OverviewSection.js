import React from 'react'
import pcp_et from "../assets/icons/pcp_et.jpg"
import irrigated_land from "../assets/icons/irrigated_land.jpg"
import evapotranspiration from "../assets/icons/evapotranspiration.jpg"
import precipitation_icon from "../assets/icons/precipitation_icon.jpg"
import green_water from "../assets/icons/green_water.jpg"
import biomass from "../assets/icons/biomass.jpg"
import water_consumption from "../assets/icons/water_consumption.jpg"
import crop_land from "../assets/icons/crop_land.jpg"
import area_icon from "../assets/icons/area_icon.jpg"
import blue_water from "../assets/icons/blue_water.jpg"
import { Link } from 'react-router-dom'



const OverviewSection = ({
    cropLandValue,
    EvapotranspirationValue,
    AreaValue,
    IrrigatedLandValue,
    PrecipitationValue,
    WaterConsumption,
    PCP_ETValue,
    BiomassProductionValue,
    BlueWaterFootprintValue,
    GreenWaterFootprintValue,


}) => {

    return (
        <div className='row'>

            <div className='col-md-2 col-sm-6 col-6 mb-2'>
                <Link to="/land-classification">
                    <div className='overview_icons'>
                        <img src={crop_land} alt='icons' />
                    </div>
                </Link>


            </div>
            <div className='col-md-4 col-sm-6 col-6 mb-2'>
                <div className='overview_decsription'>
                    <h5>Total cropped land</h5>
                    <p><span style={{ fontSize: "24px", color: "rgb(5, 45, 131)" }}>  {cropLandValue}</span> (%)</p>
                </div>
            </div>
            <div className='col-md-2 col-sm-6 col-6 mb-2'>

                <div className='overview_icons'>
                    <img src={area_icon} alt='icons' />
                </div>


            </div>
            <div className='col-md-4 col-sm-6 col-6 mb-2'>
                <div className='overview_decsription'>
                    <h5>Area</h5>
                    <p><span style={{ fontSize: "24px", color: "rgb(5, 45, 131)" }}>{AreaValue}</span> (1000 ha)</p>
                </div>
            </div>

            <div className='col-md-2 col-sm-6 col-6 mb-2'>
                <Link to="/evapotranspiration">
                    <div className='overview_icons'>
                        <img src={evapotranspiration} alt='icons' />
                    </div>
                </Link>

            </div>
            <div className='col-md-4 col-sm-6 col-6 mb-2'>
                <div className='overview_decsription'>
                    <h5>Evapotranspiration</h5>
                    <p><span style={{ fontSize: "24px", color: "rgb(5, 45, 131)" }}>{EvapotranspirationValue}</span> (BCM/year)</p>
                </div>
            </div>



            <div className='col-md-2 col-sm-6 col-6 mb-2'>
                <Link to="/land-classification">
                    <div className='overview_icons'>
                        <img src={irrigated_land} alt='icons' />
                    </div>
                </Link>

            </div>
            <div className='col-md-4 col-sm-6 col-6 mb-2'>
                <div className='overview_decsription'>
                    <h5>Total irrigated land</h5>
                    <p><span style={{ fontSize: "24px", color: "rgb(5, 45, 131)" }}>{IrrigatedLandValue}</span>  (1000 ha)</p>
                </div>
            </div>

            <div className='col-md-2 col-sm-6 col-6 mb-2'>
                <Link to="/precipitation">
                    <div className='overview_icons'>
                        <img src={precipitation_icon} alt='icons' />
                    </div>
                </Link>

            </div>
            <div className='col-md-4 col-sm-6 col-6 mb-2'>
                <div className='overview_decsription'>
                    <h5>Precipitation</h5>
                    <p><span style={{ fontSize: "24px", color: "rgb(5, 45, 131)" }}>{PrecipitationValue}</span> (BCM/year)</p>
                </div>
            </div>

            <div className='col-md-2 col-sm-6 col-6 mb-2'>

                <div className='overview_icons'>
                    <img src={water_consumption} alt='icons' />
                </div>


            </div>
            <div className='col-md-4 col-sm-6 col-6 mb-2'>
                <div className='overview_decsription'>
                    <h5>Unit water consumption</h5>
                    <p><span style={{ fontSize: "24px", color: "rgb(5, 45, 131)" }}>{WaterConsumption}</span> (m³/ha)</p>
                </div>
            </div>

            <div className='col-md-2 col-sm-6 col-6 mb-2'>
                <Link to="/precipitation">
                    <div className='overview_icons'>
                        <img src={pcp_et} alt='icons' />
                    </div>
                </Link>

            </div>
            <div className='col-md-4 col-sm-6 col-6 mb-2'>
                <div className='overview_decsription'>
                    <h5>PCP-ET</h5>
                    <p>
                        {PCP_ETValue < 0 ? (
                            <>
                                <span style={{ fontSize: "24px", color: "red" }}>{PCP_ETValue}</span> (BCM/year)
                            </>


                        ) : (
                            <>
                                <span style={{ fontSize: "24px", color: "rgb(5, 45, 131)" }}>{PCP_ETValue}</span> (BCM/year)
                            </>

                        )}
                    </p>
                </div>
            </div>

            <div className='col-md-2 col-sm-6 col-6 mb-2'>
                <div className='overview_icons'>
                    <Link to="/biomass">
                        <img src={biomass} alt='icons' />
                    </Link>
                </div>

            </div>
            <div className='col-md-4 col-sm-6 col-6 mb-2'>
                <div className='overview_decsription'>
                    <h5>Biomass production</h5>
                    <p><span style={{ fontSize: "24px", color: "rgb(5, 45, 131)" }}>{BiomassProductionValue}</span> (million tons/year)</p>
                </div>
            </div>

            <div className='col-md-2 col-sm-6 col-6 mb-2'>
                <Link to="/water-footprint">
                    <div className='overview_icons'>
                        <img src={blue_water} alt='icons' />
                    </div>
                </Link>

            </div>
            <div className='col-md-4 col-sm-6 col-6 mb-2'>
                <div className='overview_decsription'>
                    <h5>Blue water footprint</h5>
                    <p><span style={{ fontSize: "24px", color: "rgb(5, 45, 131)" }}>{BlueWaterFootprintValue}</span> (BCM/year)</p>
                </div>
            </div>

            <div className='col-md-2 col-sm-6 col-6 mb-2'>
                <Link to="/water-footprint">
                    <div className='overview_icons'>
                        <img src={green_water} alt='icons' />
                    </div>
                </Link>

            </div>
            <div className='col-md-4 col-sm-6 col-6 mb-2'>
                <div className='overview_decsription'>
                    <h5>Green water footprint</h5>
                    <p><span style={{ fontSize: "24px", color: "rgb(5, 45, 131)" }}>{GreenWaterFootprintValue}</span> (BCM/year)</p>
                </div>
            </div>



        </div>
    )
}

export default OverviewSection