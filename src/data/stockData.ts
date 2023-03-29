import { Store } from "../types";

export const data: Store = {
  stock: [
    {
      id: 1,
      name: "fanta",
      price: 200,
      unit: 25,
    },
    {
      id: 2,
      name: "coke",
      price: 250,
      unit: 30,
    },
  ],
  sales: [
    {
      id: 1,
      name: "coke",
      unit: 2,
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
