import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
    html {
        font-size: 10px;
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: Verdana, Geneva, sans-serif;
    }
    body { 
        margin: 0;
        padding: 0;
        height: 100%;
    }
    #root {
        height: 100%;
    }
`;