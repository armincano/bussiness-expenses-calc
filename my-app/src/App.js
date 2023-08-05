
import "./App.css";
import ExpenseList from "./ExpenseList/ExpenseList";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import React, { useEffect, useState } from "react";

function App() {
	const [expenseList, setExpenseList] = useState("");

	const [selectedItem, setSelectedItem] = useState({
		expenseId: "",
		description: "",
		amount: "",
		date: "",
		category: "",
	});

	useEffect(() => {
		fetch("http://10.212.160.134:3000/ex2")
			.then((res) => res.json())
			.then((data) => setExpenseList(data));
	}, []);

	function handleSubmit(obj) {
		expenseList.concat(obj);
	}

	function clickedItem(expenseId) {
		setSelectedItem(
			expenseList.filter(i => i.expenseId)
		)
	}

	return (
		<div className="App">
			<div className="App-header">
				<ExpenseList expenseList={expenseList} clickedItem={clickedItem} />
				<ExpenseForm onExpenseCreated={handleSubmit}
				/>
				{/* <ExpenseItem selectedItem={selectedItem}/> */}
			</div>
		</div>
	);
}

export default App;
