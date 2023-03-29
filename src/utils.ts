import { TransactionType, StockType, Store } from "./types";

export type UnitCompare = [number, number];

export const generateId = () => Math.floor(Math.random() * 5000);

export const dateParser = (date: string) => {
  return !isNaN(Number(date))
    ? new Date(Number(date)).toLocaleString()
    : new Date(date).toLocaleString();
};

export const handleBulkUpdate = (
  stocks: Store,
  item: StockType,
  transactionData: TransactionType,
  units: UnitCompare
) => {
  const [oldUnit, newUnit] = units;

  //handle updated data
  const stock = stocks.stock.map((s) => {
    if (s.id === item.id) {
      return item;
    }
    return s;
  });

  //append to purchases/sales list
  if (oldUnit < newUnit) {
    return {
      ...stocks,
      stock,
      purchases: [
        ...stocks.purchases,
        { ...transactionData, unit: newUnit - oldUnit },
      ],
    };
  } else if (oldUnit > newUnit) {
    return {
      ...stocks,
      stock,
      sales: [...stocks.sales, { ...transactionData, unit: oldUnit - newUnit }],
    };
  } else
    return {
      ...stocks,
      stock,
    };
};
