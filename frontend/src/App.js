import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from "@material-ui/core";

import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Carousel from './Components/Carrousel';
import  Routes  from './Routes';

import  MHeader  from './Components/MHeader';

export const AppContainer = styled.main`

  width: 100vw;
  height: 100vh;
  display: flex;

  @media(max-width: 800px){
    flex-flow: column;
    overflow: hidden;
  }
`

function App() {

  const media = useMediaQuery('(max-width: 800px)');

  return (
    <>
      <GlobalStyle />
        <AppContainer>
        <BrowserRouter>
          {media && <MHeader />}
          <Carousel />
            <Routes />
        </BrowserRouter>
      </AppContainer>
    </>
  );
}

export default App;
