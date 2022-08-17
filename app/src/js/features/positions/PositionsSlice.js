import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const positionsAdapter = createEntityAdapter();
const initialState = positionsAdapter.getInitialState({
  filtered: [],
});
const positionSlice = createSlice({
  name: 'positions',
  initialState,
  reducers: {
    addedPositions: positionsAdapter.addMany,
    addedFilteredPositions: (state, { payload }) => {
      if (!state.filtered.includes(payload)) {
        state.filtered = [...state.filtered, payload];
      }
    },
    clearedFilteredPositions: (state) => {
      state.filtered = [];
    },
    removedItemFilteredPositions: (state, { payload }) => {
      state.filtered = state.filtered.filter((item) => item !== payload);
    },
  },
});

export const {
  selectAll: selectAllPositions,
  selectById: selectPositionById,
  selectIds: selectPositionsIds,
} = positionsAdapter.getSelectors((state) => state.positions);

export const { addedPositions, addedFilteredPositions, clearedFilteredPositions, removedItemFilteredPositions } =
  positionSlice.actions;

export default positionSlice.reducer;
