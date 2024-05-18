import React, { useEffect, useState } from 'react'
import CTCBlueWaterFlowChart from '../components/charts/CTCBlueWaterFlowChart';
import CTCGreenWaterFlowChart from '../components/charts/CTCGreenWaterFlowChart';
import { useLoaderContext } from '../contexts/LoaderContext';
import axios from 'axios';
import { useSelectedFeatureContext } from '../contexts/SelectedFeatureContext';
import Preloader from '../components/Preloader';
import { BsInfoCircleFill } from 'react-icons/bs';

const VirtualWaterPage = () => {
    const { setIsLoading } = useLoaderContext();
    const [waterflowMatrixStats, setWaterflowMatrixStats] = useState(null);
    const { selectedView, selectedFeatureName } = useSelectedFeatureContext();




    const fetchHydroclimaticStats = (view, featureName) => {
        axios
            .get(`${process.env.REACT_APP_BACKEND}/data/WaterFlowsC2CMatrix/`)
            .then(response => {
                setWaterflowMatrixStats(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    useEffect(() => {
        if (selectedView && selectedFeatureName) {
            setIsLoading(true);
            Promise.all([
                fetchHydroclimaticStats(),
            ]).then(() => {
                setIsLoading(false);
            }).catch(() => {
                setIsLoading(false);
            });
        }
    }, [selectedView, selectedFeatureName]);





    return (
        <>

            {waterflowMatrixStats ? (
                <div className='dasboard_page_container'>
                    <div className='main_dashboard'>
                        <div className='left_panel_equal'>


                            <div className='card_container'>
                                <div className='card_heading_container'>
                                    <div className='card_heading'>
                                        <h4> Virtual Blue Water Footprint</h4>
                                    </div>

                                    <div className='info_container'>
                                        <div className='heading_info_button'>
                                            <BsInfoCircleFill />
                                        </div>
                                        <div className='info_card_container'>
                                            <p>
                                            Virtual Blue Water Footprint
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <iframe
                                    title="Embedded Chart"
                                    src={process.env.PUBLIC_URL + '/static/Afghanistan_blue.html'}
                                    width="100%"
                                    height="400px"
                                    frameBorder="0"
                                />
                            </div>

                            <div className='card_container'>
                            <div className='card_heading_container'>
                                    <div className='card_heading'>
                                    <h4> Virtual Green Water Footprint</h4>
                                    </div>

                                    <div className='info_container'>
                                        <div className='heading_info_button'>
                                            <BsInfoCircleFill />
                                        </div>
                                        <div className='info_card_container'>
                                            <p>
                                            Virtual Green Water Footprint
                                            </p>
                                        </div>
                                    </div>
                                </div>


                    
                                <iframe
                                    title="Embedded Chart"
                                    src={process.env.PUBLIC_URL + '/static/Afghanistan_green.html'}
                                    width="100%"
                                    height="400px"
                                    frameBorder="0"
                                />
                            </div>



                        </div>

                        <div className='left_panel_equal'>
                            <div className='card_container'>
                                



                                <div className='card_heading_container'>
                                    <div className='card_heading'>
                                        <h4>Country-to-Country Blue Water Flow</h4>
                                    </div>

                                    <div className='info_container'>
                                        <div className='heading_info_button'>
                                            <BsInfoCircleFill />
                                        </div>
                                        <div className='info_card_container'>
                                            <p>
                                            Country-to-Country Blue Water Flow
                                            </p>

                                        </div>
                                    </div>
                                </div>


                                <CTCBlueWaterFlowChart
                                    WaterFlowsC2CMatrix={waterflowMatrixStats} />
                            </div>

                            <div className='card_container'>
                                <div className='card_heading_container'>
                                    <div className='card_heading'>
                                        <h4>Country-to-Country Green Water Flow</h4>
                                    </div>

                                    <div className='info_container'>
                                        <div className='heading_info_button'>
                                            <BsInfoCircleFill />
                                        </div>
                                        <div className='info_card_container'>
                                            <p>
                                            Country-to-Country Green Water Flow
                                            </p>

                                        </div>
                                    </div>
                                </div>


                                <CTCGreenWaterFlowChart
                                    WaterFlowsC2CMatrix={waterflowMatrixStats} />
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

export default VirtualWaterPage
