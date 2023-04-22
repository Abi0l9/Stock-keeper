import { useState } from "react";
import { options } from "../const";
import { sort, TransactionType } from "../types";
import { groupTransactionsByDate } from "../utils";
import HistoryTable from "./MUI/HistoryTable";

type Props = {
  transaction: TransactionType[];
};

function Sorter({ transaction }: Props) {
  const [selectedValue, setSelectedValue] = useState<sort>("latest");
  const groupedData = groupTransactionsByDate(transaction);

  const handleFieldSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value as sort);
  };

  return (
    <div>
      <div>
        <form>
          <span>Sort: </span>
          <select name="sort" title="sort" onChange={handleFieldSelectChange}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </form>
      </div>
      <div>
        {groupedData.map((data, idx) => (
          <div key={idx}>
            <p>
              <b>{Object.keys(data)}</b>
            </p>
            <div key={idx}>
              {Object.values(data).map((trans, idxi) => (
                <div key={idxi}>
                  <HistoryTable data={trans} selectedValue={selectedValue} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sorter;
