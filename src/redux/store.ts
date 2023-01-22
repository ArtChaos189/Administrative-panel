import { useDispatch } from "react-redux";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import filter from "./slice/filter/slice";

import pizzas from "./slice/pizzas/slice";

import categoryes from "./slice/category/slice";

const rootReducer = combineReducers({
  filter: filter,
  pizzas: pizzas,
  categoryes: categoryes,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
