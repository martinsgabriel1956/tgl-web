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
    addToCart(state, action) {
      const newNumber: number = action.payload.value;
      const maxNumber: number = action.payload.maxNumber;
      const gameNumbers = state.items;

      const existingNumber = gameNumbers.find(item => item === newNumber);
      const almostAddNumberInCart = gameNumbers.length < maxNumber

      if(!existingNumber && almostAddNumberInCart) gameNumbers.push(newNumber);
      if(existingNumber) gameNumbers.splice(gameNumbers.indexOf(newNumber), 1);
      
    },
    completeGame(state, action) {
      const gameNumbers = state.items;

      const maxNumber: number = action.payload.maxNumber;
      const range: number = action.payload.range;

      while (gameNumbers.length < maxNumber) {
        let newItem = Math.ceil(Math.random() * range + 1);

        const matchNumber = gameNumbers.find((item) => item === newItem);

        if (!matchNumber) gameNumbers.push(newItem);
      }
    },
    clearGame(state) {
      state.items = [];
      state.price = 0;
      state.type = "";
    },
  },
});

export const newBetActions = newBetSlice.actions;
