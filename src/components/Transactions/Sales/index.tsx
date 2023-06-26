import React from "react";
import SalesHistory from "./SalesHistory";
import { useStock } from "../../../hooks";

function Sales() {
  const sales = useStock().sales;

  return (
    <div>
      <h3>Sales history</h3>
      {sales?.length ? (
        <SalesHistory sales={sales} />
      ) : (
        "Your sales history will show up here!"
      )}
    </div>
  );
}

export default Sales;
