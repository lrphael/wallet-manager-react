import { UserType, UserActionTypes } from "../actionTypes/user"
import { Dispatch } from "redux";
import { paymentGroup } from "../../models/paymentGroup";

export const addFriend = (personId: number) => {
  return (dispatch: Dispatch<UserActionTypes>) => {
    dispatch({
      type: UserType.ADD_FRIEND,
      payload: personId
    })
  }
}

export const createGroup = (groupObject: paymentGroup) => {
  return (dispatch: Dispatch<UserActionTypes>) => {
    dispatch({
      type: UserType.CREATE_GROUP,
      payload: groupObject
    })
  }
}

export const addFriendToGroup = (friendId: number, groupId: number) => {
  return (dispatch: Dispatch<UserActionTypes>) => {
    dispatch({
      type: UserType.ADD_FRIEND_TO_GROUP,
      payload: { friendId, groupId }
    })
  }
}
