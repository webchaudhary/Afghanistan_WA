import React from 'react'
import BenchmarkBarChart from '../components/charts/BenchmarkBarChart'
import { SelectedFeaturesAverageStatsFunction, calculateAverageOfArray, getAnnualDataFromMonthly } from '../helpers/functions';
import { useSelectedFeatureContext } from '../contexts/SelectedFeatureContext';
import { HydroclimaticStats } from "../assets/data/HydroclimaticStats.js";
import { BenchmarkData } from '../assets/data/BenchmarkData.js';

const BenchmarkPage = () => {

    const { selectedView, setSelectedView, selectedFeatureName, setSelectedFeatureName } = useSelectedFeatureContext();

    const filteredFeaturesItems = selectedView && selectedFeatureName !== "" ? HydroclimaticStats.filter(item => item[selectedView] === selectedFeatureName) : HydroclimaticStats;
    const SelectedFeaturesStatsData = SelectedFeaturesAverageStatsFunction(filteredFeaturesItems)


    const weightedAvgAeti = calculateAverageOfArray(getAnnualDataFromMonthly(SelectedFeaturesStatsData.AETI))
    const weightedAvgPCP = calculateAverageOfArray(getAnnualDataFromMonthly(SelectedFeaturesStatsData.PCP))
    const weightedAvgNPP = calculateAverageOfArray(getAnnualDataFromMonthly(SelectedFeaturesStatsData.NPP))




    return (

        <div className="dasboard_page_container">
            <div className="main_dashboard">
                <div className="left_panel_equal">
                    <div className="card_container">
                        <div className="defination_container">
                            <h4>Benchmarks</h4>
                        </div>
                        <div className='item_table_container' style={{maxHeight:"100%"}}>
                            <table className='item_table'>
                                <thead>
                                    <tr>
                                        <th>Country</th>
                                        <th>AETI (mm/year)</th>
                                        <th>PCP (mm/year)</th>
                                        <th>Biomass Production (kg/ha/year) </th>
                                        <th>WP (kg/m³)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {BenchmarkData.map((item, index) => (
                                        <tr key={item}>
                                            <td>{item.Name}</td>
                                            <td>{item.AETI}</td>
                                            <td>{item.PCP}</td>
                                            <td>{(item.NPP *22.222).toFixed(1)}</td>
                                            <td>{(item.WP).toFixed(1)}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>


                </div>

                <div className="left_panel_equal">
                    <div className="card_container">
                        <div className="defination_container">
                            <h4>Afghanistan</h4>
                        </div>


                    </div>

                    <div className='card_container'>
                        <div className='row'>
                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-5'>
                                <BenchmarkBarChart
                                    xData={[5237.8]}
                                    value={(weightedAvgNPP * 22.222).toFixed(0)}
                                    title="Average biomass production and the BM of regional countries"
                                    Unit="kg/ha/year"
                                />
                            </div>



                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-5'>
                                <BenchmarkBarChart
                                    xData={[1.76]}
                                    value={(weightedAvgNPP * 22.222 * 0.1 / weightedAvgAeti).toFixed(1)}
                                    title="Average Annual biomass water productivity and  the BM of regional countries"
                                    Unit="kg/m³"
                                />

                            </div>
                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-5'>
                                <BenchmarkBarChart
                                    xData={[60.7]}
                                    value={(weightedAvgAeti * 100 / weightedAvgPCP).toFixed(0)}
                                    title="Portion of the total PCP consumed and  the BM of regional countries"
                                    Unit="kg/m³"
                                />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default BenchmarkPage