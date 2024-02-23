import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const isProcessedSlice = createSlice({
  name: "isProcessed",
  initialState,
  reducers: {
    updateReports: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateReports } = isProcessedSlice.actions;
export default isProcessedSlice.reducer;
