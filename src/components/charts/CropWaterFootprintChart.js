import React from 'react'
import Chart from "react-apexcharts";

const CropWaterFootprintChart = ({cropSpecificWaterFootprints}) => {
    // Get the first three entries
    const topCropEntries = cropSpecificWaterFootprints.slice(0, 10);

    // Get the sum of the remaining entries
    const restCropEntriesSum = cropSpecificWaterFootprints.slice(10).reduce((acc, curr) => acc + curr.WFP, 0);

    // Combine the first three entries and the sum into a new array
    const newCropData = [
        ...topCropEntries,
        {
            "CropName": "Other Crops",
            "WFP": restCropEntriesSum
        }
    ];
    return (
        <Chart
            options={{
                chart: {
                    type: 'bar',
                    stacked: true,
                    // toolbar: {
                    //     show: false
                    // },

                    // toolbar: {
                    //     show: true, // Set this to true to show the toolbar
                    //     tools: {
                    //         download: true, // Enables the download icon
                    //         selection: true,
                    //         zoom: true,
                    //         zoomin: true,
                    //         zoomout: true,
                    //         pan: true,
                    //         reset: true | '<img src="/static/icons/reset.png" width="20">',
                    //         customIcons: []
                    //     },
                    //     autoSelected: 'zoom' // Default tool for selection
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
                    categories: newCropData.map((entry) => entry.CropName),
                    title: {
                        text: 'Crop Specific water footprint (BCM/year)',
                        offsetX: 10
                    },
                },
                yaxis: {
                    title: {
                        text: 'Crop Type',
                        offsetY: 10
                    },
                    // reversed: true
                },

                tooltip: {
                    y: {
                        formatter: function (val) {
                            return `${val} (BCM/year)`;
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
                name: 'Water footprint',
                data: newCropData.map((entry) => (entry.WFP) / 1000000000),
            }]}
            type="bar"
            width="100%"
            height="500px"
        />
    )
}

export default CropWaterFootprintChart