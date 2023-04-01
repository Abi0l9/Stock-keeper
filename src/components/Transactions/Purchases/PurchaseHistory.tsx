import { PurchasesType } from "../../../types";
import Sorter from "../../Sorter";

type Props = {
  purchases: PurchasesType[];
};

function PurchaseHistory({ purchases }: Props) {
  return (
    <div>
      <Sorter transaction={purchases} />
    </div>
  );
}

export default PurchaseHistory;
