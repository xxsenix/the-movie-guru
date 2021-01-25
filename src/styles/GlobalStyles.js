import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 10px;
    box-sizing: border-box;
  }
  
  body {
    font-size: 2rem;
    background: ${(props) => props.theme.gray}
  }
`;

export default GlobalStyles;
