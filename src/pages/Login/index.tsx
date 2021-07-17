import { Link } from "react-router-dom";

import { Card } from "../../components/UI/Card";
import { Logo } from "../../components/UI/Logo";
import { Form } from "../../components/Form";

import { Container, Arrow } from "./styles";

export function Login() {
  return (
    <Container>
      <Logo />
      <section>
        <h2>Authentication</h2>
        <Card>
          <Form />
          <div>
            <Link to="/reset_password">I forget my password</Link>
          </div>
          <Link to="/">
            Log In
            <Arrow />
          </Link>
          <Link to="/register">
            Sign Up
            <Arrow />
          </Link>
        </Card>
      </section>
    </Container>
  );
}
