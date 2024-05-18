import React from 'react'
import Plot from 'react-plotly.js'

const LandCoverPiChart = ({landCoverValues,colorPallete,ClassesName}) => {
  return (
    <Plot
    data={[
      {
        labels: ClassesName,
        values: landCoverValues,

        type: 'pie',
        marker: {
          colors: colorPallete,
        },
        hoverinfo: 'label+percent+text',
        text: landCoverValues.map(value => `${value.toFixed(0)} ha`), // Display area in hectares
        textinfo: 'percent',
        // textinfo: 'label+text+percent',
        // texttemplate: '%{label}: %{value:.0f} ha',
        // textposition: 'inside',
        // textinfo: 'none',
      },
    ]}
    layout={{
      margin: {
        l: 100, 
        t: 20, 
        b: 100, 
        r: 100, 
      },
    }}

    style={{ width: "100%", height:"600px" }}
  />
  )
}

export default LandCoverPiChart
