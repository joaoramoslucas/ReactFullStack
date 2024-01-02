import './App.css';
import Logo from './Componentes/Logo';
import Perfil from './Imagens/perfil.svg'
import Sacola from './Imagens/sacola.svg'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']
const icones = [Perfil, Sacola]


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo />
        <ul className='opcoes'>
          { textoOpcoes.map((texto) => (
            <li className='opcao'>{texto}</li>
          ))}
        </ul>
        <ul className='Icones'>
          { icones.map( (icone) => ( 
            <li className='icone'><img src={icone}></img></li>
           ))}
        </ul>
        
      </header>
    </div>
  );
}

export default App;
