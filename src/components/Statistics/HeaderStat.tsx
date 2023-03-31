import { useStock } from "../../hooks";
import { salesStatGetter, stockStatGetter } from "../../utils";

function HeaderStat() {
  const sales = useStock().sales;
  const stock = useStock().stock;

  const { highest, totalSales } = salesStatGetter(sales);
  const assets = stockStatGetter(stock);

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
    </div>
  );
}

export default HeaderStat;
