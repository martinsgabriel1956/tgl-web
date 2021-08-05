import { Container } from "./styles";

import { Header } from "../../components/UI/Header";
import { Footer } from "../../components/UI/Footer";
import { GameList } from "../../components/Dashboard/GameList";

export function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <GameList />
      </Container>
      <Footer />
    </>
  );
}
