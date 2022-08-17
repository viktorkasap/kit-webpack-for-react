import { configureStore } from '@reduxjs/toolkit';

import positionsReducer from './features/positions/PositionsSlice';

export const store = configureStore({
  reducer: {
    positions: positionsReducer,
  },
});
