import { useState } from "react";
import { options } from "../const";
import { sort, TransactionType } from "../types";
import { groupTransactionsByDate, sorter, timeSplitter } from "../utils";

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
              {Object.values(data).map((trans) =>
                sorter(trans, selectedValue).map((t, i) => (
                  <div key={t.date + i}>
                    {" "}
                    {i + 1} - {t.name} | {t.unit} | {t.price} |{" "}
                    {t.unit * t.price} | {timeSplitter(t.date)}
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sorter;
