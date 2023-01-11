import { RootState } from "../../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Names = {
  index: number;
  prev: number[];
  _index: number;
};

interface CategorySliceState {
  categories: string[];
  cateIndex: number;
  typeNames: string[];
  typeIndex: number[];
  sizes: number[];
}

const initialState: CategorySliceState = {
  categories: [],
  cateIndex: -1,
  typeNames: [],
  typeIndex: [],
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
      state.cateIndex = action.payload;
    },
    setTypeNames: (state, action: PayloadAction<string[]>) => {
      state.typeNames = action.payload;
    },
    setSizes: (state, action: PayloadAction<number[]>) => {
      state.sizes = action.payload;
    },
    setOnClickType: (state, action: PayloadAction<Names>) => {},
  },
});

export const selectCategory = (state: RootState) => state.categoryes;
export const { setCategoryes, setActiveCategoryes, setTypeNames, setSizes } = categorySlice.actions;

export default categorySlice.reducer;
