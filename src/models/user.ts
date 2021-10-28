import { friendList } from "./friendList";
import { paymentGroup } from "./paymentGroup";

export type User = {
  id: number;
  name: string;
  balance: number;
  groups: Array<paymentGroup>;
  friendList: friendList;
}