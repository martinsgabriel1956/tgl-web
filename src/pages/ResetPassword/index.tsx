import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { Container, Arrow } from "./styles";

import { Logo } from "../../components/UI/Logo";
import { Card } from "../../components/UI/Card";
import { ResetPasswordForm } from "../../components/Form/ResetPasswordForm";
import { ButtonLink } from "../../components/UI/ButtonLink";

export function ResetPassword() {
  return (
    <Container>
      <Logo />
      <section>
        <h2>Reset Password</h2>
        <Card>
          <ResetPasswordForm />
          <ButtonLink to="#">
            Send link
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
