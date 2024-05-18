import React from 'react'
import Chart from "react-apexcharts";
import { calculateAverageOfArray } from '../../helpers/functions';


const UnitConsumptionChart = ({ hydroclimaticStats }) => {



    const districtData = hydroclimaticStats.map((entry) => ({
        name: entry.DISTRICT ? entry.DISTRICT: entry.WATERSHED ,
        UnitConsumptions: calculateAverageOfArray((entry.AETI.map((aeti) => aeti * 10))).toFixed(2)
    }));

    districtData.sort((a, b) => b.UnitConsumptions - a.UnitConsumptions);


    const feraturesName = districtData.map((entry) => entry.name);
    const UnitConsumptions = districtData.map((entry) => entry.UnitConsumptions);



   const minHeightPerDistrict = 20; // Adjust this value as needed
    const minHeight = Math.max(minHeightPerDistrict * feraturesName.length, 300); // Minimum height of 300px


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
                    categories: feraturesName,
                    title: {
                        text: 'Average Annual Unit Consumption (m³/ha)',
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
            height={minHeight + 'px'} // Set the height dynamically
        />
    );
};


export default UnitConsumptionChart