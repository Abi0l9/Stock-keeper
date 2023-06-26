import Dashboard from "./components/Dashboard";
import Menu from "./components/Menu";
import Purchases from "./components/Transactions/Purchases";
import Sales from "./components/Transactions/Sales";
import { Routes, Route } from "react-router-dom";
import Stock from "./components/Stock";
import { useEffect } from "react";
import { getAllStocks } from "./reducers/stock";
import { useAppDispatch } from "./hooks";
import { Box } from "@mui/material";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllStocks());
  }, [dispatch]);

  return (
    <div>
      <Menu />
      <Box sx={{ px: 2 }}>
        <Routes>
          <Route path="*" element={<Dashboard />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/stock/:id" element={<Stock />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
