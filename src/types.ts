interface Stock {
  id: number;
  name: string;
  price: number;
  amount: number;
}

interface Sales extends Stock {
  date: string;
}

export interface Store {
  stock: Stock[];
  sales: Sales[];
  purchases?: [];
  returns?: [];
  record?: {
    asset: 0;
    liability: 0;
    total: 0;
  };
}
