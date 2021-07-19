import { Footer } from "../../components/UI/Footer";
import { Header } from "../../components/UI/Header";

import {
  Container,
  Games,
  ButtonContainer,
  ActionButton,
  AddToCartButton,
  CartImg,
} from "./styles";

export function NewBet() {
  return (
    <>
      <Header />
      <Container>
        <section>
          <h2>
            New Bet <span>For</span>
          </h2>

          <p>Choose a game</p>

          <Games></Games>
          <p>Fill Your Bet</p>
          <span></span>

          <ButtonContainer>
            <div>
              <ActionButton>Complete game</ActionButton>

              <ActionButton>Clear game</ActionButton>
            </div>

            <div>
              <AddToCartButton>
                <CartImg />
                Add to cart
              </AddToCartButton>
            </div>
          </ButtonContainer>
        </section>
        <section>
          <div>dfjkhvfdjfcdks</div>
        </section>
      </Container>
      <Footer />
    </>
  );
}
