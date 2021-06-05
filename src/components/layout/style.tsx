import { createGlobalStyle } from "styled-components";

// Reset CSS
export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;

        &:focus {
            outline: 0;
        }
    }
`;