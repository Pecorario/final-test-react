import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    minCartValue: 0,
    types: []
  },
  reducers: {
    addGames(state, action) {
      state.minCartValue = action.payload.minCartValue;
      state.types = action.payload.types;
    }
  }
});

export const gameActions = gameSlice.actions;

export default gameSlice;
