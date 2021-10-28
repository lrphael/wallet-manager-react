import { Transaction } from "./transaction";

export type paymentGroup = {
  id: number;
  userId: Array<number>;
  amount: number;
  description: string;
  timestamp: string;
  transactions: Array<Transaction>;
}