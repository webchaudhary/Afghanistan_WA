import React from 'react'
import Plot from 'react-plotly.js';
import regression from 'regression';
import { useSelectedFeatureContext } from '../../contexts/SelectedFeatureContext';
import {ClimateChangeStats} from "../../assets/data/ClimateChangeStats.js"
import { SelectedFeaturesAveragePCPTrendFunction } from '../../helpers/functions';

const PCPTrendChart = () => {

    const { selectedView, selectedFeatureName } = useSelectedFeatureContext();
    const filteredFeaturesItems = selectedView && selectedFeatureName !== "" ? ClimateChangeStats.filter(item => item[selectedView] === selectedFeatureName) : ClimateChangeStats;
    const SelectedFeaturesStatsData = SelectedFeaturesAveragePCPTrendFunction(filteredFeaturesItems)





    const xData=[
        1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992,
        1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004,
        2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016,
        2017, 2018, 2019, 2020, 2021, 2022, 2023
    ]
    const yData=SelectedFeaturesStatsData.PCP_trend



    const result = regression.linear(xData.map((_, index) => [xData[index], yData[index]]));

    const slope = result.equation[0];

    // Generate data points for the trendline
    const trendlineX = [Math.min(...xData), Math.max(...xData)];
    const trendlineY = trendlineX.map(x => result.predict(x)[1]);



    return (
        <div>
            <Plot
                data={[
                    {
                        x: xData,
                        y: yData,
                        type: 'bar',
                        name: "Precipitation (mm/year)",
                        text: xData.map((year, index) => `${year}, Precipitation: ${yData[index]} (mm/year)`),
                        hoverinfo: 'text',
                        textposition: 'none'
                    },
                    {
                        x: trendlineX,
                        y: trendlineY,
                        type: 'scatter',
                        mode: 'lines',
                        name: `Trendline (Slope: ${slope >= 0 ? `+${slope.toFixed(2)}` : `-${slope.toFixed(2)}`} mm/year)`,
                        text: trendlineX.map((year, index) => `${year}, Trendline: ${trendlineY[index]} (mm/year)`),
                        hoverinfo: 'text',
                        textposition: 'none'
                    },
                ]}
                layout={{
                    xaxis: {
                        title: "Year",
                    },
                    yaxis: {
                        title: "Precipitation (mm/year)",
                    },

                    legend: {
                        orientation: 'h',
                        x: 0,
                        y: 1.2,
                    },
                }}
                style={{ width: "100%", height: "100%" }}
            />

        </div>
    )
}

export default PCPTrendChart