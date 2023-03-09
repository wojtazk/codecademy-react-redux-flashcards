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

    addQuizId: (state, action) => {
      // action.payload -> {quizId: '123', topicId: '456'}
      state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
    },
  },
});

export { selectTopics };
export const topicsReducer = topicsSlice.reducer;
export const { addTopic, addQuizId } = topicsSlice.actions;
