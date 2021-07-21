import { Header } from "../../components/UI/Header";
import { Footer } from "../../components/UI/Footer";
import { GameContent } from "../../components/Bet/GameContent";
import { Cart } from "../../components/Bet/Cart";

import {
  Container,
} from "./styles";

export function NewBet() {
  return (
    <>
      <Header />
      <Container>
        <section>
          <GameContent />
        </section>
        <section>
          <Cart />
        </section>
      </Container>
      <Footer />
    </>
  );
}
