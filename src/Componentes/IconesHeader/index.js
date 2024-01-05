import styled from 'styled-components'

import Perfil from '../../Imagens/perfil.svg'
import Sacola from '../../Imagens/sacola.svg'

const Icone = styled.li`
    cursor: pointer;
    margin-right: 40px;
    width: 25px;
`
const Icones = styled.ul`
    display: flex;
    align-items: center;
`
const icones = [Perfil, Sacola]

function IconesHeader() {
    return (
        <Icones>
            {icones.map((icone) => (
                <Icone><img src={icone} alt='icone' /></Icone>
            ))}
        </Icones>
    )
}

export default IconesHeader;