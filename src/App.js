import styled from 'styled-components'

import Header from './Componentes/Header';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #000000, 35%, #2e2c2c);

  li {
    list-style: none;
  }
`

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
