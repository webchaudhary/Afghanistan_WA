import React from 'react'
import { calculateSumOfArray, getAnnualDataFromMonthly } from '../../helpers/functions';
import ReactApexChart from 'react-apexcharts';

const TotalConsumptionChart = ({ hydroclimaticStats }) => {

    // Calculate total consumptions and sort districts based on total consumption
    const districtData = hydroclimaticStats.map((entry) => {
        const totalConsumption = (calculateSumOfArray(getAnnualDataFromMonthly(entry.AETI)) * 0.001 * entry.AREA / 1000000000).toFixed(2);
        return { 
            district: entry.DISTRICT ? entry.DISTRICT: entry.WATERSHED ,
            totalConsumption };
    });
    districtData.sort((a, b) => b.totalConsumption - a.totalConsumption);

    const districtNames = districtData.map((data) => data.district);
    const totalConsumptions = districtData.map((data) => data.totalConsumption);

    // Calculate the minimum height based on the number of districts
    const minHeightPerDistrict = 20; // Adjust this value as needed
    const minHeight = Math.max(minHeightPerDistrict * districtNames.length, 300); // Minimum height of 300px

    const yAxisTitle = hydroclimaticStats.some(entry => entry.DISTRICT) ? 'District Name' : 'Watershed Name';


    return (
        <ReactApexChart
            options={{
                chart: {
                    type: 'bar',
                    stacked: true,
                    zoom: {
                        enabled: false
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: districtNames,
                    title: {
                        text: 'Average Annual Total Consumption (BCM)',
                        offsetX: 10
                    },
                },
                yaxis: {
                    title: {
                        text: yAxisTitle,
                        offsetY: 10
                    },
                    // reversed: true
                },

                tooltip: {
                    y: {
                        formatter: function (val) {
                            return `${val} BCM`;
                        }
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }]
            }}
            series={[{
                name: 'Average Annual Consumption',
                data: totalConsumptions
            }]}
            type="bar"
            width="100%"
            // height="4400px"
            height={minHeight + 'px'} // Set the height dynamically
        />
    );
};


export default TotalConsumptionChart