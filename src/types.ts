export interface StockType {
  id: number;
  name: string;
  price: number;
  unit: number;
}

interface SalesType extends StockType {
  date: string;
}

export interface PurchasesType extends StockType {
  date: string;
}

export type TransactionType = SalesType | PurchasesType;

export interface Store {
  stock: StockType[];
  sales: SalesType[];
  purchases: PurchasesType[];
  returns?: [];
  record?: {
    asset: 0;
    liability: 0;
    total: 0;
  };
}

export type obj = Record<string, never>;

export type DashboardProps = {
  stocks: StockType[];
};

export type StoreTypes = SalesType[] | PurchasesType[] | StockType[];

export type sort =
  | "oldest"
  | "latest"
  | "unit (high - low)"
  | "unit (low - high)"
  | "price (high - low)"
  | "price (low - high)"
  | "name (a-z)"
  | "name (z-a)";

export type optionsDataType = string[];

export type StatDataType = {
  value: number;
  stock: string;
};

export type StatDataReturnValues = {
  highest: StatDataType;
  totalSales: number;
};
