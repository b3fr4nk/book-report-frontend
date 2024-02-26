import { configureStore } from "@reduxjs/toolkit";
import reportsSlice from "../features/reports/reportsSlice";
import selectedSlice from "../features/selectedSlice/selectedSlice";
import pageSlice from "../features/page/pageSlice";

export const store = configureStore({
  reducer: {
    reports: reportsSlice,
    selected: selectedSlice,
    page: pageSlice,
  },
});
