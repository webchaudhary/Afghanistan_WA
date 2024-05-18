
import React, { useEffect } from 'react';
import { useAlertContext } from '../contexts/AlertContext';



const AlertMessage = () => {
    const { alertMessage, showAlert, setShowAlert } = useAlertContext();

    useEffect(() => {
        let timeout;
        if (showAlert) {
            timeout = setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [showAlert, setShowAlert]);

    return (
        <>
            {showAlert && (
                <div className={`alert_container ${showAlert ? '' : 'hide-alert'}`}>
                   <p> {alertMessage}</p>
                </div>
            )}


        </>
    )
}

export default AlertMessage;
