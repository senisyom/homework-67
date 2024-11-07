import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};


export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNumber: (state) => {
      state.value += state.value;
    },
    deleteNumber: (state) => {
      state.value -= 1;
    },
    increaseByNumber: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const counterReducer = CounterSlice.reducer;

export const { addNumber, deleteNumber, increaseByNumber } = CounterSlice.actions;
