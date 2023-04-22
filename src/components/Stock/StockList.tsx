import { StockType } from "../../types";
import { Box } from "@mui/material";
import ListTable from "./ListTable";

type Props = {
  sortedData: StockType[];
  handleSingleTransaction: (item: StockType, type: "sell" | "buy") => void;
};

function StockList({ sortedData, handleSingleTransaction }: Props) {
  return (
    <Box>
      <ListTable
        sortedData={sortedData}
        handleSingleTransaction={handleSingleTransaction}
      />
    </Box>
  );
}

export default StockList;
