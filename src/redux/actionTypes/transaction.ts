import { Transaction } from "../../models/transaction";

export enum TransactionType {
  TRANSACTION = "transaction"
}

interface TransactionInterface {
  type: TransactionType.TRANSACTION;
  payload: Transaction;
}

export type TransactionActionTypes = TransactionInterface ;