import { useAppDispatch, useField } from "../../hooks";
import { PurchasesType, StockType, Store } from "../../types";
import { generateId } from "../../utils";
import { useSelector } from "react-redux";
import axios from "axios";
import { addOneStock } from "../../reducers/stock";

type Props = Record<"stocks", Store>;

function AddStockForm() {
  const store = useSelector((state: Props) => state.stocks);
  const dispatch = useAppDispatch();
  const id = generateId();

  const { clearField: nameFieldClear, ...nameField } = useField("text", "name");
  const { clearField: unitFieldClear, ...unitField } = useField(
    "number",
    "unit"
  );
  const { clearField: priceFieldClear, ...priceField } = useField(
    "number",
    "price"
  );

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const collectedData = {
      id,
      name: nameField.value,
      unit: Number(unitField.value),
      price: Number(priceField.value),
    };
    const data: StockType = {
      ...collectedData,
    };

    const newPurchase: PurchasesType = {
      ...collectedData,
      date: String(new Date().toLocaleString()),
    };

    const newData: Store = {
      ...store,
      purchases: [...store.purchases, newPurchase],
      stock: [...store.stock, data],
    };

    try {
      dispatch(addOneStock(newData));
      nameFieldClear();
      unitFieldClear();
      priceFieldClear();
    } catch (error) {
      let errMsg = "Something occured, ";
      if (axios.isAxiosError(error)) {
        errMsg += error.message;
      }
      console.log(errMsg);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor={nameField.id}>{nameField.name}</label>:{" "}
          <input {...nameField} required />
          <br />
          <label htmlFor={unitField.id}>{unitField.name}</label>:{" "}
          <input {...unitField} required />
          <br />
          <label htmlFor={priceField.id}>{priceField.name}</label>:{" "}
          <input {...priceField} required />
        </p>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddStockForm;
