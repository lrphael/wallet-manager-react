import "./InputValue.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators, State } from "../../redux/index";
import React, { useRef } from "react";

function InputValue() {
	const dispatch = useDispatch();
	const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);
	const amount = useSelector((state: State) => state.wallet);

	let depositInput = useRef<HTMLInputElement>(null);
	let withdrawInput = useRef<HTMLInputElement>(null);

	let setDeposit = (e: any) => {
		if (depositInput.current) {
			if (depositInput.current.id === "deposit") {
				depositMoney(parseInt(depositInput.current.value))
			}
		}
	};

	let setWithdraw = (e: any) => {
		if (withdrawInput.current) {
			if (withdrawInput.current.id === "withdraw") {
				withdrawMoney(parseInt(withdrawInput.current.value))
			}
		}
	};

	return (
		<div className="App">
			<h1>{amount}</h1>
			<br /><br />
			<input ref={depositInput} type="text" id="deposit" />
			<button onClick={setDeposit} id="btn-deposit">Depositar</button>
			<br /><br />
			<input ref={withdrawInput} type="text" id="withdraw" />
			<button onClick={setWithdraw} id="btn-withdraw">Remover</button>
		</div>
	);

}
export default InputValue