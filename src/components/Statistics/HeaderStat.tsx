import { useStock } from "../../hooks";
import {
  lastAddedProduct,
  salesStatGetter,
  stockStatGetter,
} from "../../utils";

function HeaderStat() {
  const sales = useStock().sales;
  const stock = useStock().stock;
  const purchases = useStock().purchases;

  const { highest, totalSales } = salesStatGetter(sales);
  const assets = stockStatGetter(stock);
  const lastAdded = lastAddedProduct(purchases);

  return (
    <div>
      <article>
        <b>Most sales</b> <br />
        Item: {highest.stock}
        <br />
        Units Sold: <b>{highest.value}</b>
      </article>
      <article>
        <b>Total Amount of Sales</b> <br />#{totalSales}
        <br />
      </article>
      <article>
        <b>Total Assets in Store</b> <br />#{assets}
        <br />
      </article>
      <article>
        <b>Last Added Product</b> <br />
        <span>{lastAdded?.name}</span>
        <br />
      </article>
    </div>
  );
}

export default HeaderStat;
