import { useSelector } from "react-redux";
import { Store } from "../../../types";

type Props = Record<"stocks", Store>;

function Sales() {
  const sales = useSelector((state: Props) => state.stocks.sales);

  return (
    <div>
      <h3>Sales history</h3>
      {/* {sales.map((s) => {
        switch (s.date) {
          case "":
            break;

          default:
            break;
        }
      })} */}
      {sales && sales.length > 0
        ? sales.map((trans) => (
            <div key={trans.date + " " + Math.floor(Math.random() * 20000)}>
              <p>
                {trans.name} || {trans.unit} || #{trans.price} ||
                {trans.date}
              </p>
            </div>
          ))
        : "Your sales history will show up here!"}
    </div>
  );
}

export default Sales;
