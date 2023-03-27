import { useState } from "react";

type Props = {
  price: number;
  amount: number;
  setOpenForm: React.Dispatch<React.SetStateAction<Boolean>>;
};

const EditStock = ({ price, amount, setOpenForm }: Props) => {
  const [newPrice, setNewPrice] = useState<number>(price);
  const [newAmount, setNewAmount] = useState<number>(amount);

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setOpenForm(false);
    console.log({ newPrice, newAmount });

    setNewPrice(price);
    setNewAmount(amount);
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
          />
        </p>
        <p>
          <label htmlFor="amount">Available in store: </label>
          <input
            title="amount"
            type="number"
            name="amount"
            id="amount"
            value={newAmount}
            onChange={(e) => setNewAmount(Number(e.target.value))}
          />
        </p>
        <button onClick={handleSubmit} type="submit">
          Make changes
        </button>
      </form>
    </div>
  );
};

export default EditStock;
