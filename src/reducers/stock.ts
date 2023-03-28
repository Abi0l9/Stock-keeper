import { createSlice /* PayloadAction */ } from "@reduxjs/toolkit";
import StoreServices from "../services/store";
import { Store } from "../types";

type A = Record<string, Store>;

const stockSlice = createSlice({
  name: "stock",
  initialState: {},
  reducers: {
    getStore(state: A, action) {
      state = action.payload;
      return state;
    },
    addOne(state: A, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { getStore, addOne } = stockSlice.actions;

type getAllStocksPayld = { payload: any; type: "stock/getStore" };
type getAllStockDispatch = <AnyAction>(arg: getAllStocksPayld) => AnyAction;

type addOneStockPayld = { payload: any; type: "stock/addOne" };
type addOneStockDispatch = <AnyAction>(arg: addOneStockPayld) => AnyAction;

export const getAllStocks = () => {
  return async (dispatch: getAllStockDispatch) => {
    const stock = await StoreServices.getAll();
    dispatch(getStore(stock));
  };
};

export const addOneStock = (store: Store) => {
  return async (dispatch: addOneStockDispatch) => {
    const stock = await StoreServices.addStock(store);
    dispatch(addOne(stock));
  };
};

export default stockSlice.reducer;
