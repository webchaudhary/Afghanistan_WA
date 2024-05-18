import React from 'react';
import Chart from 'react-apexcharts';

const WaterFootprintChart = ({ allWaterFootprintStats }) => {
    const sum_irrigated_green = ((allWaterFootprintStats.reduce((acc, curr) => acc + curr.irrigated_green, 0)) / 1000000).toFixed(1);
    const sum_irrigated_blue = ((allWaterFootprintStats.reduce((acc, curr) => acc + curr.irrigated_blue, 0)) / 1000000).toFixed(1);
    const sum_rainfed_blue = ((allWaterFootprintStats.reduce((acc, curr) => acc + curr.rainfed_blue, 0)) / 1000000).toFixed(1);
    const sum_rainfed_green = ((allWaterFootprintStats.reduce((acc, curr) => acc + curr.rainfed_green, 0)) / 1000000).toFixed(1);
    const sum_total = ((allWaterFootprintStats.reduce((acc, curr) => acc + curr.total, 0)) / 1000000).toFixed(1);

    const series = [{
        name: 'Water Footprint',
        data: [sum_irrigated_blue, sum_irrigated_green, sum_rainfed_blue, sum_rainfed_green, sum_total]
    }];

    const options = {
        chart: {
            type: 'bar',
            height: "100%"
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    position: 'top', // Specify the position of data labels on bars
                }
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return `${val}`; 
            },
            offsetY: -20, 
            background: {
                enabled: true,
                foreColor: '#000', // Sets the text foreground color
                borderRadius: 2,
                padding: 4,
                opacity: 0.7,
                borderWidth: 1,
                borderColor: '#fff'
            }
        },

        xaxis: {
            categories: ['Irrigated Blue', 'Irrigated Green', 'Rainfed Blue', 'Rainfed Green', 'Total'],

        },
        yaxis: {
            title: {
                text: 'Water footprint (MCM/year)'
            }
        },
        fill: {
            opacity: 1
        },
        
        tooltip: {
            y: {
                formatter: function (val) {
                    return `${val} MCM/year`
                }
            }
        }
    };

    return (
        <>
            <Chart options={options} series={series} type="bar" />
        </>


    );
}

export default WaterFootprintChart;
