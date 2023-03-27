import { StockType, Store } from "../../types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

type Props = {
  stocks: StockType[];
};

function Dashboard() {
  const stocks = useSelector((state: Props) => state.stocks);
  return (
    <div>
      <h2>Stock Lists</h2>
      <ul>
        {stocks &&
          stocks.map((s) => (
            <li key={s.id}>
              <Link to={`/stock/${s.id}`}> {s.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Dashboard;
