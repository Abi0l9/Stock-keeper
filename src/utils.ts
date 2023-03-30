import { TransactionType, sort, StockType, Store } from "./types";

export type UnitCompare = [number, number];

export const generateId = () => Math.floor(Math.random() * 5000);

export const dateParser = (date: string) => {
  return !isNaN(Number(date))
    ? new Date(Number(date)).toLocaleString()
    : new Date(date).toLocaleString();
};

export const dateSplitter = (date: string) => {
  return dateParser(date).split(" ")[0].replace(",", "");
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
  } //this handles price change
  else
    return {
      ...stocks,
      stock,
    };
};

export const sorter = (
  arr: TransactionType[],
  type: sort = "latest"
): TransactionType[] => {
  if (arr) {
    switch (type) {
      case "name (a-z)":
        return [...arr].sort((a, b) => a.name.localeCompare(b.name));
      case "name (z-a)":
        return [...arr].sort((a, b) => b.name.localeCompare(a.name));
      case "latest":
        return [...arr].sort(
          (a, b): number => Date.parse(b.date) - Date.parse(a.date)
        );
      case "oldest":
        return [...arr].sort(
          (a, b): number => Date.parse(a.date) - Date.parse(b.date)
        );
      case "price (low - high)":
        return [...arr].sort((a, b): number => a.price - b.price);
      case "price (high - low)":
        return [...arr].sort((a, b): number => b.price - a.price);
      case "unit (high - low)":
        return [...arr].sort((a, b): number => b.unit - a.unit);
      case "unit (low - high)":
        return [...arr].sort((a, b): number => a.unit - b.unit);
      default:
        return arr;
    }
  }
  return arr;
};

export const stockSorter = (
  arr: StockType[],
  type: sort = "name (a-z)"
): StockType[] => {
  if (arr) {
    switch (type) {
      case "name (a-z)":
        return [...arr].sort((a, b) => a.name.localeCompare(b.name));
      case "name (z-a)":
        return [...arr].sort((a, b) => b.name.localeCompare(a.name));
      // case "price (low - high)":
      //   return [...arr].sort((a, b): number => a.price - b.price);
      // case "price (high - low)":
      //   return [...arr].sort((a, b): number => b.price - a.price);
      case "unit (high - low)":
        return [...arr].sort((a, b): number => b.unit - a.unit);
      case "unit (low - high)":
        return [...arr].sort((a, b): number => a.unit - b.unit);
      default:
        return arr;
    }
  }
  return arr;
};
