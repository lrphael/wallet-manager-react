import { Transaction } from "../../models/transaction";
import { TransactionActionTypes, TransactionType } from "../actionTypes/transaction";

const initialState: Transaction = {
  id: 0,
  userFromId: 0,
  userToId: 0,
  amount: 0,
  timestamp: ''
}

const reducer = (state: Transaction = initialState, action: TransactionActionTypes) => {
  switch (action.type) {
    case TransactionType.TRANSACTION:
      return action.payload
    default:
      return state;
  }
}

export default reducer