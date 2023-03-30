import { useStock } from "../../hooks";
import { headerStatGetter } from "../../utils";

function HeaderStat() {
  const sales = useStock().sales;
  const purchases = useStock().purchases;

  const { highest: highestSales, lowest: lowestSales } =
    headerStatGetter(sales);
  const { highest: highestPurchases, lowest: lowestPurchases } =
    headerStatGetter(purchases);

  return (
    <div>
      <article>
        <b>Most sales</b> <br />
        Item: {highestSales.stock}
        <br />
        Units Sold: {highestSales.value}
      </article>
      <article>
        <b>Most Entries</b> <br />
        Item: {highestPurchases.stock}
        <br />
        Units Brought In: {highestPurchases.value}
      </article>
    </div>
  );
}

export default HeaderStat;
