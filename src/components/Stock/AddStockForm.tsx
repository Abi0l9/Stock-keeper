import { useField } from "../../hooks";
import { DashboardProps, StockType, Store } from "../../types";
import { generateId } from "../../utils";
import stockServices from "../../services/store";
import { useSelector } from "react-redux";

interface Props {
  stock: DashboardProps[];
}

function AddStockForm() {
  const stocks = useSelector((state: Props) => state);

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

    let all: StockType[];

    if ("stocks" in stocks) {
      console.log(stocks.stocks);
      const newData: Store = {
        stock: stocks.stocks as StockType[], //here
        sales: [],
      };
      const req = await stockServices.addStock(newData);
    }

    console.log();
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
