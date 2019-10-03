import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, border-style, #root {
        height: 100%
    }

    body {
        background: red;
        background: #fbfbfb;
        color: #333;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased !important;
        font-family: 'Montserrat', sans-serif;
    }

    a {
        text-decoration: none;  
        color: #333;      
    }
`;
