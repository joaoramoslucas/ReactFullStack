import './s.css'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

function OpcoesHeader() {
    return (
        <ul className='opcoes'>
            {textoOpcoes.map((texto) => (
                <li className='opcao'>{texto}</li>
            ))}
        </ul>
    )
}

export default OpcoesHeader;