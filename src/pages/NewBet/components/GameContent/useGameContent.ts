import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { GameService } from "../../../../services/gameService";
import { cartActions } from "../../../../store/cart";
import { newBetActions } from "../../../../store/newbet";

type RootState = {
	newBet: {
		items: number[];
		color: string;
	};
};

export type Game = {
	id: number;
	description: string;
	range: number;
	type: string;
	price: number;
	color: string;
	max_number: number;
	min_cart_value: number;
};

export function useGameContent() {
	const gameNumber: number[] = useSelector(
		(state: RootState) => state.newBet.items,
	);

	const dispatch = useDispatch();

	const [items, setItems] = useState<Game[]>([]);
	const [type, setType] = useState("");
	const [description, setDescription] = useState("");
	const [range, setRange] = useState(0);
	const [price, setPrice] = useState(0);
	const [color, setColor] = useState("");
	const [maxNumber, setMaxNumber] = useState(0);
	const [gameId, setGameId] = useState(0);
	const [, setMinCartNumber] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const gamesRequest = useCallback(async () => {
		try {
			setIsLoading(true);
			const games = await GameService.getGames({});
			setItems(games);
		} catch (error) {
			toast.error("Erro ao buscar os jogos");
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		gamesRequest();
	}, [gamesRequest]);

	const clearGame = useCallback(() => {
		return dispatch(newBetActions.clearGame());
	}, [dispatch]);

	function completeGame(maxNumber: number, range: number) {
		if (gameNumber.length === maxNumber) {
			clearGame();
			return dispatch(newBetActions.completeGame({ maxNumber, range }));
		}
		return dispatch(newBetActions.completeGame({ maxNumber, range }));
	}

	function onAddToCart(
		numbersGame: number[],
		price: number,
		type: string,
		color: string,
		maxNumber: number,
		gameId: number,
	) {
		if (numbersGame.length !== maxNumber) {
			toast.error("Selecione a quantidade de números necessários do jogo");
			return;
		}

		dispatch(
			cartActions.receiveGame({ numbersGame, price, type, color, gameId }),
		);
		clearGame();
	}

	const handleGameSelect = useCallback(
		(gameId: number) => {
			clearGame();

			const selectedGame = items.find((item) => item.id === gameId);

			if (!selectedGame) {
				toast.error("Jogo não encontrado");
				return;
			}

			setDescription(selectedGame.description);
			setRange(selectedGame.range);
			setType(selectedGame.type);
			setGameId(selectedGame.id);
			setMaxNumber(selectedGame.max_number);
			setMinCartNumber(selectedGame.min_cart_value);
			setPrice(selectedGame.price);
			setColor(selectedGame.color);
		},
		[items, clearGame],
	);

	function handleSelectButton(
		value: number,
		maxNumber: number,
		price: number,
		gameName: string,
		color: string,
	) {
		dispatch(newBetActions.addToCart({ value, maxNumber, price, gameName }));
	}

	const awaitGame = useCallback(() => {
		if (items.length) handleGameSelect(0);
	}, [items.length, handleGameSelect]);

	useEffect(() => {
		return () => {
			awaitGame();
		};
	}, [awaitGame]);

	return {
		type,
		items,
		handleGameSelect,
		gameNumber,
		color,
		range,
		maxNumber,
		price,
		gameId,
		handleSelectButton,
		description,
		completeGame,
		clearGame,
		onAddToCart,
		isLoading,
	};
}
