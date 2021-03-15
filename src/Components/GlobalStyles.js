import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color: inherit;
    }

    *{
        box-sizing: border-box;
    }

    body {
        font-family: 'Do Hyeon', sans-serif;
        font-size: 14px;
        background-color: #141414;
        padding-top: 50px;
    }
`;

export default globalStyles;