import { StockType, Store } from "../../types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AddStockForm from "../Stock/AddStockForm";
import { useAppDispatch } from "../../hooks";
import { updateOneStock } from "../../reducers/stock";

type Props = Record<"stocks", Store>;

function Dashboard() {
  const stocks = useSelector((state: Props) => state.stocks);
  const dispatch = useAppDispatch();

  const handlePurchases = (item: StockType, type: "sell" | "buy") => {
    const stock = stocks.stock.map((s) => {
      if (s.id === item.id) {
        let amount = s.amount;
        if (type === "sell") {
          amount--;
        } else if (type === "buy") {
          amount++;
        }

        if (amount < 1) {
          amount = 0;
        } else if (type === "buy" && amount === 0) {
          amount++;
        }
        const dataToReturn = { ...s, amount };
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
            amount: 1,
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
            amount: 1,
            date: String(new Date().toLocaleString()),
          },
        ],
      };
      if (data.amount > 0) {
        dispatch(updateOneStock(newStore));
      }
    }
  };

  return (
    <div>
      <h2>Stock Lists</h2>
      <ul>
        {stocks.stock
          ? stocks.stock.map((s) => (
              <li key={s.id}>
                <Link to={`/stock/${s.id}`}> {s.name}</Link> || units in store :{" "}
                {s.amount}
                <div>
                  <button
                    onClick={() => handlePurchases(s, "buy")}
                    type="button"
                  >
                    buy one
                  </button>
                  <button
                    onClick={() => handlePurchases(s, "sell")}
                    type="button"
                  >
                    sell one
                  </button>
                </div>
              </li>
            ))
          : "Nothing is here"}
      </ul>
      <div>
        <AddStockForm />
      </div>
    </div>
  );
}

export default Dashboard;
