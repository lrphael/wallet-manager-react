import "./AddFriend.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { userActions, State } from "../../redux/index";
import React, { useRef } from "react";

function AddFriend() {
	const dispatch = useDispatch();
	const { addFriend } = bindActionCreators(userActions, dispatch);
	const userObject = useSelector((state: State) => state.user);

	console.log('newChange: ', userObject);

	let addFriendInput = useRef<HTMLInputElement>(null);

	let setNewFriend = (e: any) => {
		if (addFriendInput.current) {
			if (addFriendInput.current.id === "withdraw") {
				addFriend(parseInt(addFriendInput.current.value))
			}
		}
	};

	return (
		<div className="App">
			<h1>ADD FRIEND</h1>
			<br /><br />
			<input ref={addFriendInput} type="text" id="withdraw" />
			<button onClick={setNewFriend} id="btn-withdraw">AddFriend</button>
		</div>
	);

}
export default AddFriend