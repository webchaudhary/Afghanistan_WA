import React, { useState } from 'react';
import Chart from 'react-apexcharts';


const CTCBlueWaterFlowChart = ({WaterFlowsC2CMatrix}) => {
    const [selectedSorting, setSelectedSorting] = useState('Import');

    const handleSortingSelection = (e) => {
        setSelectedSorting(e.target.value)
    }


    const countriesData = WaterFlowsC2CMatrix.map(country => ({
        name: country.CountryName,
        Export: (country[`Avg_Blue_Export`] / 1000000).toFixed(1),
        Import: (country[`Avg_Blue_Import`] / 1000000).toFixed(1),
    }));


    var SortedCountriesData= countriesData.sort((a, b) => b[`${selectedSorting}`] - a[`${selectedSorting}`]);

    // Extract top 5 countries and calculate total for other countries
    const topCountries = SortedCountriesData.slice(0, 10);
    const otherCountries_Export_Total = SortedCountriesData.slice(10).reduce((total, country) => total + country.Export, 0);
    const otherCountries_Import_Total = SortedCountriesData.slice(10).reduce((total, country) => total + country.Import, 0);

    // Create series data for chart
    const series = [
        {
            name: 'Virtual water transfer from AFG',
            data: topCountries.map(country => country.Export).concat(otherCountries_Export_Total),
            color: '#378CE7'
        },
        {
            name: 'Virtual water transfer to AFG ',
            data: topCountries.map(country => country.Import).concat(otherCountries_Import_Total),
            color: '#67C6E3'
        },
    ];

    // Create categories for x-axis including 'Other Countries' for the sum of other countries
    const categories = topCountries.map(country => country.name).concat('Other Countries');


    return (
        <>
            <div className='chart_year_container' >
                <label>Sort Countries by: &nbsp; </label>
                <select value={selectedSorting} onChange={handleSortingSelection} style={{ marginRight: "10px" }}>
                    <option value="Import">Virtual Water Import</option>
                    <option value="Export">Virtual Water Export</option>
                </select>

            </div>
            <Chart
                options={{
                    chart: {
                        type: 'bar',
                        // stacked: true,
                        toolbar: {
                            show: false,
                        },
                        zoom: {
                            enabled: true,
                        },
                    },
                    // plotOptions: {
                    //     bar: {
                    //         horizontal: true,
                    //     },
                    // },
                    plotOptions: {
                        bar: {
                            horizontal: true,
                            dataLabels: {
                                position: 'top',
                            },
                        }
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    xaxis: {
                        categories: categories,
                        title: {
                            text: `Country-to-Country Blue Water Flow (MCM/year)`,
                            offsetX: 10,
                        },
                    },
                    yaxis: {
                        title: {
                            text: 'Country Name',
                            offsetY: 10,
                        },
                        // reversed: true
                    },

                    tooltip: {
                        y: {
                            formatter: function (val) {
                                return `${val} (MCM/year)`;
                            },
                        },
                    },
                    responsive: [
                        {
                            breakpoint: 480,
                            options: {
                                legend: {
                                    position: 'bottom',
                                    offsetX: -10,
                                    offsetY: 0,
                                },
                            },
                        },
                    ],
                }}
                series={series}
                type='bar'
                width='100%'
                height='500px'
            // height={minHeight + 'px'}
            />
        </>

    );
};

export default CTCBlueWaterFlowChart;
