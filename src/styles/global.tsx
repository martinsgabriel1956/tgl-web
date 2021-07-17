import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 20px;
    font-style: italic;
    background-color: #F7F7F7;
  }
`;