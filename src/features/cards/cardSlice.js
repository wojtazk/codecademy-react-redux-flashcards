import { createSlice } from '@reduxjs/toolkit';

export const selectCards = (state) => state.cards.cards;

const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: {},
  },

  reducers: {
    addCard: (state, action) => {
      // action.payload -> { id: '123', front: 'front of card', back: 'back of card'}
      state.cards[action.payload.id] = action.payload;
    },
  },
});

export { cardSlice };
export const cardsReducer = cardSlice.reducer;
export const { addCard } = cardSlice.actions;
