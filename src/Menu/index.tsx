import { Link } from "react-router-dom";
import "./styles.css";

function Menu() {
  return (
    <div className="menu">
      <Link to="/">Dashboard</Link>
      <Link to="/sales">Sales</Link>
      <Link to="/purchases">Purchases</Link>
    </div>
  );
}

export default Menu;
