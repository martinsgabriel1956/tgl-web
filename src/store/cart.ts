import { createSlice } from "@reduxjs/toolkit";

type CartGame = {
  cartItem: {
    id: string;
    items: number[];
    price: number;
    type: string;
    color: string;
    date: string;
  }[];
  totalPrice: number;
};

type ActionType = {
  id: string;
  numbersGame: number[];
  price: number;
  type: string;
  color: string;
};

const initialState: CartGame = {
  cartItem: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    receiveGame(state, action) {
      const { numbersGame, price, type, color }: ActionType = action.payload;
      let { cartItem } = state;

      let id = Math.random().toString();
      let date = new Date();
      let dateFormatted = `${date.getDate()} / 0${
        date.getMonth() + 1
      } / ${date.getFullYear()}`;

      state.totalPrice += price;
      const gamesCart = cartItem;

      gamesCart.push({
        id,
        items: numbersGame,
        price,
        type,
        color,
        date: dateFormatted,
      });
    },
    deleteGame(state, action) {
      const { id, price }: ActionType = action.payload;

      state.totalPrice -= price;
      state.cartItem = state.cartItem.filter((item) => item.id !== id);
    },
    clearCart(state) {
      state.totalPrice = 0;
      state.cartItem = [];
    },
  },
});

export const cartActions = cartSlice.actions;
