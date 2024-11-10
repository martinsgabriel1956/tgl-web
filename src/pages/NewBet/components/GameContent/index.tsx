import { Toaster } from "react-hot-toast";
import { Loader } from "../../../../components/UI/Loader";
import { NumbersGame } from "../../../../components/UI/NumbersGame";
import { SelectGame } from "../../../../components/UI/SelectGame";
import { useGameContent } from "./useGameContent";
import type { Game } from "./useGameContent";

import {
	ActionButton,
	AddToCartButton,
	ButtonContainer,
	CartImg,
	Container,
	GameNumbers,
	Games,
} from "./styles";

let cartArr: JSX.Element[] = [];

export function GameContent() {
	const {
		type,
		items,
		handleGameSelect,
		gameNumber,
		color,
		range,
		maxNumber,
		price,
		handleSelectButton,
		description,
		completeGame,
		clearGame,
		onAddToCart,
		gameId,
		isLoading,
	} = useGameContent();

	function gameButtons() {
		cartArr = [];

		for (let i = 1; i <= range; i++) {
			cartArr.push(
				<NumbersGame
					color={gameNumber.find((item) => item === i) ? color : "#ADC0C4"}
					onClick={() => handleSelectButton(i, maxNumber, price, type, color)}
					key={i}
					value={i}
				>
					{i < 10 ? `0${i}` : i}
				</NumbersGame>,
			);
		}
		return cartArr;
	}

	return (
		<>
			<Toaster />
			<Loader isLoading={isLoading} />
			<Container>
				<h2>
					New Bet <span>For {type}</span>
				</h2>

				<p>Choose a game</p>

				<Games>
					{items?.map((item: Game) => (
						<SelectGame
							key={item.id}
							onClick={() => handleGameSelect(item.id)}
							background={type === item.type ? item.color : "transparent"}
							border={item.color}
							color={price !== item.price ? item.color : "#fff"}
						>
							{item.type}
						</SelectGame>
					))}
				</Games>
				{type && <p>Fill Your Bet</p>}
				<span>{items && description}</span>

				<GameNumbers>{items && gameButtons()}</GameNumbers>

				{type && (
					<ButtonContainer>
						<div>
							<ActionButton onClick={() => completeGame(maxNumber, range)}>
								Complete game
							</ActionButton>
							<ActionButton onClick={clearGame}>Clear game</ActionButton>
						</div>

						<div>
							<AddToCartButton
								disabled={gameNumber.length <= 0}
								onClick={() =>
									onAddToCart(gameNumber, price, type, color, maxNumber, gameId)
								}
							>
								<CartImg />
								Add to cart
							</AddToCartButton>
						</div>
					</ButtonContainer>
				)}
			</Container>
		</>
	);
}
