import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../containers/PasswordLock/PasswordSlice";
import { calculateReducer } from "../containers/Calculator/CalculatorSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    calculator: calculateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
