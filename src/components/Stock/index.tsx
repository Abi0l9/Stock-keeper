import React from "react";
import { useState } from "react";
import { Store } from "../../types";
import { useMatch } from "react-router-dom";
import EditStock from "./EditStock";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

type Props = Record<"stocks", Store>;

function Stock() {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const formDisplay = { display: openForm ? "" : "none" };
  const btnDisplay = { display: openForm ? "none" : "" };

  const stocks = useSelector((state: Props) => state.stocks.stock);
  const match = useMatch("/stock/:id");
  const selectedStock =
    stocks && match
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
            {selectedStock.unit}
            <br />
            Total: {selectedStock.unit * selectedStock.price}
          </p>
        </div>
      )}
      <div>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          style={btnDisplay}
          type="button"
          onClick={handleBtnClick}
        >
          Make changes to stock
        </Button>
      </div>
      <div style={formDisplay}>
        {selectedStock && (
          <EditStock
            id={selectedStock.id}
            name={selectedStock.name}
            price={selectedStock.price}
            unit={selectedStock.unit}
            setOpenForm={setOpenForm}
          />
        )}
      </div>
    </div>
  );
}

export default Stock;
