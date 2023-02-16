import React from 'react'
import "../Home/style.css"
import Header from '../Header'
import arrowDown from "../../img/arrow-down.png"
import ModalSapato from '../ModalSapato'
import Footer from '../Footer'
import ModalAvisoPc from '../ModalAvisoPc'


const Home = () => {
    const sapato = [
        {
            titulo: "Sandália Rasteira Gabriela",
            preco: "R$ 119,99",
            parcela: "6x de R$20,00",
            imagemTenis: "https://d87n9o45kphpy.cloudfront.net/Custom/Content/Products/27/29/2729915_sandalia-rasteira-gabriela-amarracao-hotfix-multicolor-preto-5186241_s3_638092277782145207.jpg",
            descricao: "sandalia",
            id: 1
        },
        {
            titulo: "Sandália Gabriela Plataforma",
            preco: "R$ 119,99",
            parcela: "6x de R$20,00",
            imagemTenis: "https://d87n9o45kphpy.cloudfront.net/Custom/Content/Products/27/28/2728331_sandalia-gabriela-flatform-amarracao-tresse-metalizada-color-5186115_s3_638092277693863353.jpg",
            descricao: "sandalia",
            id: 2
        },
        {
            titulo: "Sandália Vizzano Salto Geométrico Tiras Azul",
            preco: "R$ 118,99",
            parcela: "5x de R$23,80",
            imagemTenis: "https://d87n9o45kphpy.cloudfront.net/Custom/Content/Products/27/40/2740143_sandalia-vizzano-salto-geometrico-tiras-azul-5187804_s1_638112690466793090.jpg",
            descricao: "sandalia",
            id: 3
        },
        {
            titulo: "Rasteira Penélope Tiras Tressê Color",
            preco: "R$ 39,99",
            parcela: "2x de R$20,00",
            imagemTenis: "https://d87n9o45kphpy.cloudfront.net/Custom/Content/Products/27/34/2734024_rasteira-penelope-tiras-tresse-color-5187042_s1_638106974691288924.jpg",
            descricao: "sandalia",
            id: 3
        },
        {
            titulo: "Scarpin Vizzano Salto Fino Aplicação Verniz Marrom",
            preco: "R$ 143,99",
            parcela: "7x de R$20,57",
            imagemTenis: "https://d87n9o45kphpy.cloudfront.net/Custom/Content/Products/27/40/2740145_scarpin-vizzano-salto-fino-aplicacao-verniz-marrom-5187806_s1_638106975014172265.jpg",
            descricao: "sandalia",
            id: 3
        },
        {
            titulo: "Slipper Moleca Pespontos Tecido Bege",
            preco: "R$ 69,99",
            parcela: "3x de R$23,33",
            imagemTenis: "https://d87n9o45kphpy.cloudfront.net/Custom/Content/Products/27/32/2732963_slipper-moleca-pespontos-tecido-bege-5186614_s1_638103259720004258.jpg",
            descricao: "sandalia",
            id: 3
        },
        {
            titulo: "Oxford Moleca Plataforma Tratorado Recortes Preto",
            preco: "R$ 135,99",
            parcela: "6x de R$22,66",
            imagemTenis: "https://d87n9o45kphpy.cloudfront.net/Custom/Content/Products/27/40/2740991_bolsa-tiracolo-pequena-gabriela-texturizada-preto-5187798_s1_638113000377505963.jpg",
            descricao: "sandalia",
            id: 3
        },

    ]

    return (
        <div>
            <ModalAvisoPc />
            <div className='div-principal'>
                <Header />
                <div className='div-filtros'>
                    <button className='btn-filtrar'>
                        Filtrar
                    </button>
                    <div className='div-text'>
                        <p className='p-text'>
                            200 produtos
                        </p>
                    </div>
                    <button className='btn-ordenar'>
                        Ordenar
                        <img src={arrowDown} className='img-arrow' />
                    </button>
                </div>
                <div className='div-sapatos-registrados'>
                    <div className='div-aling-sapatos'>
                        {
                            sapato.map(
                                (data, index) => {
                                    return (
                                        <div className="modal-sapato" key={index}>
                                            <ModalSapato data={data} />
                                        </div>

                                    )
                                }
                            )

                        }
                    </div>

                </div>
                <div className='div-btns-pages'>
                    <div className='div-btns'>
                        <button className='btn-page-1'>
                            1
                        </button>

                        <button className='btn-page-2'>
                            2
                        </button>

                        <button className='btn-page-3'>
                            3
                        </button>

                        <button className='btn-page-4'>
                            4
                        </button>

                        <button className='btn-page-5'>
                            5
                        </button>

                        <button className='btn-page-6'>
                            6
                        </button>
                    </div>
                    <button className='btn-pular-proxima'>
                        PRÓXIMO
                        <img src={arrowDown} className='img-btn-pular' />
                    </button>
                </div>
                <Footer />
            </div>
        </div>

    )
}

export default Home