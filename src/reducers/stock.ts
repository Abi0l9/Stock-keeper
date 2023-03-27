import { createSlice } from "@reduxjs/toolkit";
import StoreServices from "../services/store";
import { Store } from "../types";

type A = Record<string, Store>;

const stockSlice = createSlice({
  name: "stock",
  initialState: {},
  reducers: {
    getStocks(state: A, action) {
      state = action.payload;
      return state.stock;
    },
  },
});

export const { getStocks } = stockSlice.actions;

type getStocksPayld = { payload: any; type: "stock/getStocks" };
type DispatchGetAll = (arg: getStocksPayld) => void;

export const getAllStocks = () => {
  return async (dispatch: DispatchGetAll) => {
    const stock = await StoreServices.getAll();
    dispatch(getStocks(stock));
  };
};

export default stockSlice.reducer;
