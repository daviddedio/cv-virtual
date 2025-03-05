import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useModalContext } from "./context/ModalContext";
import './Modal.css'

export const Modal = () => {
    const modalRoot = document.getElementById("modal")

    const modalRef = useRef(null)
    const { state, setState, componente } = useModalContext()
    const closeModal = () => { setState(false) }
    if (!state) { return null }

    return createPortal(
        <div className="overlay" onClick={closeModal}>
            <div className="modalx" ref={modalRef}>
                {componente}
            </div>
        </div>
        , modalRoot)
}
