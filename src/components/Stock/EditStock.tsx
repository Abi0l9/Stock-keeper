import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { updateOneStock } from "../../reducers/stock";
import { TransactionType, StockType, Store } from "../../types";
import { UnitCompare, dateParser, handleBulkUpdate } from "../../utils";

type Props = {
  id: number;
  name: string;
  price: number;
  unit: number;
  setOpenForm: React.Dispatch<React.SetStateAction<Boolean>>;
};

type storeType = Record<"stocks", Store>;

const EditStock = ({ id, name, price, unit, setOpenForm }: Props) => {
  const stocks = useSelector((state: storeType) => state.stocks);
  const dispatch = useAppDispatch();

  const [newPrice, setNewPrice] = useState<number>(price);
  const [newUnit, setNewUnit] = useState<number>(unit);
  const [newDate, setNewDate] = useState<string>(String(Date.now()));

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setOpenForm(false);
    const date = dateParser(newDate);

    const collectedData: StockType = {
      id,
      name,
      price: newPrice,
      unit: newUnit,
    };

    const transactionData: TransactionType = {
      ...collectedData,
      unit: newUnit,
      date,
    };

    const unitPrice: UnitCompare = [unit, newUnit];

    const store = handleBulkUpdate(
      stocks,
      collectedData,
      transactionData,
      unitPrice
    );
    dispatch(updateOneStock(store));

    setNewPrice(newPrice);
    setNewUnit(newUnit);
    setNewDate(String(Date.now()));
  };

  return (
    <div>
      <form>
        <p>
          <label htmlFor="price">Price: </label>
          <input
            title="price"
            type="number"
            name="price"
            id="price"
            value={newPrice}
            onChange={(e) => setNewPrice(Number(e.target.value))}
            required
          />
        </p>
        <p>
          <label htmlFor="unit">Units in store: </label>
          <input
            title="unit"
            type="number"
            name="unit"
            id="unit"
            value={newUnit}
            onChange={(e) => setNewUnit(Number(e.target.value))}
            required
          />
        </p>
        <p>
          <label htmlFor="date">Date: </label>
          <input
            title="date"
            type="datetime-local"
            name="date"
            id="date"
            value={newDate}
            onChange={(e) =>
              !e.target.value ? setNewDate(newDate) : setNewDate(e.target.value)
            }
          />
        </p>
        <button onClick={handleSubmit} type="submit">
          Update stock
        </button>
      </form>
    </div>
  );
};

export default EditStock;
