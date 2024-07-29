import React from 'react'
import { SelectedFeatureProvider } from './SelectedFeatureContext'
import { LoaderProvider } from './LoaderContext'
import { AlertProvider } from './AlertContext'
import { ModalProvider } from './ModalContext'
import AlertMessage from '../components/AlertMessage'



export default function wrapContexts(props) {
    return (
        <>
            <LoaderProvider>
                <AlertProvider>
                    <AlertMessage />
                    <ModalProvider>
                    <SelectedFeatureProvider>
                        {props.children}
                    </SelectedFeatureProvider>
                    </ModalProvider>
                </AlertProvider>
            </LoaderProvider>

        </>
    )
}
