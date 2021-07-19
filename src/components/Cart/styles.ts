import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";

export const Container = styled.div`
  margin-top: 2.5rem;

  width: 317px;
  height: auto;
  padding: 2rem;
  border: 1px solid #e2e2e2;
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  background-color: #fff;

  p {
    text-transform: uppercase;
    font-style: normal;
    font-size: 24px;
    font-weight: 400;

    strong {
      font-style: italic;
    }
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
`;

export const Arrow = styled(FiArrowRight)``;
