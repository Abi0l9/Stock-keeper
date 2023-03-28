import { useAppDispatch, useField } from "../../hooks";
import { StockType, Store } from "../../types";
import { useNavigate } from "react-router-dom";
import { generateId } from "../../utils";
import stockServices from "../../services/store";
import { useSelector } from "react-redux";
import axios from "axios";
import { addOneStock } from "../../reducers/stock";

type Props = Record<"stocks", Store>;

function AddStockForm() {
  const store = useSelector((state: Props) => state.stocks);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const id = generateId();

  const nameField = useField("text", "name");
  const amountField = useField("number", "amount");
  const priceField = useField("number", "price");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data: StockType = {
      id,
      name: nameField.value,
      amount: Number(amountField.value),
      price: Number(priceField.value),
    };

    const newData: Store = {
      ...store,
      stock: [...store.stock, data],
    };

    try {
      dispatch(addOneStock(newData));
      navigate("*");
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
          <label htmlFor={amountField.id}>{amountField.name}</label>:{" "}
          <input {...amountField} required />
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
