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
    <Box sx={{ maxWidth: "85vw", margin: "0 auto" }}>
      <Box>
        <CardComponent
          header={"Most Sales"}
          item={highest.stock}
          units={highest.value}
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <CardComponent header={"Total Amount of Sales:"} misc={totalSales} />
        <CardComponent header={"Total Assets in Store: "} misc={assets} />
        <CardComponent header={"Last Added Product: "} misc={lastAdded?.name} />
      </Box>
    </Box>
  );
}

export default HeaderStat;
