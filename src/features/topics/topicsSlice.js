import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topics: {},
};

const selectTopics = (state) => state.topics.topics;

const topicsSlice = createSlice({
  name: 'topics',
  initialState,

  reducers: {
    addTopic: (state, action) => {
      state.topics[action.payload.id] = { ...action.payload, quizIds: [] };
    },
  },
});

export { selectTopics };
export const topicsReducer = topicsSlice.reducer;
export const { addTopic } = topicsSlice.actions;
