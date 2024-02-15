import { configureStore } from "@reduxjs/toolkit";
import processedSlice from "../features/processedDate/processedSlice";

export const store = configureStore({
  reducer: {
    isProcessed: processedSlice,
  },
});
