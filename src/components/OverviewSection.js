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
import { calculateAverageOfArray, getSumAnnualDataFromMonthly } from '../helpers/functions'



const OverviewSection = ({
    SelectedLandCoverStats,
    hydroclimaticStats
}) => {



    let totalWeightedAETI = 0;
    let totalWeightedPCP = 0;
    let totalWeightedNPP = 0;
    let totalWeightedETG = 0;
    let totalWeightedETB = 0;
    let totalArea = 0;


    hydroclimaticStats.forEach(item => {
        totalWeightedAETI += calculateAverageOfArray(getSumAnnualDataFromMonthly(item.AETI))  * 0.001* item.AREA;
        totalWeightedPCP += calculateAverageOfArray(getSumAnnualDataFromMonthly(item.PCP))  * 0.001 * item.AREA;
        totalWeightedNPP += calculateAverageOfArray(getSumAnnualDataFromMonthly(item.NPP))* 0.001 * item.AREA;
        totalWeightedETG += calculateAverageOfArray(item.ETG) * 0.001* item.AREA;
        totalWeightedETB += calculateAverageOfArray(item.ETB) * 0.001* item.AREA ;
        totalArea += item.AREA; 
    });



    




    const croplandPercentage = (SelectedLandCoverStats.ESA_Landcover[3] * 100) / (SelectedLandCoverStats.ESA_Landcover[0] + SelectedLandCoverStats.ESA_Landcover[1] + SelectedLandCoverStats.ESA_Landcover[2] + SelectedLandCoverStats.ESA_Landcover[3] + SelectedLandCoverStats.ESA_Landcover[4] + SelectedLandCoverStats.ESA_Landcover[5] + SelectedLandCoverStats.ESA_Landcover[6] + SelectedLandCoverStats.ESA_Landcover[7] + SelectedLandCoverStats.ESA_Landcover[8] + SelectedLandCoverStats.ESA_Landcover[9])
    const totalIrrigatedLand = SelectedLandCoverStats.AFG_Landcover[4]






    const cropLandValue = croplandPercentage.toFixed(2)

// EvapotranspirationValue in BCM = ET (mm) * 0.001 * Area (m2)/1000000000
    const EvapotranspirationValue = (totalWeightedAETI/1000000000).toFixed(2)
    const AreaValue = (totalArea * 0.0000001).toFixed(0)
    const IrrigatedLandValue = (totalIrrigatedLand * 0.001).toFixed(2)
    const PrecipitationValue = (totalWeightedPCP/1000000000).toFixed(2)
    const WaterConsumption = (totalWeightedAETI/(totalArea*0.0001)).toFixed(2)
    const PCP_ETValue = ((totalWeightedPCP-totalWeightedAETI)/1000000000).toFixed(2)
    const BiomassProductionValue = (totalWeightedNPP*22.222*0.0001/1000000).toFixed(2)
    const BlueWaterFootprintValue = (totalWeightedETB/1000000000).toFixed(2)
    const GreenWaterFootprintValue = (totalWeightedETG/1000000000).toFixed(2)


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
                    {/* From Esa world cover starts */}
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
                    <p><span style={{ fontSize: "24px", color: "rgb(5, 45, 131)" }}>{parseFloat(AreaValue).toLocaleString()}</span> (1000 ha)</p>
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
                    <p><span style={{ fontSize: "24px", color: "rgb(5, 45, 131)" }}>{parseFloat(EvapotranspirationValue).toLocaleString()}</span> (BCM/year)</p>
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
                    <p><span style={{ fontSize: "24px", color: "rgb(5, 45, 131)" }}>{parseFloat(IrrigatedLandValue).toLocaleString()}</span>  (1000 ha)</p>
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
                    <p><span style={{ fontSize: "24px", color: "rgb(5, 45, 131)" }}>{parseFloat(PrecipitationValue).toLocaleString()}</span> (BCM/year)</p>
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
                    <p><span style={{ fontSize: "24px", color: "rgb(5, 45, 131)" }}>{parseFloat(WaterConsumption).toLocaleString()}</span> (m³/ha)</p>
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
                                <span style={{ fontSize: "24px", color: "red" }}>{parseFloat(PCP_ETValue).toLocaleString()}</span> (BCM/year)
                            </>


                        ) : (
                            <>
                                <span style={{ fontSize: "24px", color: "rgb(5, 45, 131)" }}>{parseFloat(PCP_ETValue).toLocaleString()}</span> (BCM/year)
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
                    <p><span style={{ fontSize: "24px", color: "rgb(5, 45, 131)" }}>{parseFloat(BiomassProductionValue).toLocaleString()}</span> (million tons/year)</p>
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