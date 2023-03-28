import { createSlice /* PayloadAction */ } from "@reduxjs/toolkit";
import StoreServices from "../services/store";
import { Store } from "../types";

type stateType = Record<string, Store>;

const stockSlice = createSlice({
  name: "stock",
  initialState: {},
  reducers: {
    getStore(state: stateType, action) {
      state = action.payload;
      return state;
    },
    addOne(state: stateType, action) {
      state = action.payload;
      return state;
    },
    updateStock(state: stateType, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { getStore, addOne, updateStock } = stockSlice.actions;

type getAllStocksPayld = { payload: any; type: "stock/getStore" };
type getAllStockDispatch = <AnyAction>(arg: getAllStocksPayld) => AnyAction;

type addOneStockPayld = { payload: any; type: "stock/addOne" };
type addOneStockDispatch = <AnyAction>(arg: addOneStockPayld) => AnyAction;

type updateStockPayld = { payload: any; type: "stock/updateStock" };
type updateStockDispatch = <AnyAction>(arg: updateStockPayld) => AnyAction;

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

export const updateOneStock = (store: Store) => {
  return async (dispatch: updateStockDispatch) => {
    const stock = await StoreServices.updateStock(store);
    dispatch(updateStock(stock));
  };
};

export default stockSlice.reducer;
