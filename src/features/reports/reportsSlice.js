import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const reportsSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    updateReports: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateReports } = reportsSlice.actions;
export default reportsSlice.reducer;
