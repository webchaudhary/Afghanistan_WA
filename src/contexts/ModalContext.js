import React, { createContext, useState, useContext } from 'react';

// Create a context for the modal
const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
    const [modalContent, setModalContent] = useState(null);
    const [modalHeading, setModalHeading] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (heading, content) => {
        setModalHeading(heading);
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
        setModalHeading('');
    };

    return (
        <ModalContext.Provider value={{ isModalOpen, modalContent, modalHeading, openModal, closeModal }}>
            {children}
            {isModalOpen && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{modalHeading}</h5>

                            </div>
                            <div className="modal-body">
                                {modalContent}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isModalOpen && <div className="modal-backdrop fade show"></div>}
        </ModalContext.Provider>
    );
};
