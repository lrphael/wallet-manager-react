import { friendList } from "../../models/friendList";
import { paymentGroup } from "../../models/paymentGroup";
import { User } from "../../models/user";
import { UserActionTypes, UserType } from "../actionTypes/user";

const initialState: User = {
  id: 0,
  name: '',
  balance: 0,
  groups: [{
    id: 0,
    userId: [],
    amount: 0,
    description: '',
    timestamp: '',
    transactions: [{
      id: 0,
      userFromId: 0,
      userToId: 0,
      amount: 0,
      timestamp: '',
    }]
  }],
  friendList: { userIds: [] }
};

function addNewfriend(friendList: friendList, newFriendId: number) {
  const newFriendList = friendList;
  newFriendList.userIds.push(newFriendId);
  return newFriendList
}

function addNewGroup(state: User, groupObject: paymentGroup) {
  const newGroupList = state.groups;
  newGroupList.push(groupObject);
  return newGroupList
}

function addfriendToGroup(state: User, friendId: number, groupId: number) {
  const groupToAdd = state.groups[groupId];
  debugger
  // groupToAdd.push(groupObject);
  return groupToAdd
}

const reducer = (state: User = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case UserType.ADD_FRIEND:
      return {
        ...state,
        friendList: addNewfriend(state.friendList, action.payload)
      }
    case UserType.CREATE_GROUP:
      return {
        ...state,
        groups: addNewGroup(state, action.payload)
      }
    case UserType.ADD_FRIEND_TO_GROUP:
      return {
        ...state,
        groups: addfriendToGroup(state, action.payload.friendId, action.payload.groupId)
      }
    default:
      return state;
  }
}

export default reducer