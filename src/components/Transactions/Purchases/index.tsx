import React from "react";
import { useStock } from "../../../hooks";
import PurchaseHistory from "./PurchaseHistory";

function Purchases() {
  const purchases = useStock().purchases;

  return (
    <div>
      <h3>Purchases history</h3>
      {purchases?.length ? (
        <PurchaseHistory purchases={purchases} />
      ) : (
        "Your purchases history will show up here!"
      )}
    </div>
  );
}

export default Purchases;
