import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Tooltip,
  Link,
  Button,
} from "@mui/material";
import { StockType } from "../../types";

type Props = {
  sortedData: StockType[];
  handleSingleTransaction: (item: StockType, type: "sell" | "buy") => void;
};

const ListTable = ({ sortedData, handleSingleTransaction }: Props) => {
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Units in Store</TableCell>
              <Tooltip title={"quickly purchase or sell an item in store"}>
                <TableCell>Quick transactions</TableCell>
              </Tooltip>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData?.map((s, id) => (
              <TableRow key={s.id}>
                <TableCell>{id + 1}</TableCell>
                <TableCell>
                  <Link href={`/stock/${s.id}`} underline="none">
                    {s.name}
                  </Link>
                </TableCell>
                <TableCell>{s.unit}</TableCell>
                <TableCell>
                  <Tooltip title={`add one ${s.name} to store`}>
                    <Button onClick={() => handleSingleTransaction(s, "buy")}>
                      +
                    </Button>
                  </Tooltip>
                  <Tooltip title={`sell one ${s.name}`}>
                    <Button onClick={() => handleSingleTransaction(s, "sell")}>
                      -
                    </Button>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ListTable;
