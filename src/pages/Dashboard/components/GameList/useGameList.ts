import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { betService } from "../../../../services/betService";
import { GameService } from "../../../../services/gameService";
import { gamesActions } from "../../../../store/games";

type RootState = {
	games: {
		cartItem: unknown[];
		cartItemFiltered: Game[];
	};
};

export type Bet = {
	id: number;
	color: string;
	description: string;
	max_number: number;
	min_cart_value: number;
	price: number;
	range: number;
	type: string;
};

type Game = {
	id: number;
	date_string: string;
	game_id: number;
	numbers: string;
	total_price: number;
	games: Bet;
};

export function useGameList() {
	const [items, setItems] = useState<Bet[]>([]);
	const [games, setGames] = useState([]);
	const [gamesId, setGamesId] = useState(null);
	const [meta, setMeta] = useState({ current_page: 1, last_page: 1 });
	const [buttonActive, setButtonActive] = useState("");
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();

	const getGameResponse = useCallback(async () => {
		try {
			setIsLoading(true);
			const games = await GameService.getGames({});
			setItems(games);
		} catch (error) {
			toast("Erro ao carregar os jogos!");
		} finally {
			setIsLoading(false);
		}
	}, []);

	const getBetResponse = useCallback(async () => {
		try {
			setIsLoading(true);
			const bets = await betService.getBets({ page });
			setMeta(bets.meta);
			setGames(bets.data);
		} catch (error) {
			toast("Erro ao carregar as bets!");
		} finally {
			setIsLoading(false);
		}
	}, [page]);

	const filteredGames = useCallback(async () => {
		try {
			setIsLoading(true);
			const games = await GameService.filteredGames({
				gamesId: gamesId ?? undefined,
				page,
			});
			setMeta(games.meta);
			setGamesId(games.data.id);
		} catch (error) {
			toast("Erro ao carregar as bets!");
		} finally {
			setIsLoading(false);
		}
	}, [gamesId, page]);
	useEffect(() => {
		getGameResponse();
		getBetResponse();
		filteredGames();
	}, [getGameResponse, getBetResponse, filteredGames]);

	const gameNumbers = useSelector((state: RootState) => state.games.cartItem);

	const cartGameFiltered = useSelector(
		(state: RootState) => state.games.cartItemFiltered,
	);

	function filterGames(gameType: string, games: Game[]) {
		setButtonActive(gameType);
		dispatch(gamesActions.filterGameCart({ gameType, games }));
	}

	function nextPage() {
		if (meta.current_page !== meta.last_page) setPage((prev) => prev + 1);
	}

	function prevPage() {
		if (page > 1) setPage((prev) => prev - 1);
	}

	return {
		items,
		gameNumbers,
		games,
		cartGameFiltered,
		meta,
		prevPage,
		nextPage,
		buttonActive,
		filterGames,
		isLoading,
	};
}
