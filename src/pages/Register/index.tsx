import { FiArrowLeft } from "react-icons/fi";

import { Container } from "./styles";

import { RegisterForm } from "../../components/Form/RegisterForm";
import { Logo } from "../../components/UI/Logo";
import { Card } from "../../components/UI/Card";
import { Footer } from "../../components/UI/Footer";
import { ButtonGray } from "../../components/UI/ButtonGray";

export function Register() {
  return (
    <>
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
      <Footer />
    </>
  );
}
