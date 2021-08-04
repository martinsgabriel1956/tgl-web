import styled from 'styled-components';

export const Container = styled.form`
  border-radius: 4px;
  padding: 2rem 0;
  width: 75%;

  @media (min-width: 320px) and (max-width: 682px) {
    padding: 0;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }
  `;

export const Control = styled.div`
  input {
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;

    outline-color: #b5c401;
    box-shadow: 0px 3px 25px #00000014;

    &::placeholder {
      font-size: 1rem;
    }

    &::last-child {
      margin-bottom: 0;
    }
  }
`;

export const SaveInfoButton = styled.button`
  margin-top: 1rem;
  padding: .75rem 2rem;
  background-color: transparent;
  font-size: 1rem;
  font-weight: bold;
  border: 2px solid #b5c401;
  color: #b5c401;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #b5c401;
    color: #fff;
    transition: all .4s;
  }
`;
