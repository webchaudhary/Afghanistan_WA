import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { YearsArray } from '../../helpers/functions';

const AridityIndexChart = ({ SelectedFeaturesStatsData }) => {
    // Map over AridityIndex data to set colors based on value
    const colors = SelectedFeaturesStatsData.AridityIndex.map(value => {
        if (value > 0.5) return '#345ead';
        else if (value > 0.4) return '#5ba8d2';
        else if (value > 0.3) return '#c8ecf4';
        else if (value > 0.2) return '#fffbb1';
        else if (value > 0.1) return '#ffc469';
        else if (value > 0.05) return '#ff7c3d';
        else return '#ca001b';
    });

    const options = {
        chart: {
            height: '100%',
            type: 'bar',
        },
        plotOptions: {
            bar: {
                distributed: true // This will apply the different colors to each bar
            }
        },
        xaxis: {
            categories: YearsArray,
            title: {
                text: 'Year'
            }
        },
        yaxis: {
            title: {
                text: 'Aridity Index'
            }
        },
        colors: colors, 
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false // This hides the legend
          },
        
        tooltip: {
            y: {
                formatter: function (val) {
                    return val.toFixed(2); // Customize tooltip value
                }
            }
        }
    };

    const series = [{
        name: 'Aridity Index',
        data: SelectedFeaturesStatsData.AridityIndex
    }];

    return (
        <ReactApexChart options={options} series={series} type="bar"
            style={{ height: "100%" }} />
    );
}

export default AridityIndexChart;
