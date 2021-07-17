import { Link } from "react-router-dom";

import { Form } from "../../Form";
import { Container, Arrow } from "./styles";

export function Card() {
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
}
