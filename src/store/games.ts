import { createSlice } from "@reduxjs/toolkit";
import { betService } from "../services/betService";

type Bet = {
	id: string;
	date_string: string;
	color: string;
	game_id: number;
	numbers: string;
	total_price: number;
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

type ItemsType = {
	cartItem: unknown[];
	cartItemFiltered: Game[];
};

type ActionType = {
	game: Bet[];
	gameType?: string;
};

const initialState: ItemsType = {
	cartItem: [],
	cartItemFiltered: [],
};

export const gamesSlice = createSlice({
	name: "Games",
	initialState,
	reducers: {
		gamesDataFromCart(state, action) {
			const { game }: ActionType = action.payload;
			betService.createBet({ body: { bets: game } });
			state.cartItem.push({ game });
		},
		filterGameCart(state, action) {
			const { gameType }: ActionType = action.payload;
			const gamesFiltered: Game[] = action.payload.games;

			state.cartItemFiltered = gamesFiltered.filter(
				(games) => games.games.type === gameType,
			);
		},
	},
});

export const gamesActions = gamesSlice.actions;
