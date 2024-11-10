import { Cart } from "./components/Cart";
import { GameContent } from "./components/GameContent";

import { Container } from "./styles";

export function NewBet() {
	return (
		<>
			<Container>
				<section>
					<GameContent />
				</section>
				<section>
					<Cart />
				</section>
			</Container>
		</>
	);
}
