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
    active: {
      name: '',
      description: '',
      range: 0,
      price: 0,
      maxNumber: 0,
      color: ''
    },
    selectedNumbers: [0],
    totalPrice: 0,
    games: [{ name: '', color: '', price: 0, numbers: [0], date: '' }]
  },
  reducers: {
    addGames(state, action) {
      state.minCartValue = action.payload.minCartValue;
      state.types = action.payload.types;
    },
    selectGame(state, action) {
      const selectedGame = action.payload;
      state.selectedNumbers = [];
      state.types.map((game: GameProps) => {
        if (game.name === selectedGame) {
          state.active = {
            name: game.name,
            description: game.description,
            range: game.range,
            price: game.price,
            maxNumber: game.maxNumber,
            color: game.color
          };
          return (game.selected = true);
        } else {
          return (game.selected = false);
        }
      });
    },
    resetGameDefault(state) {
      state.selectedNumbers = [];
      state.types.map((game: GameProps) => {
        if (game.name === 'Lotofácil') {
          state.active = {
            name: game.name,
            description: game.description,
            range: game.range,
            price: game.price,
            maxNumber: game.maxNumber,
            color: game.color
          };
          return (game.selected = true);
        } else {
          return (game.selected = false);
        }
      });
    },
    addNumber(state, action) {
      const newNumber = +action.payload;
      let auxNumbers = [...state.selectedNumbers];

      if (state.selectedNumbers.includes(0)) {
        state.selectedNumbers = [];
      }

      const isThisNumberAlreadyOnArray =
        state.selectedNumbers.includes(newNumber);

      const isThisGameAlreadyFullOnArray = () => {
        return state.selectedNumbers.length === state.active.maxNumber;
      };

      if (isThisNumberAlreadyOnArray) {
        const index = state.selectedNumbers.indexOf(newNumber);
        auxNumbers.splice(index, 1);
        state.selectedNumbers = auxNumbers;
      } else if (
        !isThisNumberAlreadyOnArray &&
        !isThisGameAlreadyFullOnArray()
      ) {
        auxNumbers = [...state.selectedNumbers, newNumber];
        state.selectedNumbers = auxNumbers;
      } else {
        alert(
          'Você já escolheu a quantidade máxima de números. Limpe o jogo ou adicione ao carrinho.'
        );
      }
    },
    clearGame(state) {
      state.selectedNumbers = [];
    },
    completeGame(state) {
      const missingNumbers =
        state.active.maxNumber - state.selectedNumbers.length;

      for (let i = 0; i < missingNumbers; i++) {
        let randomNumber = Math.round(
          Math.random() * (state.active.range - 1) + 1
        );

        while (state.selectedNumbers.includes(randomNumber)) {
          randomNumber = Math.round(
            Math.random() * (state.active.range - 1) + 1
          );
        }

        state.selectedNumbers.push(+randomNumber);
      }
    },
    addGameToCart(state) {
      const day = new Date().toLocaleString('pt-BR', { day: '2-digit' });
      const month = new Date().toLocaleString('pt-BR', { month: 'long' });
      const year = new Date().getFullYear();

      const game = {
        name: state.active.name,
        color: state.active.color,
        price: state.active.price,
        numbers: state.selectedNumbers,
        date: `${day}/${month}/${year}`
      };

      state.totalPrice = state.totalPrice + state.active.price;
      state.games.push(game);
    }
  }
});

export const gameActions = gameSlice.actions;

export default gameSlice;
