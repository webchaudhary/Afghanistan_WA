import React from 'react';
import ReactApexChart from 'react-apexcharts';
import regression from 'regression';

const ClimateProjectionsChart = ({ xData, yData, xAxisLabel, yAxisLabel,slopeUnit,yearsArray }) => {
    // Perform linear regression
    const result = regression.linear(xData.map((_, index) => [xData[index], yData[index]]));

    const slope = result.equation[0];


    const trendlineY = xData.map(x => result.predict(x)[1]);


    const options = {
        chart: {
            height: '100%',
            type: 'line',
        },
        stroke: {
            curve: 'smooth',
            width: 2
          },
        series: [
            {
                name: yAxisLabel,
                type: 'line',
                data: yData,
                color: '#265073',
                
            },
            {
                name: `Trendline (Slope: ${slope>0 ?"+":"-"} ${slope.toFixed(2)} ${slopeUnit})`,
                type: 'line',
                data: trendlineY,
                color: '#e80202',
            }
        ],

        xaxis: {
            type: 'datetime',
            categories: yearsArray,
            labels: {
              rotate: 0,
            },
            tickPlacement: 'on',
          },

        yaxis: {
            title: {
                text: yAxisLabel
            },
            labels: {
                formatter: (val) => {
                    return val.toFixed(0); // Formats values as integers
                }
            }
        },
        tooltip: {
            x: {
                format: 'yyyy'
              },
            shared: true,
            intersect: false,
            y: {
                formatter: (val) => `${val.toFixed(2)}`
            }
        },
        // legend: {
        //     horizontalAlign: 'left',
        //     position: 'top',
        //     offsetX: 0,
        //     offsetY: -10
        // },

    };


    return (
        <div>
             <ReactApexChart options={options} series={options.series} type="line" />
        </div>
    );
}

export default ClimateProjectionsChart;
