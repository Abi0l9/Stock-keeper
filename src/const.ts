import { optionsDataType } from "./types";

export const baseUrl = "https://stock-keeper-server.onrender.com/store";

export const options: optionsDataType = [
  "latest",
  "oldest",
  "price (high - low)",
  "price (low - high)",
  "name (a-z)",
  "name (z-a)",
  "unit (high - low)",
  "unit (low - high)",
];

export const generalSortOptions: optionsDataType = options.slice(4);
