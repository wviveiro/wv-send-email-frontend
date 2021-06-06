import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

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

export const HeaderLink = styled(Link)`
    &, &:active, &:link, &:hover {
        color: #000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;;
        text-decoration: none;
        height: 60px;
        padding: 20px;

        &.active {
            background-color: #CCC;
            color: #666;
        }

        font-size: 10px;

        i {
            font-size: 25px;
        }
    }
`;

export const LayoutContainer = styled.div`
    header {
        background-color: #FAFAFA;
        display: flex;
        justify-content: center;
        box-shadow: -1px -10px 20px 0px #000;

    }



    .inner-wrap {
        width: 90%;
        margin: 0 auto;
        margin-top: 50px;
        max-width: 700px;
    }
`;