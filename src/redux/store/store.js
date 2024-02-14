import { configureStore } from "@reduxjs/toolkit";
import clickActionReducer from "../stateSlice/clickActionSlice";
const store = configureStore({
  reducer: {
    clickAction: clickActionReducer,
  },
});

export default store;
