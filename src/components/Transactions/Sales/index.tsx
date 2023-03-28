import { useSelector } from "react-redux";
import { Store } from "../../../types";

type Props = Record<"stocks", Store>;

function Sales() {
  const sales = useSelector((state: Props) => state.stocks.sales);
  return (
    <div>
      <h3>Sales history</h3>
      {sales.length &&
        sales.map((trans) => (
          <div key={trans.date + " " + Math.floor(Math.random() * 20000)}>
            <p>
              {trans.name} || {trans.amount} || #{trans.price} ||
              {trans.date}
            </p>
          </div>
        ))}
    </div>
  );
}

export default Sales;
