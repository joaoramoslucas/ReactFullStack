import styled from "styled-components";

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

const Opcoes = styled.ul`
    display: flex;
`
const Opcao = styled.li`
    height: 100%;
    display: flex;
    padding: 0 5px;
    font-size: 16px;
    cursor: pointer;
    min-width: 120px;
    text-align: center;
    align-items: center;
    justify-content: center;
`
function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Opcao>{texto}</Opcao>
            ))}
        </Opcoes>
    )
}

export default OpcoesHeader;