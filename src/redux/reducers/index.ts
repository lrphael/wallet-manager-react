import { combineReducers } from "redux";
import operation from "./operation";

const reducers = combineReducers({
  wallet: operation
});

export default reducers;

export type State = ReturnType<typeof reducers>