import { Link } from "react-router-dom";

import { Card } from "../../components/UI/Card";
import { Logo } from "../../components/UI/Logo";
import { LoginForm } from "../../components/Form/LoginForm";

import { Container, Arrow } from "./styles";

import { ButtonGray } from "../../components/UI/ButtonGray";

export function Login() {
  return (
    <Container>
      <Logo />
      <section>
        <h2>Authentication</h2>
        <Card>
          <LoginForm />
        </Card>
        <ButtonGray to="/register">
          Sign Up
          <Arrow />
        </ButtonGray>
      </section>
    </Container>
  );
}
