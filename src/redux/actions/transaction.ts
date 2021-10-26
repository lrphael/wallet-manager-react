import { TransactionType, TransactionActionTypes } from "../actionTypes/transaction"
import { Dispatch } from "redux";
import { Transaction } from "../../models/transaction";

export const sendMoney = (transaction: Transaction) => {
  return (dispatch: Dispatch<TransactionActionTypes>) => {
    dispatch({
      type: TransactionType.TRANSACTION,
      payload: transaction
    })
  }
} 