import {
  TransactionType,
  StatDataReturnValues,
  sort,
  StockType,
  Store,
  StoreTypes,
} from "./types";

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

export const timeSplitter = (date: string) => {
  return dateParser(date).split(" ").slice(1).join(" ");
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

export const salesStatGetter = (
  arr: TransactionType[]
): StatDataReturnValues => {
  if (arr) {
    const stats = arr
      .map((sale) => sale.name)
      .reduce((obj: Record<string, any>, item): Record<string, number> => {
        obj[item] = obj[item] ? (obj[item] += 1) : 1;
        return obj;
      }, {});

    const data = Object.values(stats).sort((a, b) => Number(a) - Number(b));

    // const lowest = data.at(0);
    // const [lowestStock] = Object.entries(stats).filter(
    //   (i) => i.at(1) === lowest
    // )[0];

    const highest = data.at(-1);
    const [highestStock] = Object.entries(stats).filter(
      (i) => i.at(1) === highest
    )[0];

    const highestValue = arr
      .filter((d) => d.name === highestStock)
      .map((s) => s.unit)
      .reduce((a, b) => a + b, 0);

    // const lowestValue = arr
    //   .filter((d) => d.name === lowestStock)
    //   .map((s) => s.unit)
    //   .reduce((a, b) => a + b, 0);

    const totalSales = arr.map((sale) => sale.price).reduce((a, b) => a + b, 0);

    return {
      highest: {
        stock: highestStock,
        value: highestValue,
      },

      totalSales,
    };
  }
  return {
    highest: {
      stock: "",
      value: 0,
    },
    totalSales: 0,
  };
};

export const stockStatGetter = (arr: StoreTypes) => {
  if (arr) {
    const assets = arr
      .map((stock) => stock.price * stock.unit)
      .reduce((a, b) => a + b, 0);
    return assets;
  } else return 0;
};

export const lastAddedProduct = (transaction: StoreTypes): StockType => {
  return transaction.at(-1)!;
};

export const groupTransactionsByDate = (transactions: TransactionType[]) => {
  const objToReturn: Record<string, TransactionType[]> = {};

  if (transactions)
    transactions.forEach((transaction) => {
      const date = dateSplitter(transaction.date);

      if (objToReturn[date]) {
        //if date exists as a key, with an array as value, push transaction
        objToReturn[date].push(transaction);
      } else {
        //else, create an array, first.
        objToReturn[date] = [];
        objToReturn[date].push(transaction);
      }
    });

  const mapToKVpairs = Object.entries(objToReturn).map(([key, values]) => {
    return {
      [key]: values,
    };
  });

  return mapToKVpairs;
};
