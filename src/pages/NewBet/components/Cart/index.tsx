import { Toaster } from "react-hot-toast";
import { useCart } from "./useCart";

import {
	Arrow,
	Container,
	DeleteGame,
	DeleteGameContainer,
	EmptyCart,
	EmptyCartIcon,
	Game,
	GameContainer,
	GameNumbers,
	GamePrice,
	GameType,
	SaveButton,
	SaveContainer,
	Trash,
	Wrapper,
} from "./styles";

export function Cart() {
	const { handleSaveGame, cartItem, deleteGame, totalPrice, saveGame } =
		useCart();

	return (
		<Container>
			<Toaster />
			<Wrapper onSubmit={handleSaveGame}>
				<h2>Cart</h2>

				<GameContainer>
					{cartItem.length > 0 ? (
						cartItem.map(
							({ game_id, id, numbers, type, total_price, color }) => (
								<Game key={id}>
									<DeleteGameContainer color={color}>
										<DeleteGame onClick={() => deleteGame(id, total_price)}>
											<Trash />
										</DeleteGame>
									</DeleteGameContainer>
									<section>
										<GameNumbers>{numbers}</GameNumbers>
										<div>
											<GameType color={color}>{type}:</GameType>
											<GamePrice>
												R${total_price.toFixed(2).replace(".", ",")}
											</GamePrice>
										</div>
									</section>
								</Game>
							),
						)
					) : (
						<EmptyCart>
							<EmptyCartIcon />
							Carrinho vázio
						</EmptyCart>
					)}
				</GameContainer>

				<p>
					<strong>Cart</strong> Total:{" "}
					{totalPrice >= 0 && `R$ ${totalPrice.toFixed(2).replace(".", ",")}`}
				</p>
			</Wrapper>
			<SaveContainer>
				<SaveButton onClick={() => saveGame(cartItem)}>
					Save
					<Arrow />
				</SaveButton>
			</SaveContainer>
		</Container>
	);
}
