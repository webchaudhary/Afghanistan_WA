import React from 'react'
import Chart from "react-apexcharts";
import { calculateAverageOfArray, calculateSumOfArray, getSumAnnualDataFromMonthly } from '../../helpers/functions';

const BiomassProductionChart = ({ hydroclimaticStats }) => {
    const districtData = hydroclimaticStats.map((entry) => ({
        name: entry.DISTRICT ? entry.DISTRICT: entry.WATERSHED ,
        biomassProduction: calculateAverageOfArray(getSumAnnualDataFromMonthly(entry.NPP.map((npp) => npp * 22.22))).toFixed(0)
    }));

    // Sort the district data based on biomass production (highest to lowest)
    districtData.sort((a, b) => b.biomassProduction - a.biomassProduction);

    const districtNames = districtData.map((entry) => entry.name);
    const biomassProduction = districtData.map((entry) => entry.biomassProduction);

    // Calculate the minimum height based on the number of districts
    const minHeightPerDistrict = 20; // Adjust this value as needed
    const minHeight = Math.max(minHeightPerDistrict * districtNames.length, 300); // Minimum height of 300px

    
    const yAxisTitle = hydroclimaticStats.some(entry => entry.DISTRICT) ? 'District Name' : 'Watershed Name';

    return (
        <Chart
            options={{
                chart: {
                    type: 'bar',
                    stacked: true,
                    // toolbar: {
                    //     show: false
                    // },
                    zoom: {
                        enabled: true
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
                    labels: {
                        formatter: function (value) {
                            return parseFloat(value).toLocaleString();
                        }
                    },
                    title: {
                        text: 'Mean Annual Biomass Production (kg/ha/year)',
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
                            return `${val} (kg/ha/year)`;
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
                name: 'Mean Annual Biomass Production',
                data: biomassProduction
            }]}
            type="bar"
            width="100%"
            // height="4400px"
            height={minHeight + 'px'} // Set the height dynamically
        />
    );
};


export default BiomassProductionChart