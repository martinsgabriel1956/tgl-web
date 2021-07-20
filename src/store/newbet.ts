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
  name: "NewBet",
  initialState,
  reducers: {
    addToCart(state, action) {},
    completeGame(state, action) {
      const maxNumber: number = action.payload.maxNumber;
      const range: number = action.payload.range;

      while (state.items.length < maxNumber) {
        let newItem = Math.ceil(Math.random() * (range - 1) + 1);
        const match = state.items.find((item) => item === newItem);

        if (!match) {
          state.items.push(newItem);
        }
      }
      
      console.log(state.items.map((element) => element));
    },
    clearGame(state) {
      state.items = [];
      state.price = 0;
      state.type = "";
    },
  },
});

export const newBetActions = newBetSlice.actions;
