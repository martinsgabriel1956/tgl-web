import { Logo } from "../../components/UI/Logo";
import { Container, Arrow } from "./styles";
import { RegisterForm } from "../../components/Form/RegisterForm";
import { Card } from "../../components/UI/Card";
import { ButtonLink } from "../../components/UI/ButtonLink";
import { FiArrowLeft } from "react-icons/fi";

export function Register() {
  return (
    <Container>
      <Logo />
      <section>
        <h2>Registration</h2>
        <Card>
          <RegisterForm />
          <ButtonLink to="/">
            Register
            <Arrow />
          </ButtonLink>
        </Card>
        <ButtonLink to="/login">
          <FiArrowLeft />
          Back
        </ButtonLink>
      </section>
    </Container>
  );
}
