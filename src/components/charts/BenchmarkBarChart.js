import React from 'react';
import Plot from 'react-plotly.js';

const BenchmarkBarChart = ({ xData, value, title, Unit }) => {
    const data = [
        {
            y: [''],
            x: xData,
            type: 'bar',
            orientation: 'h',
            hoverinfo: 'none', 
        },
    ];

    const layout = {
        yaxis: {
            title: null,
        },
        xaxis: {
            title: '',
        },
        shapes: [
            {
                type: 'line',
                x0: value,
                y0: -0.5,
                x1: value,
                y1: 0.5,
                line: {
                    color: 'red',
                    width: 3,
                },
            },
        ],
        margin: {
            t: 0, 
            b: 20, 
            l:0,
            r:0,
        },

    };

    const config = {
        displayModeBar: false,
        scrollZoom: false
    };

    return (
        <div className=''>
            <p style={{ fontSize: "20px"}}>{title}</p>
            <Plot data={data} layout={layout} config={config} 
                style={{ width: "100%", height: "120px" }} />

            <div className='overview_decsription' style={{ textAlign:"center", width:"100%" }}>
                <p style={{ fontSize: "20px"}}><span style={{ fontSize: "32px", color: "rgb(5, 45, 131)", textAlign:"center", width:"100%" }}>{value}</span> ({Unit})</p>
            </div>
        </div>
    )
};

export default BenchmarkBarChart;
