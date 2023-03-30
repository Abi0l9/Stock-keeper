import React, { useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { Store } from "../types";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useField = (type: string, name: string) => {
  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clearField = () => {
    setValue("");
  };

  return {
    clearField,
    name,
    id: name,
    type,
    value,
    onChange,
  };
};
type Props = Record<"stocks", Store>;

export const useStock = (item: "sales" | "purchases" | "stock") => {
  const sales = useSelector((state: Props) => state.stocks.sales);
  const purchases = useSelector((state: Props) => state.stocks.purchases);
  const stock = useSelector((state: Props) => state.stocks.stock);
  switch (item) {
    case "sales":
      return sales;
    case "purchases":
      return purchases;
    case "stock":
      return stock;
    default:
      throw new Error("invalid parameter passed");
  }
};
