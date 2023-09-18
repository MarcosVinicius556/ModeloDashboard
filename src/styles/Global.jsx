import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    & a, button, input[type = submit] {
        cursor: pointer;
    }

    & a {
        text-decoration: none;
    }

    & body {
        background: #4d4d4d;
    }
`;