import styled from 'styled-components';

export const Container = styled.div`
  section:nth-child(1) {
    border: 1px solid red;
    padding: 4rem 6rem;
  }

  h2, p {
    padding-bottom: 1rem;
  }

  main {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;
