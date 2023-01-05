import { useDispatch } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import filter from "./slice/filter/slice";
import pizzas from "./slice/pizzas/slice";

export const store = configureStore({
  reducer: { filter, pizzas },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
