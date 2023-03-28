import { Store } from "../../types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AddStockForm from "../Stock/AddStockForm";

type Props = Record<"stocks", Store>;

function Dashboard() {
  const stocks = useSelector((state: Props) => state.stocks);

  return (
    <div>
      <h2>Stock Lists</h2>
      <ul>
        {stocks.stock
          ? stocks.stock.map((s) => (
              <li key={s.id}>
                <Link to={`/stock/${s.id}`}> {s.name}</Link>
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
