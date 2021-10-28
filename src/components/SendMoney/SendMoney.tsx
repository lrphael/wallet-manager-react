import "./SendMoney.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { transactionActions, State } from "../../redux/index";
import React, { useRef } from "react";
import { Transaction } from "../../models/transaction";

function SendMoney() {
	const dispatch = useDispatch();
	const { sendMoney } = bindActionCreators(transactionActions, dispatch);
	// const transactionObject = useSelector((state: State) => state.transaction);

	const fackTransactionObject: Transaction = {
		id: 1,
		userFromId: 1,
		userToId: 2,
		amount: 10,
		timestamp: '22/10/2021'
	}
	const fackTransactionObject2: Transaction = {
		id: 2,
		userFromId: 2,
		userToId: 1,
		amount: 13,
		timestamp: '23/10/2021'
	}

	let depositInput = useRef<HTMLInputElement>(null);
	let depositInput2 = useRef<HTMLInputElement>(null);
	let setDeposit = (e: any) => {
		if (depositInput.current) {
			if (depositInput.current.id === "deposit") {
				sendMoney(fackTransactionObject)
			}
		}
	};

	let setDeposit2 = (e: any) => {
		if (depositInput.current) {
			if (depositInput.current.id === "deposit") {
				sendMoney(fackTransactionObject2)
			}
		}
	};

	return (
		<div className="App">
			<h1>Transaction 1</h1>
			<br /><br />
			<input ref={depositInput} type="text" id="deposit" />
			<button onClick={setDeposit} id="btn-deposit">Depositar 1</button>
			<h1>Transaction 2</h1>
			<input ref={depositInput2} type="text" id="deposit" />
			<button onClick={setDeposit2} id="btn-deposit">Depositar 2</button>
			<br /><br />
		</div>
	);

}
export default SendMoney