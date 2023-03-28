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
  },
});

export const { getStore } = stockSlice.actions;

type getStocksPayld = { payload: any; type: "stock/getStore" };
type Dispatch = <AnyAction>(arg: getStocksPayld) => AnyAction;

export const getAllStocks = () => {
  return async (dispatch: Dispatch) => {
    const stock = await StoreServices.getAll();
    console.log(stock);
    dispatch(getStore(stock));
  };
};

export default stockSlice.reducer;
