import React from "react";
import "../Header/style.css"
import lupa from "../../img/lupa.png"
import caixaEntrada from "../../img/caixa-entrada.png"


const Header = () => {
    return(
        <div className="div-header">
            <button className="stz-hamburguer">
                <span className="child-1"></span>
                <span className="child-2"></span>
                <span className="child-3"></span>
            </button>
            <img className="img-logo" src="https://th49p0x1fw.map.azionedge.net/Custom/Content/Themes/Base/Imagens/stz.new.layout/menu-novo/stz-logo.svg"/>
            <img className="img-lupa" src={lupa}/>
            <img className="img-caixa" src={caixaEntrada}/>
        </div>
    )
}

    export default Header