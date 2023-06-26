import React from "react";
import { SalesType } from "../../../types";
import Sorter from "../../Sorter";

type Props = {
  sales: SalesType[];
};

function SalesHistory({ sales }: Props) {
  return (
    <div>
      <Sorter transaction={sales} />
    </div>
  );
}

export default SalesHistory;
