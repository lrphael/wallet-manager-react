import { OperationActionTypes, OperationType } from "../actionTypes/operation";

const initialState = 0;

const reducer = (state: number = initialState, action: OperationActionTypes) => {
  switch (action.type) {
    case  OperationType.DEPOSIT:
      return state + action.payload;
    case  OperationType.WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
}

export default reducer