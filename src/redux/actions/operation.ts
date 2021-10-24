import { OperationType, OperationActionTypes } from "../actionTypes/operation"
import { Dispatch } from "redux";

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<OperationActionTypes>) => {
    dispatch({
      type: OperationType.DEPOSIT,
      payload: amount
    })
  }
}

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<OperationActionTypes>) => {
    dispatch({
      type: OperationType.WITHDRAW,
      payload: amount
    })
  }
} 