import { Container, ErrorContainer, Logo } from './styles';

export function ErrorPage() {
  return (
    <Container>
      <Logo>TGL</Logo>
      <ErrorContainer>
        <h1>404</h1>
        <p>Page not found </p>
      </ErrorContainer>
    </Container>
  );
};
