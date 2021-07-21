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
      console.log(gameNumbers);
      const price: number = action.payload.price;
      console.log(price);
      const name: string = action.payload.type;
      console.log(name);
      const color: string = action.payload.color;
      console.log(color);

      let id = Math.random().toString();
      let date = new Date();
      let dateFormatted = `${date.getDate()} /0 ${date.getMonth() + 1} / ${date.getFullYear()}}`;

      const totalPrice = state.totalPrice += price;
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
    }
  }
});

export const cartActions = cartSlice.actions;
