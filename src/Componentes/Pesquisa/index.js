import Input from "../Input"
import styled from "styled-components"
import { useState } from "react"
import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #fffff 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 100%;
    width: 100%;
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`
function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde Começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
            <Input
                placeholder='Escreva sua próxima leitura'
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    if (textoDigitado !== "") {
                        const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                        setLivrosPesquisados(resultadoPesquisa)
                    } else {
                        setLivrosPesquisados([])
                    }
                }}
            />
            {livrosPesquisados.map(livro => (
                <Resultado>
                    <p>{livro.nome}</p>
                    <img src={livro.src} alt={livro.nome} />
                </Resultado>
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa;
