import { useEffect, useState } from "react";
import StoreServices from "../../services/store";
import { Store } from "../../types";

function Dashboard() {
  const [store, setStore] = useState<Store>();
  useEffect(() => {
    setStore(StoreServices.getAll());
  }, []);
  return (
    <div>
      {store?.stock.map((s) => (
        <div key={s.id}>
          <h4>Name: {s.name}</h4>
          <p>
            Price: {s.price} <br /> Amount in store: {s.amount}
            <br />
            Total: {s.amount * s.price}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
