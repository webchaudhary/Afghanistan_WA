import React from 'react'
import { SelectedFeatureProvider } from './SelectedFeatureContext'



export default function wrapContexts(props) {
    return (
        <>
            <SelectedFeatureProvider>
                {props.children}
            </SelectedFeatureProvider>

        </>
    )
}
