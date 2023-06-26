import React from "react";
import { useAppDispatch, useField } from "../../hooks";
import { PurchasesType, StockType, Store } from "../../types";
import { generateId } from "../../utils";
import { useSelector } from "react-redux";
import axios from "axios";
import { addOneStock } from "../../reducers/stock";

import { TextField, Box, Button, Tooltip } from "@mui/material";

type Props = Record<"stocks", Store>;

type ModalProps = {
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
};

function AddStockForm({ setModalState }: ModalProps) {
  const store = useSelector((state: Props) => state.stocks);
  const dispatch = useAppDispatch();
  const id = generateId();

  const { clearField: nameFieldClear, ...nameField } = useField("text", "name");
  const { clearField: unitFieldClear, ...unitField } = useField(
    "number",
    "unit"
  );
  const { clearField: priceFieldClear, ...priceField } = useField(
    "number",
    "price"
  );

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const collectedData = {
      id,
      name: nameField.value,
      unit: Number(unitField.value),
      price: Number(priceField.value),
    };
    const data: StockType = {
      ...collectedData,
    };

    const newPurchase: PurchasesType = {
      ...collectedData,
      date: String(new Date().toLocaleString()),
    };

    const newData: Store = {
      ...store,
      purchases: [...store.purchases, newPurchase],
      stock: [...store.stock, data],
    };

    try {
      dispatch(addOneStock(newData));
      nameFieldClear();
      unitFieldClear();
      priceFieldClear();
      //close modal
      setModalState(false);
    } catch (error) {
      let errMsg = "Something occured, ";
      if (axios.isAxiosError(error)) {
        errMsg += error.message;
      }
      console.log(errMsg);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box>
          <Tooltip title="Name of item">
            <TextField
              variant="standard"
              label={nameField.name}
              {...nameField}
              required
            />
          </Tooltip>
        </Box>
        <Box>
          <Tooltip title="Amount to be added">
            <TextField
              variant="standard"
              label={unitField.name}
              {...unitField}
              required
            />
          </Tooltip>
        </Box>
        <Box>
          <Tooltip title="Price of item">
            <TextField
              variant="standard"
              label={priceField.name}
              {...priceField}
              required
            />
          </Tooltip>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Button
            color="success"
            variant="contained"
            size="small"
            type="submit"
          >
            Add
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default AddStockForm;
