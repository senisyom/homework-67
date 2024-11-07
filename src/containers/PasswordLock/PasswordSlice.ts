import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface INumbers {
  values: string;
}

interface CounterState extends INumbers {
  currentValue: string;
}

const correctPassword = "1337";

const initialState: CounterState = {
  values: "",
  currentValue: "",
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

    giveAccess: (state) => {
      if (state.currentValue === correctPassword) {
        state.currentValue = "Access granted";
      } else {
        state.currentValue = "Access denied";
      }
    },
    clearScreen: (state) => {
      if (
        state.currentValue === "Access granted" ||
        state.currentValue === "Access denied"
      ) {
        state.currentValue = "";
      }
    },
  },
});

export const counterReducer = CounterSlice.reducer;
export const { pickOneNumber, deleteOneNumber, giveAccess, clearScreen } =
  CounterSlice.actions;
