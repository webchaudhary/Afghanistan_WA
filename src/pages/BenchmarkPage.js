import React, { useEffect, useState } from 'react'
import BenchmarkBarChart from '../components/charts/BenchmarkBarChart'
import { SelectedFeaturesWeightedAverageStatsFunction, calculateAverageOfArray, getSumAnnualDataFromMonthly } from '../helpers/functions';
import { useSelectedFeatureContext } from '../contexts/SelectedFeatureContext';

import { useLoaderContext } from '../contexts/LoaderContext.js';
import axios from 'axios';
import Preloader from '../components/Preloader.js';
import { BsInfoCircleFill } from 'react-icons/bs';

const BenchmarkPage = () => {

    const { selectedView, setSelectedView, selectedFeatureName, setSelectedFeatureName } = useSelectedFeatureContext();
    const { setIsLoading } = useLoaderContext();

    const [hydroclimaticStats, setHydroclimaticStats] = useState(null);
    const [benchMarkStats, setBenchMarkStats] = useState(null);



    const fetchHydroclimaticStats = (view, featureName) => {
        axios
            .get(`${process.env.REACT_APP_BACKEND}/featureData/HydroclimaticStats/`, {
                params: {
                    view: view,
                    featureName: featureName
                }
            })
            .then(response => {
                setHydroclimaticStats(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    const fetchBenchMarkStats = (view, featureName) => {
        axios
            .get(`${process.env.REACT_APP_BACKEND}/data/BenchmarkData/`)
            .then(response => {
                setBenchMarkStats(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }


    useEffect(() => {
        if (selectedView && selectedFeatureName) {
            setIsLoading(true);
            Promise.all([
                fetchHydroclimaticStats(selectedView, selectedFeatureName),
                fetchBenchMarkStats(selectedView, selectedFeatureName),
            ]).then(() => {
                setIsLoading(false);
            }).catch(() => {
                setIsLoading(false);
            });
        }
    }, [selectedView, selectedFeatureName]);

    const SelectedFeaturesStatsData = hydroclimaticStats && SelectedFeaturesWeightedAverageStatsFunction(hydroclimaticStats);


    let weightedAvgAeti;
    let weightedAvgPCP;
    let weightedAvgNPP;

    if (SelectedFeaturesStatsData) {
        weightedAvgAeti = calculateAverageOfArray(getSumAnnualDataFromMonthly(SelectedFeaturesStatsData.AETI))
        weightedAvgPCP = calculateAverageOfArray(getSumAnnualDataFromMonthly(SelectedFeaturesStatsData.PCP))
        weightedAvgNPP = calculateAverageOfArray(getSumAnnualDataFromMonthly(SelectedFeaturesStatsData.NPP))

    }





    return (
        <>
            {SelectedFeaturesStatsData && benchMarkStats ? (
                <div className="dasboard_page_container">
                    <div className="main_dashboard">
                        <div className="left_panel_equal">
                            <div className="card_container">

                  <div className='card_heading_container'>
                    <div className='card_heading'>
                    <h4>Benchmarks</h4>
                    </div>

                    <div className='info_container'>
                      <div className='heading_info_button'>
                        <BsInfoCircleFill />
                      </div>
                      <div className='info_card_container'>
                        <p>Benchmark AETI, PCP, BP, WP data of countries.</p>

                      </div>
                    </div>
                  </div>

        
                                <div className='item_table_container' style={{ maxHeight: "100%" }}>
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
                                            {benchMarkStats.map((item, index) => (
                                                <tr key={item}>
                                                    <td>{item.Name}</td>
                                                    <td>{item.AETI}</td>
                                                    <td>{item.PCP}</td>
                                                    <td>{(item.NPP * 22.222).toFixed(1)}</td>
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
            ) : (
                <Preloader />

            )}
        </>


    )
}

export default BenchmarkPage