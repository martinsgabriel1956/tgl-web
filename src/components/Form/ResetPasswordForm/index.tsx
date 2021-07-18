import { Container, Control } from './styles';

export function ResetPasswordForm() {
  return (
    <Container>
      <Control>
        <input type="email" placeholder="Email" />
      </Control>
    </Container>
  );
};