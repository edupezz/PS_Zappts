import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        font-family: muli, sans-serif;
    }

    a{
        text-decoration: none;
    }

    body{
        width: 100%;
    }
`

export default GlobalStyle;