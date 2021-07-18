import { ReactNode, FC, HTMLAttributes } from "react";
import { LinkProps } from "react-router-dom";

import { Container } from "./styles";

type HTMLProps = {
  className?: string | undefined;
}

type ButtonProps = {
  children: ReactNode;
  to: LinkProps["to"] | string;
  className?: HTMLAttributes<HTMLProps> | string;
};

export const ButtonLink: FC<ButtonProps> = (props) => {
  return <Container to={props.to}>{props.children}</Container>;
};
