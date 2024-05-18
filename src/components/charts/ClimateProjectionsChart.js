import React from 'react';
import Plot from 'react-plotly.js';
import regression from 'regression';

const ClimateProjectionsChart = ({ xData, yData, xAxisLabel, yAxisLabel,slopeUnit }) => {
    // Perform linear regression
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
                        type: 'scatter',
                        mode: 'lines+markers',
                        name: yAxisLabel,
                    },
                    {
                        x: trendlineX,
                        y: trendlineY,
                        type: 'scatter',
                        mode: 'lines',
                        name: `Trendline (Slope: ${slope.toFixed(2)} ${slopeUnit})`,
                    },
                ]}
                layout={{
                    xaxis: {
                        title: xAxisLabel,
                    },
                    yaxis: {
                        title: yAxisLabel,
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
    );
}

export default ClimateProjectionsChart;
