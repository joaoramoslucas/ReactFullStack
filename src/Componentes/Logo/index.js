import './s.css'
import logo from '../../Imagens/logo.svg'

function Logo() {
    return (
        <div className='logo'>
            <img 
                src={logo} 
                alt='Logo' 
                className='logo-img'></img>
            <p><strong>Travel</strong>Books</p>
        </div>
    )
}

export default Logo