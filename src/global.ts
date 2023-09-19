import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    
   
    html, body {
        height: 100%;
        padding: 0;
        margin: 0;
        background: black;
        
        *{
            box-sizing: border-box;
        }
    }

    #root {
        font-family: sans-serif;
        --bg-color-primary: black;
        --bg-color-secondary: #202020;
        --text-color-primary: white;
        --text-color-secondary: lightgray;
        --purple: #581f7c;
    }

`
