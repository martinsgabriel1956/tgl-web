import { createSlice } from "@reduxjs/toolkit";

type ItemsType = {
  cartItem: {}[];
  cartItemFiltered: {}[];
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
      const game: {}[] = action.payload.game;

      state.cartItem.push({ game });
    },
    filterGameCart(state, action) {
      const gameType: string = action.payload.gameType;

      console.log(gameType);
      console.log(state.cartItem);

      state.cartItemFiltered = state.cartItem.map((item: any) =>
        item.game.filter((gameSelected: any) => gameSelected.type === gameType)
      );
    },
  },
});

export const gamesActions = gamesSlice.actions;
