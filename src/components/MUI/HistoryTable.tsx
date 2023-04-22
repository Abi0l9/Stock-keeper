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
} from "@mui/material";
import { TransactionType, sort } from "../../types";
import { sorter, timeSplitter } from "../../utils";

type Props = {
  data: TransactionType[];
  selectedValue: sort;
};

function HistoryTable({ data, selectedValue }: Props) {
  const sortedData = sorter(data, selectedValue);
  return (
    <div>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>S/N</TableCell>
                <TableCell>Item</TableCell>
                <TableCell>Units</TableCell>
                <TableCell>Rate</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData.map((trans, idx) => (
                <TableRow key={trans.id + idx}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>
                    <Link href={`/stock/${trans.id}`} underline="none">
                      {trans.name}
                    </Link>
                  </TableCell>
                  <TableCell>{trans.unit}</TableCell>
                  <TableCell>{trans.price}</TableCell>
                  <TableCell>{trans.unit * trans.price}</TableCell>
                  <TableCell>{timeSplitter(trans.date)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default HistoryTable;
