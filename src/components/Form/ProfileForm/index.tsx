import { Container, Control } from './styles';

export function ProfileForm() {
  return (
    <Container>
      <Control>
        <input type="text" placeholder="name" />
      </Control>
      <Control>
        <input type="email" placeholder="email" />
      </Control>
      <Control>
        <input type="password" placeholder="password" />
      </Control>
      <Control>
        <input type="password" placeholder="Confirm password" />
      </Control>
    </Container>
  );
};