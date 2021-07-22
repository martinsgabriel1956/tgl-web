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

const initialState: CartGame = {
  cartItem: [],
  totalPrice: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    receiveGame(state, action) {
      const gameNumbers: number[] = action.payload.numbersGame;
      const price: number = action.payload.price;
      const name: string = action.payload.type;
      const color: string = action.payload.color;

      let id = Math.random().toString();
      let date = new Date();
      let dateFormatted = `${date.getDate()} / 0${date.getMonth() +1} / ${date.getFullYear()}`;

      state.totalPrice += price;
      const gamesCart = state.cartItem;

      gamesCart.push({
        id,
        items: gameNumbers,
        price,
        type: name,
        color,
        date: dateFormatted,
      });
    },
    deleteGame(state, action) {
      const id = action.payload.id;
      const price = action.payload.price;

      state.totalPrice -= price;

      state.cartItem = state.cartItem.filter(item => item.id !== id)
    },
    clearCart(state) {
      state.totalPrice = 0;
      state.cartItem = [];
    }
  }
});

export const cartActions = cartSlice.actions;
