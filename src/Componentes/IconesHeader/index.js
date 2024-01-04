import './s.css'

import Perfil from '../../Imagens/perfil.svg'
import Sacola from '../../Imagens/sacola.svg'

const icones = [Perfil, Sacola]

function IconesHeader() {
    return (
        <ul className='icones'>
            {icones.map((icone) => (
                <li className='icone'><img src={icone} alt='icone' /></li>
            ))}
        </ul>
    )
}

export default IconesHeader;