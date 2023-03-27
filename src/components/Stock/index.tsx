import { useState } from "react";
import { DashboardProps } from "../../types";
import { useMatch } from "react-router-dom";
import EditStock from "./EditStock";
import { useSelector } from "react-redux";

function Stock() {
  const [openForm, setOpenForm] = useState<Boolean>(false);
  const formDisplay = { display: openForm ? "" : "none" };
  const btnDisplay = { display: openForm ? "none" : "" };

  const stocks = useSelector((state: DashboardProps) => state.stocks);
  const match = useMatch("/stock/:id");
  const selectedStock = match
    ? stocks.find((stock) => stock.id === Number(match.params.id))
    : null;

  const handleBtnClick = () => {
    setOpenForm(!openForm);
  };

  return (
    <div>
      {selectedStock && (
        <div>
          <h4>{selectedStock.name}</h4>
          <p>
            Price: {selectedStock.price} <br /> Available in store:{" "}
            {selectedStock.amount}
            <br />
            Total: {selectedStock.amount * selectedStock.price}
          </p>
        </div>
      )}
      <div>
        <button style={btnDisplay} type="button" onClick={handleBtnClick}>
          Make changes to stock
        </button>
      </div>
      <div style={formDisplay}>
        {selectedStock && (
          <EditStock
            price={selectedStock.price}
            amount={selectedStock.amount}
            setOpenForm={setOpenForm}
          />
        )}
      </div>
    </div>
  );
}

export default Stock;
