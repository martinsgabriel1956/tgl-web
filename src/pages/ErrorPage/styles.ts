import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Logo = styled.h1`
  color: #707070;
  position: relative;
  font-size: 5rem;

  margin-bottom: 4rem;

  &:after {
    content: "";
    position: absolute;

    background-color: #b5c401;
    top: 84px;
    left: -10px;

    width: 112%;
    height: 18%;

    border-radius: 2rem;
  }
  `;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  
  color: #9D9D9D;
  font-size: 2rem;
  
  h1 {
    font-size: 4rem;
    position: relative;
    margin: 0 2rem;
    
    &:after {
      content: '';
      position: absolute;
      
      background-color: #9D9D9D;
      width: 4%;
      height: 100%;
      margin-left: 1rem;
      border-radius: 2rem;
    }
  }
`;
