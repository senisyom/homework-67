import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

export interface INumbers {
  values: string
}

interface CounterState extends INumbers {
  currentValue: string;
}

const initialState: CounterState = {
  values: '',
  currentValue: '',
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    pickOneNumber: (state, action: PayloadAction<string>) => {
      if (state.currentValue.length < 4) {
        state.currentValue += action.payload;
      }
    },

    deleteOneNumber: (state) => {
      state.currentValue = state.currentValue.slice(0, -1);
    },
  },
});

export const counterReducer = CounterSlice.reducer;
export const { pickOneNumber, deleteOneNumber } = CounterSlice.actions;
