import { paymentGroup } from "../../models/paymentGroup";

export enum UserType {
  ADD_FRIEND = "addFriend",
  CREATE_GROUP = "createGroup",
  ADD_FRIEND_TO_GROUP = "addFriendToGroup",
}


interface AddFriendInterface {
  type: UserType.ADD_FRIEND,
  payload: number // person id
}

interface CreateGroupInterface {
  type: UserType.CREATE_GROUP,
  payload: paymentGroup // group object
}

interface AddFriendToGroupInterface {
  type: UserType.ADD_FRIEND_TO_GROUP,
  payload: { friendId: number, groupId: number } // friend and group id
}

export type UserActionTypes = AddFriendInterface | CreateGroupInterface | AddFriendToGroupInterface;