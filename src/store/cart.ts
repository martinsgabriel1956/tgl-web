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
    receiveGame(state, action) {},
    deleteGame(state, action) {}
  }
});

export const cartActions = cartSlice.actions;
