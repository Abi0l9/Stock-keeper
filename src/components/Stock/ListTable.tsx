import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
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
              <TableCell>Quick transactions</TableCell>
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
                  <Button onClick={() => handleSingleTransaction(s, "buy")}>
                    +
                  </Button>
                  <Button onClick={() => handleSingleTransaction(s, "sell")}>
                    -
                  </Button>
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
