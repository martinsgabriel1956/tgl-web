import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 4px;
  padding: 2rem 0;
  `;

export const Control = styled.div`
  input {
    width: 80%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;

    outline-color: #b5c401;

    &::placeholder {
      font-size: 1rem;
    }

    &::last-child {
      margin-bottom: 0;
    }
  }


`;
