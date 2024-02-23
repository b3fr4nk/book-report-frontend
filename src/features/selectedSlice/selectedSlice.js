import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const selectedSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSelected } = selectedSlice.actions;
export default selectedSlice.reducer;
