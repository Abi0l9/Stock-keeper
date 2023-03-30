import { sort } from "../../../types";
import { options } from "../../../const";
import { sorter } from "../../../utils";
import { useState } from "react";
import { useStock } from "../../../hooks";

function Purchases() {
  const purchases = useStock().purchases;
  const [selectedValue, setSelectedValue] = useState<sort>("latest");
  const sortedData = sorter(purchases, selectedValue);

  const handleFieldSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value as sort);
  };

  return (
    <div>
      <h3>Purchases history</h3>
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
                <span>{trans.name} </span> ||
                <span> {trans.unit} </span> ||
                <span> #{trans.price} </span> ||
                <span> {trans.date} </span>
              </p>
            </div>
          ))
        : "Your purchases history will show up here!"}
    </div>
  );
}

export default Purchases;
