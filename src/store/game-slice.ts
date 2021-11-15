import { createSlice } from '@reduxjs/toolkit';

interface GameProps {
  name: string;
  description: string;
  range: number;
  price: number;
  maxNumber: number;
  color: string;
  selected: boolean;
}

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    minCartValue: 0,
    types: [],
    gameNumbers: 0
  },
  reducers: {
    addGames(state, action) {
      state.minCartValue = action.payload.minCartValue;
      state.types = action.payload.types;
    },
    selectGame(state, action) {
      const selectedGame = action.payload;
      state.types.map((game: GameProps) => {
        if (game.name === selectedGame) {
          state.gameNumbers = game.range;
          return (game.selected = true);
        } else {
          return (game.selected = false);
        }
      });
    },
    cleanGames(state) {
      state.types.map((game: GameProps) => {
        if (game.name === 'Lotofácil') {
          state.gameNumbers = game.range;
          return (game.selected = true);
        } else {
          return (game.selected = false);
        }
      });
    }
  }
});

export const gameActions = gameSlice.actions;

export default gameSlice;
