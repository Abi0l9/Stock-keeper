import { optionsDataType } from "./types";

export const baseUrl = "https://json-server-9vy1.onrender.com";

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
