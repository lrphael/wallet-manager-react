export enum OperationType {
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw"
}

interface OperationInterface {
  type: OperationType.DEPOSIT | OperationType.WITHDRAW,
  payload: number
}

export type OperationActionTypes = OperationInterface;