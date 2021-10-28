export type Transaction = {
  id: number;
  userFromId: number;
  userToId: number;
  amount: number;
  timestamp: string;
}