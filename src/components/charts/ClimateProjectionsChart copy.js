import React from 'react'
import Plot from 'react-plotly.js';

const ClimateProjectionsChart = ({ xData, yData, xAxisLabel, yAxisLabel }) => {


    return (
        <div>
            <Plot
                data={[
                    {
                        x: xData,
                        y: yData,
                        type: 'scatter',
                        mode: 'lines+markers',
                        // marker: {
                        //     color: color,
                        // },

                        // marker: {
                        //     color: yData.map(value => value < 0 ? 'red' : 'blue'),
                        // },
                    },
                ]}
                layout={{
                    xaxis: {
                        title: xAxisLabel,
                    },
                    yaxis: {
                        title: yAxisLabel,
                    },

                    legend: {
                        orientation: 'h',
                        x: 0,
                        y: 1.2,
                    },
                }}
                style={{ width: "100%", height: "100%" }}
            />

        </div>
    )
}

export default ClimateProjectionsChart