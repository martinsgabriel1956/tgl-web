import { Card } from "../../components/UI/Card";
import { Logo } from "../../components/UI/Logo";

import { Container } from "./styles";

export function Login() {
  return (
    <Container>
      <Logo />
      <section>
        <h2>Authentication</h2>
        <Card />
      </section>
    </Container>
  );
}
