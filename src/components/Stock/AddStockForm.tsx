import { useField } from "../../hooks";
import { StockType } from "../../types";
import { generateId } from "../../utils";
import stockServices from "../../services/store";

function AddStockForm() {
  const nameField = useField("text", "name");
  const amountField = useField("number", "amount");
  const priceField = useField("number", "price");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const id = generateId();
    const data: StockType = {
      id,
      name: nameField.value,
      amount: Number(amountField.value),
      price: Number(priceField.value),
    };

    const req = await stockServices.getOne(data);
    console.log(req);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor={nameField.id}>{nameField.name}</label>:{" "}
          <input {...nameField} />
          <br />
          <label htmlFor={amountField.id}>{amountField.name}</label>:{" "}
          <input {...amountField} />
          <br />
          <label htmlFor={priceField.id}>{priceField.name}</label>:{" "}
          <input {...priceField} />
        </p>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddStockForm;
