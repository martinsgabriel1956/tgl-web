import { GameList } from "./components/GameList";
import { Container } from "./styles";

export function Dashboard() {
	return (
		<>
			<Container>
				<GameList />
			</Container>
		</>
	);
}
