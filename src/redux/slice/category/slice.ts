import { RootState } from "../../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CategorySliceState = {
  categories: string[];
  сategoryIndex: number;
  typeNames: string[];
  activeType: number[];
  sizes: number[];
};

const initialState: CategorySliceState = {
  categories: [],
  сategoryIndex: -1,
  typeNames: [],
  activeType: [],
  sizes: [],
};

export const categorySlice = createSlice({
  name: "categoryes",
  initialState,
  reducers: {
    setCategoryes: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    setActiveCategoryes: (state, action: PayloadAction<number>) => {
      state.сategoryIndex = action.payload;
    },
    setTypeNames: (state, action: PayloadAction<string[]>) => {
      state.typeNames = action.payload;
    },
    setSizes: (state, action: PayloadAction<number[]>) => {
      state.sizes = action.payload;
    },
  },
});

export const selectCategory = (state: RootState) => state.categoryes;
export const { setCategoryes, setActiveCategoryes, setTypeNames, setSizes } = categorySlice.actions;

export default categorySlice.reducer;
