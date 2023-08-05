
import "./App.css";
import ExpenseList from "./ExpenseList/ExpenseList";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import React, { useEffect, useState } from "react";

function App() {
	const [expenseList, setExpenseList] = useState([]);

	const [selectedItem, setSelectedItem] = useState(false);

	useEffect(() => {
		fetch("http://10.212.160.134:3000/ex2")
			.then((res) => res.json())
			.then((data) => setExpenseList(data));
	}, []);

	
		/* 	function clickedItem(expenseId) {
		setSelectedItem(
			expenseList.filter(i => i.expenseId)
			)
		}
		 */
	function handleSubmit(obj) {
		setExpenseList([...expenseList, obj]) 
		}

	function handleSelectItem() {

	}

	return (
		<div className="App">
			<div className="App-header">
				<ExpenseList expenseList={expenseList} onClick={handleSelectItem}/>
				<ExpenseForm onExpenseCreated={handleSubmit}/>
				<ExpenseItem selectedItem={selectedItem}/>
			</div>
		</div>
	);
}

export default App;
