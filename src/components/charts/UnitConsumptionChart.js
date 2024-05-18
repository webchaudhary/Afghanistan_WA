import React from 'react'
import Chart from "react-apexcharts";
import { calculateAverageOfArray, calculateSumOfArray, getAnnualDataFromMonthly } from '../../helpers/functions';

const UnitConsumptionChart = ({ filteredFeaturesItems }) => {

    const districtData = filteredFeaturesItems.map((entry) => ({
        name: entry.DISTRICT,
        UnitConsumptions: calculateAverageOfArray((entry.AETI.map((aeti) => aeti * 10))).toFixed(2)
    }));

    districtData.sort((a, b) => b.UnitConsumptions - a.UnitConsumptions);


    const districtNames = districtData.map((entry) => entry.name);
    const UnitConsumptions = districtData.map((entry) => entry.UnitConsumptions);

    // const districtNames = filteredFeaturesItems.map((entry) => entry.DISTRICT);
    // const UnitConsumptions= filteredFeaturesItems.map((entry) => (calculateAverageOfArray((entry.AETI)) * 10) );


   const minHeightPerDistrict = 20; // Adjust this value as needed
    const minHeight = Math.max(minHeightPerDistrict * districtNames.length, 300); // Minimum height of 300px



    return (
        <Chart
            options={{
                chart: {
                    type: 'bar',
                    stacked: true,
                    toolbar: {
                        show: false
                    },
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
                        text: 'Average Annual Unit Consumption (m³/ha)',
                        offsetX: 10
                    },
                },
                yaxis: {
                    title: {
                        text: 'District Name',
                        offsetY: 10
                    },
                    // reversed: true
                },

                tooltip: {
                    y: {
                        formatter: function (val) {
                            return `${val} (m³/ha)`;
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
                name: 'Average Annual Unit Consumption',
                data: UnitConsumptions
            }]}
            type="bar"
            width="100%"
            // height="4400px"
            height={minHeight + 'px'} // Set the height dynamically
        />
    );
};


export default UnitConsumptionChart