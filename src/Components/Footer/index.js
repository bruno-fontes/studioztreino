import React from "react"
import "../Footer/style.css"
import imgArrow from "../../img/arrow-down.png"


const Footer = () => {
    return (
        <div className="footer">
            <p className="p-title-footer">
                PAGAMENTOS
            </p>
            <p className="subtitle-footer">
                Parcele em ate 10x sem juros no cartão
            </p>
            <p className="p-text-top-footer">
                Parcela mínima de R$19,99
            </p>
            <div className="formas-de-pagamento">
                <div className="quatro-primeiros">
                    <img className="img-1" src="https://th49p0x1fw.map.azionedge.net/Custom/Content/Themes/Base/Imagens/icones/ouze.png" />
                    <img className="img-2" src="https://th49p0x1fw.map.azionedge.net/Custom/Content/Themes/Base/Imagens/stz.new.layout/checkout/pagamentos/pix.svg" />
                    <img className="img-3" src="https://th49p0x1fw.map.azionedge.net/Custom/Content/Themes/Base/Imagens/icones/calcard-visa.png" />
                    <img className="img-4" src="https://th49p0x1fw.map.azionedge.net/Custom/Content/Themes/Base/Imagens/icones/visa.png" />
                </div>
                <div className="quatro-segundos">
                    <img className="img-5" src="https://th49p0x1fw.map.azionedge.net/Custom/Content/Themes/Base/Imagens/icones/mastercard.png" />
                    <img className="img-6" src="https://th49p0x1fw.map.azionedge.net/Custom/Content/Themes/Base/Imagens/icones/elo.png" />
                    <img className="img-7" src="https://th49p0x1fw.map.azionedge.net/Custom/Content/Themes/Base/Imagens/icones/hipercard.png" />
                    <img className="img-8" src="https://th49p0x1fw.map.azionedge.net/Custom/Content/Themes/Base/Imagens/icones/american-express.png" />
                </div>
                <div className="quatro-ultimos">
                    <img className="img-9" src="https://th49p0x1fw.map.azionedge.net/Custom/Content/Themes/Base/Imagens/icones/american-express.png" />
                    <img className="img-10" src="https://th49p0x1fw.map.azionedge.net/Custom/Content/Themes/Base/Imagens/icones/discover.png" />
                    <img className="img-11" src="https://th49p0x1fw.map.azionedge.net/Custom/Content/Themes/Base/Imagens/icones/paypal.png" />
                </div>
            </div>
            <p className="p-solto-footer-frete">
                Frete grátis nas comprar acima de R$169,99 para todo o Brasil. Consulte condições e regiões.
            </p>
            <div className="div-certificados">
                <p className="p-title-certificados">
                    CERTIFICADOS
                </p>
                <div className="div-align-certificados">
                    <img className="img-certificado-primeiro" src="https://api.siteblindado.com/www.stz.com.br/seal.png" />
                    <img className="img-certificado-segundo" src="https://newimgebit-a.akamaihd.net/ebitBR/selo/img_76294.png" />
                </div>
            </div>
            <div className="div-suportes">
                <div className="div-institucional">
                    <p className="p-institucional">
                        INSTITUCIONAL
                    </p>
                    <button className="btn-institucional">
                        <img src={imgArrow} className="img-btn-institucional" />
                    </button>
                </div>
                <div className="div-ajuda">
                    <p className="p-ajuda">
                        AJUDA E SUPORTE
                    </p>
                    <button className="btn-ajuda">
                        <img src={imgArrow} className="img-btn-ajuda" />
                    </button>
                </div>
                <div className="div-painel">
                    <p className="p-painel">
                        PAINEL DO CLIENTE
                    </p>
                    <button className="btn-painel">
                        <img src={imgArrow} className="img-btn-painel" />
                    </button>
                </div>
                <div className="div-atendimento">
                    <p className="p-atendimento">
                        ATENDIMENTO
                    </p>
                    <button className="btn-atendimento">
                        <img src={imgArrow} className="img-btn-atendimento" />
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Footer