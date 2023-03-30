import { useStock } from "../../hooks";
import { headerStatGetter } from "../../utils";

function HeaderStat() {
  const sales = useStock().sales;

  const { highest: highestSales, lowest: lowestSales } =
    headerStatGetter(sales);

  //   console.log(h);
  return (
    <div>
      <article>
        <b>Most sales</b> <br />
        Item: {highestSales.stock}
        <br />
        Units Sold: <b>{highestSales.value}</b>
      </article>
      <article>
        <b>Lowest Sales</b> <br />
        Item: {lowestSales.stock}
        <br />
        Units Sold: <b>{lowestSales.value}</b>
      </article>
    </div>
  );
}

export default HeaderStat;
