import { createSlice /* PayloadAction */ } from "@reduxjs/toolkit";
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
type Dispatch = <AnyAction>(arg: getStocksPayld) => AnyAction;
// type Ds = <AnyAction>;

export const getAllStocks = () => {
  return async (dispatch: Dispatch) => {
    const stock = await StoreServices.getAll();
    dispatch(getStocks(stock));
  };
};

export default stockSlice.reducer;
