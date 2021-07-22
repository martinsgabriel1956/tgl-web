import styled from "styled-components";

import { FiShoppingCart } from "react-icons/fi";

export const Container = styled.div`
  h2 {
    font-size: 1.25em;
    text-transform: uppercase;
    color: #707070;
    display: inline-block;
    
    @media (max-width: 767px) {
      font-size: 1em;
    }
    
    span {
      font-size: 24px;
      font-weight: 200;
      
      @media (max-width: 767px) {
        font-size: 20px;
      }
    }
  }
  
  p {
    color: #868686;
    font-weight: bold;
    margin-top: 2rem;
    font-size: 17px;

    @media (max-width: 767px) {
      font-size: 15px;
      margin-top: 1.5rem;
    }
  }

  span {
    color: #868686;
    font-size: 17px;
    width: 100%;

    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
  }
`;

export const Games = styled.div`
  padding-top: 1rem;

  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

export const GameNumbers = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  @media (max-width: 767px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;

  div:nth-child(1) button:nth-child(1) {
    margin-right: 1.5rem;
  }
`;

export const ActionButton = styled.button`
  padding: 0.75rem 1.25rem;
  border: 2px solid #27c383;
  color: #27c383;
  background-color: transparent;
  border-radius: 0.45rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #27c383;
    color: #ffffff;
    transition: all 0.5s;
  }

  &:disabled {
    cursor: no-drop;
    opacity: 0.5;
  }
`;

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.75rem 2.5rem;
  background-color: #27c383;
  border: 2px solid #27c383;
  color: #ffffff;
  border-radius: 0.45rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: #27c383;
    transition: all 0.5s;
  }

  &:disabled {
    cursor: no-drop;
    opacity: 0.5;
  }
`;

export const CartImg = styled(FiShoppingCart)`
  width: 24px;
  height: 24px;

  margin-right: 1rem;
`;
