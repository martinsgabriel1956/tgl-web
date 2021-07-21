import { ReactNode, FC, HTMLAttributes } from "react";

import { Container } from "./styles";

type HTMLProps = {
  className?: string | undefined;
}

type ButtonProps = {
  children: ReactNode;
  className?: HTMLAttributes<HTMLProps> | string;
};

export const ButtonGreen: FC<ButtonProps> = (props) => {
  return <Container >{props.children}</Container>;
};
