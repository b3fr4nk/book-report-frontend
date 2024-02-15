import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const passwordsSlice = createSlice({
  name: "isProcessed",
  initialState,
  reducers: {
    changeState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addPassword } = passwordsSlice.actions;
export default passwordsSlice.reducer;
