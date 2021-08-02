import styled from 'styled-components';
import { FiArrowRight } from "react-icons/fi";

export const Container = styled.form`

`;

export const Control = styled.div`
  &:nth-child(1) > input,
  &:nth-child(2) > input {
    margin-bottom: 2px;
  }

  &:nth-child(2) > input {
    border-radius: 0;
  }
  input {
    border-radius: 16px 16px 0 0;
    width: 100%;
    padding: 1.75rem 1.3rem;
    border: none;
    border-bottom: 1px solid #ebebeb;

    &::placeholder {
      font-weight: bold;
      color: #9d9d9d;
      font-style: italic;
    }
  }
`;

export const Arrow = styled(FiArrowRight)`
  font-size: 3rem;
`;