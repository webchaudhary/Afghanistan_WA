import React from 'react'

const SelectedFeatureHeading = ({ selectedFeatureName, selectedView }) => {
    return (
        <>
        <p style={{fontSize:"18px"}}>
           <strong> Selected View:</strong> {selectedView} | <strong> Selected Feature: </strong> {selectedFeatureName}
        </p>
        </>
    )
}

export default SelectedFeatureHeading