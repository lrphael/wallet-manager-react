import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators, State } from "./redux/index";

function App() {
	const dispatch = useDispatch();
	const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);
	const amount = useSelector((state: State) => state.wallet);

	return (
		<div className="App">
			<h1>{amount}</h1>
			<button onClick={() => depositMoney(100)}>Deposit</button>
			<button onClick={() => withdrawMoney(10)}>Withdraw</button>
		</div>
	)
}
export default App