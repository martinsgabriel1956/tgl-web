import styled from "styled-components";

export const Container = styled.footer`
  background-color: transparent;

  padding: 1.5rem;
  
  width: 100%;
  margin: auto;
  position: fixed;

  border-top: 1px solid #ebebeb;
  bottom: 0;
  
  p {
    text-align: center;
    
    font-size: 15px;
    color: #707070;
  }
  
  @media (max-width: 767px) {
    position: relative;
    margin-bottom: auto;
  }

`;
