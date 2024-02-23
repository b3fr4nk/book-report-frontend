import { configureStore } from "@reduxjs/toolkit";
import processedSlice from "../features/processedDate/processedSlice";
import reportsSlice from "../features/reports/reportsSlice";
import selectedSlice from "../features/selectedSlice/selectedSlice";

export const store = configureStore({
  reducer: {
    isProcessed: processedSlice,
    reports: reportsSlice,
    selected: selectedSlice,
  },
});
