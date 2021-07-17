import {
  Container,
  Control,
} from "./styles";

export function Form() {
  return (
    <Container>
      <Control>
        <input type="text" placeholder="Email" />
      </Control>
      <Control>
        <input type="text" placeholder="Password" />
      </Control>
      
    </Container>
  );
}
