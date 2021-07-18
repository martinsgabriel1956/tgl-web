import { Link } from "react-router-dom";

import { Card } from "../../components/UI/Card";
import { Logo } from "../../components/UI/Logo";
import { LoginForm } from "../../components/Form/LoginForm";

import { Container, Arrow } from "./styles";

import { ButtonLink } from "../../components/UI/ButtonLink";

export function Login() {
  return (
    <Container>
      <Logo />
      <section>
        <h2>Authentication</h2>
        <Card>
          <LoginForm />
          <div>
            <Link to={"/reset_password"}>I forget my password</Link>
          </div>
          <ButtonLink className="primary" to="/">
            Log In
            <Arrow />
          </ButtonLink>
        </Card>
        <ButtonLink to="/register">
          Sign Up
          <Arrow />
        </ButtonLink>
      </section>
    </Container>
  );
}
