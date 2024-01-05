import styled from 'styled-components'

import Header from './Componentes/Header';
import Pesquisa from './Componentes/Pesquisa';
import UltimoLancamento from './Componentes/UltimosLancamentos';

const AppContainer = styled.div`
    overflow: auto;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #000000, 35%, #2e2c2c);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimoLancamento />
    </AppContainer>
  );
}

export default App;
