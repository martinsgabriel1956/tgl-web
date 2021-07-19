import styled from "styled-components";

import { FiShoppingCart } from 'react-icons/fi';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  section:nth-child(1) {
    padding: 4rem 7rem;
  }

  h2 {
    font-size: 24px;
    text-transform: uppercase;
    color: #707070;

    span {
      font-weight: 200;
    }
  }
  p {
    color: #868686;
    font-weight: bold;
    margin-top: 2rem;
    font-size: 17px;
  }
`;

export const Games = styled.div``;

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
  `;

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  padding: 0.75rem 1.25rem;
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
`;

export const CartImg = styled(FiShoppingCart)`
  width: 20px;
  height: 20px;

  margin-right: 1rem;
`;