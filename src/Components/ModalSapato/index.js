import React from "react";
import "../ModalSapato/style.css"
import imglike from "../../img/love.png"


const ModalSapato = (props) =>{
    const { data } = props
    return(
       <div className="div-modal-sapato">
        <img className="img-sapato-modal" alt={data.descricao} src={data.imagemTenis}/>
        <p className="p-nome-sapato">
            {data.titulo}
        </p>
        <p className="p-preço-sapato">
            {data.preco}
        </p>
        <div className="div-parcela-like">
        <p className="p-parcela-sapato">
            {data.parcela}
        </p>
        <button className="btn-curtir">
            <img alt="coração para curtir" className="img-like" src={imglike} />
        </button>
        </div>
       </div>
    )
}

export default ModalSapato