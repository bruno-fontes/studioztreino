import React from "react";
import "../ModalAvisoPc/style.css"


const ModalAvisoPc = () => {
    return (
        <div className="div-principal-modal">
            <div className="div-modal">
                <p className="title-modal">
                    ATENÇÃO
                </p>
                <p className="p-text-modal">
                    Este site está disponivel apenas para mobile.
                </p>
                <button className="btn-voltar">
                    Voltar
                </button>
            </div>
        </div>
    )
}

export default ModalAvisoPc