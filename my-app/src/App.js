import "./App.css";
import ExpenseList from "./ExpenseList/ExpenseList";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import React, { useEffect, useState } from "react";
import DummyList from "./Dummy/dummyList.json";

function App() {
	const [expenseList, setExpenseList] = useState(null);

	const [clickedId, setClickedId] = useState(null);

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

	// function handleChange(e) {
	// 	const { expenseId, description, amount, date, category } = e.target;
	// 	setFormData((prevFormData) => ({
	// 		...prevFormData,
	// 		[expenseId]: expenseId,
	// 		[description]: description,
	// 		[amount]: amount,
	// 		[date]: date,
	// 		[category]: category,
	// 	}));
	// }

	function handleSubmit(obj) {
		expenseList.concat(obj);
	}

	function clickedItem(id) {
		setClickedId(id);
		
	}



	return (
		<div className="App">
			<div className="App-header">
				<ExpenseList expenseList={expenseList} clickedItem={clickedItem} />
				<ExpenseForm
					onExpenseCreated={handleSubmit}
				/>
				<ExpenseItem selectedItem={selectedItem}/>
			</div>
		</div>
	);
}

export default App;
