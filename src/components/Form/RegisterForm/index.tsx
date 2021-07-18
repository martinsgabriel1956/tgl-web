import { ReactNode } from 'react';

import { Container, Control } from './styles';

interface RegisterFormProps {
  children?: ReactNode;
}

export function RegisterForm(props: RegisterFormProps) {
  return (
    <Container>
      <Control>
        <input type="text" placeholder="Nome" />
      </Control>
      <Control>
        <input type="email" placeholder="Email" />
      </Control>
      <Control>
        <input type="password" placeholder="Password" />
      </Control>
    </Container>
  );
};


