import axios from "axios";
import { baseUrl } from "../const";
import { StockType, Store } from "../types";

const getAll = async () => {
  return await axios.get<Store>(baseUrl).then((data) => data.data);
};

// type d = Record<string, Store>;

const addStock = async (obj: Store) => {
  const request = await axios.post<Store>(baseUrl, obj);
  return request.data;
};

const getOne = async (obj: StockType) => {
  return await axios
    .get<Store>(baseUrl)
    .then((data) => data.data.stock.push(obj));
};

// eslint-disable-next-line
export default { getAll, addStock, getOne };
