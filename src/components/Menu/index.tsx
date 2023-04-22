import "./styles.css";
import { Box, AppBar, Toolbar, Typography, Link } from "@mui/material";

function Menu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" underline="none" color="inherit">
              Stock Keeper
            </Link>
          </Typography>

          <Link href="/sales" underline="none" color="inherit" sx={{ mr: 1 }}>
            Sales
          </Link>
          <Link href="/purchases" underline="none" color="inherit">
            Purchases
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Menu;
