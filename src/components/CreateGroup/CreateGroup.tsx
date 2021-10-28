import "./CreateGroup.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { userActions, State } from "../../redux/index";
import React, { useRef } from "react";
import { Transaction } from "../../models/transaction";
import { paymentGroup } from "../../models/paymentGroup";

function CreateGroup() {
	const dispatch = useDispatch();
	const { addFriendToGroup, createGroup } = bindActionCreators(userActions, dispatch);
	const userObject = useSelector((state: State) => state.user);

	let newGroupObject: paymentGroup;

	let depositInput = useRef<HTMLInputElement>(null);
	let depositInput2 = useRef<HTMLInputElement>(null);
	let createNewGroup = (e: any) => {
		const test = userObject;
		debugger
	};

	let addFriendInGroup = (e: any) => {
		const test = userObject;
		debugger
	};

	return (
		<div className="App">
			<h1>Group Section 1</h1>
			<br /><br />
			<input ref={depositInput} type="text" id="deposit1" />
			<button onClick={createNewGroup} id="btn-deposit1">New Payment</button>
			<h1>Group Section 2</h1>
			<input ref={depositInput2} type="text" id="deposit2" />
			<button onClick={addFriendInGroup} id="btn-deposit2">Add a friend</button>
			<br /><br />
		</div>
	);

}
export default CreateGroup