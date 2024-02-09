import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IInitialState {
  age: number;
  name: string;
}

const initialState: IInitialState = {
  age: 0,
  name: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    updateFilter: (
      state: IInitialState,
      action: PayloadAction<Partial<IInitialState>>,
    ) => ({
      ...state,
      ...action.payload,
    }),
    resetFilter: () => ({
      ...initialState,
    }),
  },
});

export const { updateFilter, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;
