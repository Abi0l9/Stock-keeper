import { useSelector } from "react-redux";
import { Store, sort } from "../../../types";
import { options } from "../../../const";
import { sorter } from "../../../utils";
import { useState } from "react";

type Props = Record<"stocks", Store>;

function Sales() {
  const sales = useSelector((state: Props) => state.stocks.sales);

  return (
    <div>
      <h3>Sales history</h3>
      {sales && sales.length > 0
        ? [...sales]
            .sort((a, b): number => Date.parse(b.date) - Date.parse(a.date))
            .map((trans) => (
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
