import React from 'react'
import CTCBlueWaterFlowChart from '../components/charts/CTCBlueWaterFlowChart';
import CTCGreenWaterFlowChart from '../components/charts/CTCGreenWaterFlowChart';
import SelectedFeatureHeading from '../components/SelectedFeatureHeading';

const VirtualWaterPage = () => {
    return (
        <div className='dasboard_page_container'>
            <div className='main_dashboard'>
                <div className='left_panel_equal'>


                    <div className='card_container'>
                        <div className='defination_container'>
                            <h4> Virtual Blue Water Footprint</h4>
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
                        <div className='defination_container'>
                            <h4> Virtual Green Water Footprint</h4>
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
                        <div className='defination_container'>
                            <h4>Country-to-Country Blue Water Flow</h4>
                        </div>
                        <CTCBlueWaterFlowChart />
                    </div>

                    <div className='card_container'>
                        <div className='defination_container'>
                            <h4>Country-to-Country Green Water Flow</h4>
                        </div>
                        <CTCGreenWaterFlowChart />
                    </div>


                </div>

            </div>
        </div>
    )
}

export default VirtualWaterPage
