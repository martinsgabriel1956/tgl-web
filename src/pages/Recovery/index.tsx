import { Container } from "./styles";

import { RecoveryForm } from "../../components/Form/RecoveryForm";
import { Logo } from "../../components/UI/Logo";
import { Card } from "../../components/UI/Card";
import { Footer } from "../../components/UI/Footer";

export function Recovery() {
  return (
    <>
      <Container>
        <Logo />
        <section>
          <h2>Recover Password</h2>
          <Card>
            <RecoveryForm />
          </Card>
        </section>
      </Container>
      <Footer />
    </>
  );
}
