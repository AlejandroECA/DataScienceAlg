import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    body{
        
        padding: 20px 40px;
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;

        position: absolute;
        width: 100vw;
        height: 100%;
        overflow-x: hidden ;

        @media screen and (max-width: 800px){
        }
    }

    .font{
        font-size: 1rem;
        color: black;
    }

    .font a{
        text-decoration: none;
        color:black;
    }

    .font a:hover{
        text-decoration: none;
        color:black;
    }

    .font:hover{
        text-decoration: none;
    }

    *{
        box-sizing: border-box;
    }

`