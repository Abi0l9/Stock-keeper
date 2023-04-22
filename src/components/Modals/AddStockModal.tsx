import React from "react";
import AddStockForm from "../Stock/AddStockForm";
import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";

type ModalProp = {
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
  modalState: boolean;
};

function AddStockModal({ modalState, setModalState }: ModalProp) {
  return (
    <Dialog open={modalState} onClose={() => setModalState(false)}>
      <DialogTitle>
        <Typography component="b">Add new stock</Typography>
      </DialogTitle>
      <DialogContent>
        <AddStockForm setModalState={setModalState} />
      </DialogContent>
    </Dialog>
  );
}

export default AddStockModal;
