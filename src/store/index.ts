import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './auth';
import { newBetSlice } from './newbet';
import { cartSlice } from './cart';
import { gamesSlice } from './games';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    newBet: newBetSlice.reducer,
    cart: cartSlice.reducer,
    games: gamesSlice.reducer
  }
});
