import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './auth';
import { cartSlice } from './cart';
import { newBetSlice } from './newbet';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    newBet: newBetSlice.reducer,
    cart: cartSlice.reducer
  }
});
