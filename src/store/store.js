import { createStore } from "redux";
import counterReducer from "../components/Counter/counterReducer";

export const store = createStore(counterReducer);
