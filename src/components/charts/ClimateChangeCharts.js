import React from 'react';
import ReactApexChart from 'react-apexcharts';
import regression from 'regression';
import { SelectedFeaturesAveragePCPTrendFunction } from '../../helpers/functions';

const ClimateChangeCharts = ({ climateChangeStats }) => {
    const SelectedFeaturesStatsData = SelectedFeaturesAveragePCPTrendFunction(climateChangeStats);

    const xData = [
        1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992,
        1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004,
        2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016,
        2017, 2018, 2019, 2020, 2021, 2022, 2023
    ];
    const yData = SelectedFeaturesStatsData.PCP_trend;

    const result = regression.linear(xData.map((_, index) => [xData[index], yData[index]]));
    const slope = result.equation[0];

    const trendlineY = xData.map(x => result.predict(x)[1]);

    const options = {
        chart: {
            height: '100%',
            type: 'line',
        },
        stroke: {
            curve: 'straight',
            width: 2
          },
        series: [
            {
                name: 'Precipitation (mm/year)',
                type: 'bar',
                data: yData,
                color: '#265073',
                
            },
            {
                name: `Trendline (Slope: ${slope.toFixed(2)} mm/year)`,
                type: 'line',
                data: trendlineY,
                color: '#e80202',
            }
        ],
        xaxis: {
            categories: xData,
            title: {
                text: ''
            
            }
        },
        yaxis: {
            title: {
                text: 'Precipitation (mm/year)'
            }
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: (val) => `${val.toFixed(2)} mm/year`
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

export default ClimateChangeCharts;
