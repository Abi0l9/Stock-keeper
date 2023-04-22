import { useState } from "react";
import { sort, StockType, Store } from "../../types";
import { generalSortOptions } from "../../const";
import { stockSorter } from "../../utils";

import { useAppDispatch, useStock } from "../../hooks";
import { updateOneStock } from "../../reducers/stock";

import HeaderStat from "../Statistics/HeaderStat";
import StockList from "../Stock/StockList";

import { Box, Button } from "@mui/material";
import AddStockModal from "../Modals/AddStockModal";

function Dashboard() {
  const stocks = useStock();
  const dispatch = useAppDispatch();
  const [modalState, setModalState] = useState(false);

  const [selectedValue, setSelectedValue] = useState<sort>("name (a-z)");
  const sortedData = stockSorter(stocks.stock, selectedValue);

  const handleFieldSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value as sort);
  };

  const handleSingleTransaction = (item: StockType, type: "sell" | "buy") => {
    const stock = stocks.stock.map((s) => {
      if (s.id === item.id) {
        let unit = s.unit;
        if (type === "sell") {
          unit--;
        } else if (type === "buy") {
          unit++;
        }

        if (unit < 1) {
          unit = 0;
        } else if (type === "buy" && unit === 0) {
          unit++;
        }
        const dataToReturn = { ...s, unit };
        return dataToReturn;
      }
      return s;
    });

    const data = stocks.stock.find((s) => s.id === item.id)!;

    if (type === "buy") {
      let newStore: Store = {
        ...stocks,
        stock,
        purchases: [
          ...stocks.purchases,
          {
            ...data,
            unit: 1,
            date: String(new Date().toLocaleString()),
          },
        ],
      };
      dispatch(updateOneStock(newStore));
    } else if (type === "sell") {
      let newStore: Store = {
        ...stocks,
        stock,
        sales: [
          ...stocks.sales,
          {
            ...data,
            unit: 1,
            date: String(new Date().toLocaleString()),
          },
        ],
      };
      if (data.unit > 0) {
        dispatch(updateOneStock(newStore));
      }
    }
  };

  return (
    <div>
      <div>{stocks.sales?.length ? <HeaderStat /> : "No sales yet"}</div>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Stock Lists</h2>
        <Button onClick={() => setModalState(!modalState)}>New Stock</Button>
      </Box>
      <div>
        <form>
          <span>Sort: </span>
          <select name="sort" title="sort" onChange={handleFieldSelectChange}>
            {generalSortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </form>
      </div>
      <StockList
        sortedData={sortedData}
        handleSingleTransaction={handleSingleTransaction}
      />
      <Box>
        <AddStockModal modalState={modalState} setModalState={setModalState} />
      </Box>
    </div>
  );
}

export default Dashboard;
