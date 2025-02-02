import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "./loggerMiddleware.js";

import financeReducer from "./financeReducer.js";

const store = createStore(financeReducer, applyMiddleware(loggerMiddleware));

export default store;
