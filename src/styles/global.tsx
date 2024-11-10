import { createGlobalStyle } from "styled-components";

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

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: #b5c401;
      /* border-radius: 8px; */
    }

    body::-webkit-scrollbar-thumb {
      background: #707070;
      /* border-radius: 8px; */
    }
  }
`;
