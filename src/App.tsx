import Dashboard from "./components/Dashboard";
import Menu from "./Menu";
import Purchases from "./components/Purchases";
import Sales from "./components/Sales";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/purchases" element={<Purchases />} />
      </Routes>
    </div>
  );
}

export default App;
