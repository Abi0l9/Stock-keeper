import { useSelector } from "react-redux";
import { Store } from "../../../types";

type Props = Record<"stocks", Store>;

function Purchases() {
  const purchases = useSelector((state: Props) => state.stocks.purchases);
  return (
    <div>
      <h3>Purchases history</h3>

      {purchases && purchases.length > 0
        ? purchases.map((trans) => (
            <div key={trans.date + " " + Math.floor(Math.random() * 20000)}>
              <p>
                <span>{trans.name} </span> ||
                <span> {trans.unit} </span> ||
                <span> #{trans.price} </span> ||
                <span> {trans.date} </span>
              </p>
            </div>
          ))
        : "Your purchases history will show up here!"}
    </div>
  );
}

export default Purchases;
