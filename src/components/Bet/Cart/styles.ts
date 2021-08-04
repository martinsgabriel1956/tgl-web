import styled from "styled-components";
import { FiTrash2, FiArrowRight, FiShoppingCart } from "react-icons/fi";

export const Container = styled.form`
  margin-top: 2.5rem;
  overflow-y: auto; 
  overflow-x: hidden; 
  max-width: 317px;
  height: 300px;

  section {
    max-width: 230px;
    overflow-wrap: break-word;
  }
  
  padding: 1.5rem 1.25rem 1.75rem;
  border: 1px solid #e2e2e2;
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  background-color: #fff;

  h2 {
    font-size: 24px;
    color: #707070;
    text-transform: uppercase;
    padding-bottom: 1.75rem;
  }

  p {
    text-transform: uppercase;
    font-style: normal;
    font-size: 24px;
    color: #707070;
    font-weight: 300;

    strong {
      font-style: italic;
    }
  }

  @media (max-width: 767px) {
    width: 320px;
    margin: 0 auto;
  }
  
  @media (max-width: 341px) {
    width: 306px;
    
  }
`;

export const SaveContainer = styled.div`
  background-color: #f4f4f4;
  width: 317px;
  height: auto;
  padding: 1.5rem 2rem;
  border: 1px solid #e2e2e2;
  border-radius: 0 0 8px 8px;
  text-align: center;

  @media (max-width: 767px) {
    width: 320px;
    margin: 0 auto;
    margin-bottom: 24px;
  }

  @media (max-width: 341px) {
    width: 306px;
    margin-bottom: 24px;
  }
`;

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  background-color: transparent;
  border: none;
  color: #27c383;
  font-weight: bold;
  font-size: 35px;
  cursor: pointer;
  font-style: italic;

  &:disabled {
    cursor: no-drop;
    opacity: 0.5;
  }
`;

export const Arrow = styled(FiArrowRight)`
  margin-left: .25rem;
`;

export const GameContainer = styled.div`
  padding-bottom: 2rem;

`;

export const Game = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 3rem;
  
`;
export const DeleteGameContainer = styled.div`
  position: relative;
  margin-right: 1.25rem;

  &:after {
    content: "";
    position: absolute;
    background-color: ${props => props.color};
    top: -18px;
    width: 6px;
    height: 74px;
    border-radius: 3px;
    margin: 0 .25rem;
  }
`;

export const DeleteGame = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  opacity: 1;

  &:hover {
    opacity: 0.75;
  }
`;

export const Trash = styled(FiTrash2)`
  font-size: 30px;
  color: #707070;
`;

export const EmptyCart = styled.span`
  display: flex;
  color: #707070;
`;

export const GameNumbers = styled.span`
  display: block;
  color: #707070;
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;

  }
`;

export const GameType = styled.span`
  color: ${(props) => props.color};
  font-size: 16px;
  font-weight: bold;
`;

export const GamePrice = styled.span`
  font-size: 16px;
  margin-left: .5rem;
  color: #868686;
`;

export const EmptyCartIcon = styled(FiShoppingCart) `
  margin-right: .5rem;
`