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
      <h2>Stock Lists</h2>
      <ul>
        {stocks.stock && stocks.stock.length > 0
          ? stocks.stock.map((s) => (
              <li key={s.id}>
                <Link to={`/stock/${s.id}`}> {s.name}</Link> || units in store :{" "}
                {s.unit}
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
