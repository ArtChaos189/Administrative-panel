import { useDispatch } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import filter from "./slice/filter/slice";
import pizzas from "./slice/pizzas/slice";
import categoryes from "./slice/category/slice";

export const store = configureStore({
  reducer: { filter, pizzas, categoryes },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
