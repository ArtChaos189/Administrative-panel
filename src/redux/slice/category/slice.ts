import { RootState } from "../../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategorySliceState {
  categories: string[];
  сategoryIndex: number;
  typeNames: string[];
  activeType: number[];
  sizes: number[];
  pizzaId: string | undefined;
}

const initialState: CategorySliceState = {
  categories: [],
  сategoryIndex: -1,
  typeNames: [],
  activeType: [],
  sizes: [],
  pizzaId: "",
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
    setPizzaId: (state, action: PayloadAction<string | undefined>) => {
      state.pizzaId = action.payload;
    },
  },
});

export const selectCategory = (state: RootState) => state.categoryes;
export const { setCategoryes, setActiveCategoryes, setTypeNames, setSizes, setPizzaId } = categorySlice.actions;

export default categorySlice.reducer;