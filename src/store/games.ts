import { createSlice } from "@reduxjs/toolkit";
import { api } from "../services/api";

type ItemsType = {
  cartItem: {}[];
  cartItemFiltered: {}[];
};

type ActionType = {
  game: {}[];
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
      const { cartItem } = state;

      api.post(
        "/bets",
        {
          bets: game,
        },
        {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      cartItem.push({ game });
    },
    filterGameCart(state, action) {
      const { gameType }: ActionType = action.payload;

      state.cartItemFiltered = state.cartItem.map((item: any) =>
        item.game.filter((gameSelected: any) => gameSelected.type === gameType)
      );
    },
  },
});

export const gamesActions = gamesSlice.actions;
