import { ReactNode, MouseEventHandler } from 'react';

import { Container } from './styles';
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    background?: string;
  }
}

interface SelectGameProps {
  children: ReactNode;
  color?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  background?: string;
}

export function SelectGame({ children, ...props }: SelectGameProps) {
  return (
    <Container background={props.background} {...props}>
      {children}
    </Container>
  );
};


