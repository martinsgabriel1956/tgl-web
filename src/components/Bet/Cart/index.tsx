import { Container, SaveContainer, SaveButton, Arrow } from "./styles";

export function Cart() {
  return (
    <div>
      <Container>
        <h2>Cart</h2>

        <p>
          <strong>Cart</strong> Total:
        </p>

      </Container>
        <SaveContainer>
          <SaveButton>
            Save
            <Arrow />
          </SaveButton>
        </SaveContainer>
    </div>
  );
}
