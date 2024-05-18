import React from 'react'
import Plot from 'react-plotly.js'
import { useSelectedFeatureContext } from '../../contexts/SelectedFeatureContext';
import {AllWaterFootprints} from "../../assets/data/AllWaterFootprints.js"


const WaterFootprintChart = () => {
    const { selectedView, selectedFeatureName } = useSelectedFeatureContext();

    const filteredFeaturesItems = selectedView && selectedFeatureName !== "" ? AllWaterFootprints.filter(item => item[selectedView] === selectedFeatureName) : AllWaterFootprints;


    const sum_irrigated_green = ((filteredFeaturesItems.reduce((acc, curr) => acc + curr.irrigated_green, 0)) / 1000000).toFixed(1);
    const sum_irrigated_blue = ((filteredFeaturesItems.reduce((acc, curr) => acc + curr.irrigated_blue, 0)) / 1000000).toFixed(1);
    const sum_rainfed_blue = ((filteredFeaturesItems.reduce((acc, curr) => acc + curr.rainfed_blue, 0)) / 1000000).toFixed(1);
    const sum_rainfed_green = ((filteredFeaturesItems.reduce((acc, curr) => acc + curr.rainfed_green, 0)) / 1000000).toFixed(1);
    const sum_total = ((filteredFeaturesItems.reduce((acc, curr) => acc + curr.total, 0)) / 1000000).toFixed(1);



    return (
        <Plot
            data={[
                {
                    y: [sum_irrigated_blue, sum_irrigated_green, sum_rainfed_blue, sum_rainfed_green, sum_total],
                    x: ["Irrigated Blue", "Irrigated Green", "Rainfed Blue", "Rainfed green", "Total"],
                    type: "bar",
                    text: [sum_irrigated_blue, sum_irrigated_green, sum_rainfed_blue, sum_rainfed_green, sum_total],
                    textposition: "auto",
                },
            ]}
            layout={{
                yaxis: {
                    title: "Water footprint (MCM/year)",
                },
                xaxis: {
                    title: ``
                },
                margin: {
                    l: 50,
                },
            }}
            config={{
                displayModeBar: false,
                scrollZoom: false
            }

            }
            style={{ width: "100%", height: "100%" }}
        />
    )
}

export default WaterFootprintChart