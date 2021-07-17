import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 65px;
  color: #707070;

  div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  div:nth-child(2) {
    font-size: 22px;
    color: #fff;
    background-color: #b5c401;
    width: 144px;
    height: 39px;
    
    margin: 2rem auto;
    padding: 0.5rem 0;
    
    border-radius: 1.5rem;
    text-align: center;
    
    @media (max-width: 767px) {
      font-size: 11px;
      width: 67px;
      height: 19.5px;
      margin: 1rem auto;
      text-align: center;
    }
  }
  
  p {
    text-transform: uppercase;
    font-size: 83px;
    
    @media (max-width: 767px) {
      font-size: 41.5px;
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 767px) {
    margin-top: 1.75rem;
    font-size: 32.5px;
  }
`;
