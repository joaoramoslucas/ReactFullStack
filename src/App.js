import styled from 'styled-components'

import Pesquisa from './Componentes/Pesquisa';
import Header from './Componentes/Header';

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
    </AppContainer>
  );
}

export default App;
