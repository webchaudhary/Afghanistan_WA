import React from 'react'
import { SelectedFeatureProvider } from './SelectedFeatureContext'
import { LoaderProvider } from './LoaderContext'
import { AlertProvider } from './AlertContext'
import AlertMessage from '../components/AlertMessage'



export default function wrapContexts(props) {
    return (
        <>
            <LoaderProvider>
                <AlertProvider>
                    <AlertMessage />
                    <SelectedFeatureProvider>
                        {props.children}
                    </SelectedFeatureProvider>
                </AlertProvider>
            </LoaderProvider>

        </>
    )
}
