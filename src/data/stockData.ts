import { Store } from "../types";

export const data: Store = {
  stock: [
    {
      id: 1,
      name: "fanta",
      price: 200,
      amount: 25,
    },
    {
      id: 2,
      name: "coke",
      price: 250,
      amount: 30,
    },
  ],
  sales: [
    {
      id: 1,
      name: "coke",
      amount: 2,
      price: 400,
      date: "2023-01-23",
    },
  ],
  purchases: [],
  returns: [],
  record: {
    asset: 0,
    liability: 0,
    total: 0,
  },
};
