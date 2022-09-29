import registerReducer from "./reducers";
import { createStore } from "redux";

export const store = createStore(registerReducer);
