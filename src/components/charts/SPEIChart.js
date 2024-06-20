import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { MonthsArray } from '../../helpers/functions';

const SPEIChart = ({ chartData, title }) => {
    const colors = chartData.map(value => {
        if (value > 0) return '#046fc7'; // Blue for positive values
        else return '#eb3107'; // Red for negative values
    });

    return (
        <>
            <ReactApexChart
                options={{
                    chart: {
                        type: 'bar',
                        height: "100%"
                    },
                    plotOptions: {
                        bar: {
                            distributed: true // This will apply different colors to each bar
                        }
                    },
                    colors: colors,
                    legend: {
                        show: false // Hides the legend
                    },
                    dataLabels: {
                        enabled: false
                    },
                    xaxis: {
                        type: 'datetime',
                        categories: MonthsArray,
                    },

                    // xaxis: {
                    //     categories: MonthsArray,
                    //     labels: {
                    //       rotate: 0,
                    //     },
                    //     tickPlacement: 'on',
                    //   },

                    yaxis: {
                        title: {
                            text: title
                        },
                        labels: {
                            formatter: (val) => {
                                return val.toFixed(0); // Formats values as integers
                            }
                        }
                    },
                    fill: {
                        opacity: 1
                    },
                    tooltip: {
                        x: {
                            format: 'MMM yyyy'
                          },
                        y: {
                            formatter: function (val) {
                                return `${val.toFixed(2)}`; // Keeps tooltip values to two decimal places
                            }
                        }
                    }
                }}
                series={[{
                    name: title,
                    data: chartData,
                }]}
                type="bar"
            />
        </>
    );
}

export default SPEIChart;
