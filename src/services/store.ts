import axios from "axios";
import { baseUrl } from "../const";
import { Store } from "../types";

const getAll = async () => {
  return await axios.get<Store>(baseUrl).then((data) => data.data);
};

const addStock = async (obj: Store) => {
  const request = await axios.post<Store>(baseUrl, obj);
  return request.data;
};

// eslint-disable-next-line
export default { getAll, addStock };
