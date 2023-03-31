import { sort, TransactionType } from "../../../types";
import { options } from "../../../const";
import { sorter, groupTransactionsByDate, timeSplitter } from "../../../utils";
import { useState } from "react";
import { useStock } from "../../../hooks";

function Sales() {
  const sales = useStock().sales;
  const [selectedValue, setSelectedValue] = useState<sort>("latest");
  const sortedData = sorter(sales, selectedValue);
  const groupedData = groupTransactionsByDate(sortedData);

  console.log(groupedData);

  const handleFieldSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value as sort);
  };

  return (
    <div>
      <h3>Sales history</h3>
      {groupedData.map((data, idx) => (
        <div>
          <p>
            <b>{Object.keys(data)}</b>
          </p>
          <div key={idx}>
            {Object.values(data).map((trans, idxi) =>
              trans.map((t) => (
                <div key={t.date}>
                  {t.name} | {t.unit} | {t.price} | {t.unit * t.price} |{" "}
                  {timeSplitter(t.date)}
                </div>
              ))
            )}
          </div>
        </div>
      ))}
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
      {sortedData && sortedData.length > 0
        ? sortedData.map((trans) => (
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
