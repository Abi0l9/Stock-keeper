import { useStock } from "../../hooks";
import {
  lastAddedProduct,
  salesStatGetter,
  stockStatGetter,
} from "../../utils";
import { Box } from "@mui/material";
import CardComponent from "../MUI/Card";

function HeaderStat() {
  const sales = useStock().sales;
  const stock = useStock().stock;
  const purchases = useStock().purchases;

  const { highest, totalSales } = salesStatGetter(sales);
  const assets = stockStatGetter(stock);
  const lastAdded = lastAddedProduct(purchases);

  return (
    <Box sx={{ margin: "0 auto" }}>
      <Box>
        <CardComponent
          header={"Most Sales"}
          item={highest.stock}
          units={highest.value}
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{flexGrow: 1}}>
          <CardComponent header={"Total Amount of Sales:"} misc={totalSales} />
        </Box>
        <Box sx={{flexGrow: 1}}>
          <CardComponent header={"Total Assets in Store: "} misc={assets} />
        </Box>
        <Box sx={{flexGrow: 1}}>
          <CardComponent header={"Last Added Product: "} misc={lastAdded?.name} />
        </Box>
      </Box>
    </Box>
  );
}

export default HeaderStat;
