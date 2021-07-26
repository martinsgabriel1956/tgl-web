import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

type NewBetProps = {
  items: number[];
  price: number;
  type: string;
};

type ActionTypes = {
  value: number;
  maxNumber: number;
  range: number;
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
      const { value, maxNumber }: ActionTypes = action.payload;
      const { items } = state;

      const gameNumbers = items;

      const existingNumber = gameNumbers.find((item) => item === value);
      const almostAddNumberInCart = gameNumbers.length < maxNumber;

      if (!existingNumber && almostAddNumberInCart) gameNumbers.push(value);
      if (!existingNumber && !almostAddNumberInCart) toast.error("Você já preencheu todos os números desse jogo");
      if (existingNumber) {
        gameNumbers.splice(gameNumbers.indexOf(value), 1);
      }
    },
    completeGame(state, action) {
      const { maxNumber, range }: ActionTypes = action.payload;
      const { items } = state;

      const gameNumbers = items;

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
