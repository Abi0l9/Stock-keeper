"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generalSortOptions = exports.options = exports.baseUrl = void 0;
exports.baseUrl = "http://localhost:3001/store";
exports.options = [
    "latest",
    "oldest",
    "price (high - low)",
    "price (low - high)",
    "name (a-z)",
    "name (z-a)",
    "unit (high - low)",
    "unit (low - high)",
];
exports.generalSortOptions = exports.options.slice(4);
