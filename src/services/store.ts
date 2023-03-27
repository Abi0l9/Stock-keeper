import axios from "axios";
import { baseUrl } from "../const";
import { Store } from "../types";

const getAll = async () => {
  return await axios.get<Store>(baseUrl).then((data) => data.data);
};

// eslint-disable-next-line
export default { getAll };
