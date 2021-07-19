import { FiArrowLeft } from "react-icons/fi";

import { Container } from "./styles";

import { Logo } from "../../components/UI/Logo";
import { Card } from "../../components/UI/Card";
import { ResetPasswordForm } from "../../components/Form/ResetPasswordForm";
import { ButtonGray } from "../../components/UI/ButtonGray";
import { Footer } from "../../components/UI/Footer";

export function ResetPassword() {
  return (
    <Container>
      <Logo />
      <section>
        <h2>Reset Password</h2>
        <Card>
          <ResetPasswordForm />
        </Card>
        <ButtonGray to="/login">
          <FiArrowLeft />
          Back
        </ButtonGray>
      </section>
      <Footer />
    </Container>
  );
}
