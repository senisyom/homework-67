import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface INumbers {
  values: string;
  result: string | null;
}

export const initialState: INumbers = {
  values: "",
  result: null,
};

export const CounterSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    deleteOneNumber: (state) => {
      state.values = state.values.slice(0, -1);
    },
    clearScreen: (state) => {
      state.values = "";
    },

    calculate: (state) => {
      state.result = eval(state.values.toString());
    },
    addToValues: (state, action: PayloadAction<string>) => {
      state.values += action.payload;
    },
  },
});

export const calculateReducer = CounterSlice.reducer;
export const { deleteOneNumber, calculate, addToValues, clearScreen } =
  CounterSlice.actions;
