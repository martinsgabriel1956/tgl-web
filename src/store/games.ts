import { createSlice } from "@reduxjs/toolkit";

type ItemsType = {
  cartItem: {}[],
  cartItemFiltered: {}[]
}

const initialState: ItemsType = {
  cartItem: [],
  cartItemFiltered: []
}

export const gamesSlice = createSlice({
  name: 'Games',
  initialState,
  reducers: {
    gamesDataFromCart(state, action) {
      const game: {}[] = action.payload.game;

      state.cartItem.push({ game });
    },
  }
})

export const gamesActions = gamesSlice.actions;