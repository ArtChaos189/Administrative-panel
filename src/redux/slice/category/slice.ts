import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "redux/store";

import { fetchSizes, fetchTypeNames, fetchСategories } from "./asyncActions";

import { CategorySliceState, Status } from "./type";

const initialState: CategorySliceState = {
  categories: [],
  сategoryIndex: -1,
  typeNames: [],
  activeType: [],
  sizes: [],
  status: Status.LOADING, // loading | success | error
};

export const categorySlice = createSlice({
  name: "categoryes",
  initialState,
  reducers: {
    setActiveCategoryes: (state, action: PayloadAction<number>) => {
      state.сategoryIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTypeNames.pending, (state) => {
      state.status = Status.LOADING;
      state.typeNames = [];
    });
    builder.addCase(fetchTypeNames.fulfilled, (state, action) => {
      state.typeNames = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchTypeNames.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.typeNames = [];
    });
    builder.addCase(fetchSizes.pending, (state, action) => {
      state.status = Status.LOADING;
      state.sizes = [];
    });
    builder.addCase(fetchSizes.fulfilled, (state, action) => {
      state.sizes = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchSizes.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.sizes = [];
    });
    builder.addCase(fetchСategories.pending, (state, action) => {
      state.status = Status.LOADING;
      state.categories = [];
    });
    builder.addCase(fetchСategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchСategories.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.categories = [];
    });
  },
});

export const selectCategory = (state: RootState) => state.categoryes;

export const { setActiveCategoryes } = categorySlice.actions;

export default categorySlice.reducer;
