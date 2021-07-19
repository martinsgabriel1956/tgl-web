import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './auth';
import { newBetSlice } from './newbet';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    newBet: newBetSlice.reducer
  }
});
