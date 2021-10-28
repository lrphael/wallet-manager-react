import { combineReducers } from "redux";
import transaction from "./transaction";
import user from "./user";

const reducers = combineReducers({
  transaction: transaction,
  user: user
});

export default reducers;

export type State = ReturnType<typeof reducers>