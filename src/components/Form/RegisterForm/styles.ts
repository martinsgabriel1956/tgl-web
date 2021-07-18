import styled from 'styled-components';

export const Container = styled.div`

`;

export const Control = styled.div`

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
