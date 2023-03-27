export interface StockType {
  id: number;
  name: string;
  price: number;
  amount: number;
}

interface Sales extends StockType {
  date: string;
}

export interface Store {
  stock: StockType[];
  sales: Sales[];
  purchases?: [];
  returns?: [];
  record?: {
    asset: 0;
    liability: 0;
    total: 0;
  };
}

export type obj = Record<string, never>;
// export type MainStore = Pick<Store, stock>
