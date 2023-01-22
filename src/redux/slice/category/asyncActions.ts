import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTypeNames = createAsyncThunk<string[], undefined>("categoryes/fetchTypeNames", async (_) => {
  const { data } = await axios.get("https://63a746c37989ad3286edc1b1.mockapi.io/typeNames");
  return data;
});

export const fetchSizes = createAsyncThunk("categoryes/fetchSizes", async () => {
  const { data } = await axios.get(" https://63a746c37989ad3286edc1b1.mockapi.io/sizes");
  return data;
});

export const fetchСategories = createAsyncThunk("categoryes/fetchСategories", async () => {
  const { data } = await axios.get("https://63a746c37989ad3286edc1b1.mockapi.io/category");
  return data;
});
