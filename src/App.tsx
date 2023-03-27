import Dashboard from "./components/Dashboard";
import Menu from "./Menu";
import Purchases from "./components/Purchases";
import Sales from "./components/Sales";
import { Routes, Route, useMatch } from "react-router-dom";
import Stock from "./components/Stock";
import { useEffect, useState } from "react";
import { StockType } from "./types";
import StoreServices from "./services/store";
import { getAllStocks } from "./reducers/stock";
import { useDispatch } from "react-redux";

function App() {
  const [store, setStore] = useState<StockType[]>([]);
  const match = useMatch("/stock/:id");
  const dispatch = useDispatch();

  const selectedStock = match
    ? store.find((s) => s.id === Number(match.params.id))!
    : null;

  useEffect(() => {
    StoreServices.getAll().then((data) => setStore(data.stock));
    dispatch(getAllStocks());
  }, [dispatch]);

  return (
    <div>
      <Menu />
      <Routes>
        <Route path="*" element={<Dashboard />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route
          path="/stock/:id"
          element={<Stock selectedStock={selectedStock} />}
        />
      </Routes>
    </div>
  );
}

export default App;
