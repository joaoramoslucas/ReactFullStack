import styled from "styled-components";

import { Titulo } from "../../Titulo";
import CardRecomenda from "../CardRecomenda";
import imagemLivro from '../../Imagens/livro2.png'
import { livrosLancamentos } from "./livrosLancamentos";

const UltimoLancamentoContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimoLancamento() {
    return (
        <UltimoLancamentoContainer>
            <Titulo
                cor={"#EB9B00"}
                tamanhoDaFonte={"36px"}
            >
                ULTIMOS LANCAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livrosLancamentos.map(livro => (
                    <img src={livro.src} alt="Descricao da Imagem!"/>
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </UltimoLancamentoContainer>
    )
}

export default UltimoLancamento;