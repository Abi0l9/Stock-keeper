import { sort } from "../../../types";
// import { options } from "../../../const";
import { sorter, groupTransactionsByDate, timeSplitter } from "../../../utils";
import { useState } from "react";
import { useStock } from "../../../hooks";

function Purchases() {
  const purchases = useStock().purchases;
  const [selectedValue, setSelectedValue] = useState<sort>("latest");
  const sortedData = sorter(purchases, selectedValue);
  const groupedData = groupTransactionsByDate(sortedData);

  return (
    <div>
      <h3>Purchases history</h3>
      {sortedData.length
        ? groupedData.map((data, idx) => (
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
          ))
        : "No purchases yet!"}
    </div>
  );
}

export default Purchases;
