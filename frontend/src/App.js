import React from 'react';
import styled from 'styled-components';

import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Carousel from './Components/Carrousel';
import  Routes  from './Routes';

export const AppContainer = styled.main`

  width: 100vw;
  height: 100vh;
  display: flex;
`

function App() {
  return (
    <>
    <GlobalStyle />
      <AppContainer>
        <Carousel />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AppContainer>
    </>
  );
}

export default App;
