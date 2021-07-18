import { Logo } from "../../components/UI/Logo";
import { Container } from "./styles";
import { RegisterForm } from "../../components/Form/RegisterForm";
import { Card } from "../../components/UI/Card";

import { ButtonGray } from "../../components/UI/ButtonGray";
import { FiArrowLeft } from "react-icons/fi";

export function Register() {
  return (
    <Container>
      <Logo />
      <section>
        <h2>Registration</h2>
        <Card>
          <RegisterForm />
          
        </Card>
        <ButtonGray to="/login">
          <FiArrowLeft />
          Back
        </ButtonGray>
      </section>
    </Container>
  );
}
