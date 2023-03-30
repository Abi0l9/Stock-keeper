import { sort } from "../../../types";
import { options } from "../../../const";
import { sorter } from "../../../utils";
import { useState } from "react";
import { useStock } from "../../../hooks";

function Sales() {
  const sales = useStock().sales;
  const [selectedValue, setSelectedValue] = useState<sort>("latest");
  const sortedData = sorter(sales, selectedValue);

  const handleFieldSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value as sort);
  };

  return (
    <div>
      <h3>Sales history</h3>
      <div>
        <form>
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
