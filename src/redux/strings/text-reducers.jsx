import { createSlice } from "@reduxjs/toolkit";

const initialText = {
  isText: [],
  isLoading: false,
  error: null,
};

const { actions, reducer } = createSlice({
  name: "text",
  initialState: initialText,
  reducers: {
    queryTextRequest: (state) => {
      state.isLoading = true;
    },
    queryTextSuccess: (state, { payload }) => {
      state.isText = payload;
      state.isLoading = false;
    },
    queryTextError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export { actions, reducer };
