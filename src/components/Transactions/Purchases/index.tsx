import { useSelector } from "react-redux";
import { Store } from "../../../types";

type Props = Record<"stocks", Store>;

function Purchases() {
  const purchases = useSelector((state: Props) => state.stocks.purchases);
  return (
    <div>
      <h3>Purchases history</h3>
      {purchases.length &&
        purchases.map((trans) => (
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

export default Purchases;
