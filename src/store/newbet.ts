import { createSlice } from "@reduxjs/toolkit";

type NewBetProps = {
  items: number[];
  price: number;
  type: string;
};

const initialState: NewBetProps = {
  items: [],
  price: 0,
  type: "",
};

export const newBetSlice = createSlice({
  name: 'NewBet',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem: number = action.payload.value;
      const maxNumber: number = action.payload.maxNumber;

      const existingItem = state.items.find((item) => item === newItem);

      if (!existingItem && state.items.length < maxNumber) {
        state.items.push(newItem);
        console.log(state.items.map((element) => element));
      }
    },
    completeGame(action, state) {},
    clearGame(action, state) {},
  },
});

export const newBetActions = newBetSlice.actions;
