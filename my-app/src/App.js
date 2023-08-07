
import "./App.css";
import ExpenseList from "./ExpenseList/ExpenseList";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import React, { useEffect, useState } from "react";
import DummyList from "./Dummy/dummyList.json"

function App() {
	const [expenseList, setExpenseList] = useState(null);
	
	useEffect(()=>{
		setExpenseList(DummyList)
	},[])
	// useEffect(() => {
	// 	fetch("http://10.212.160.134:3000/ex2")
	// 		.then((res) => res.json())
	// 		.then((data) => setExpenseList(data));
	// }, []);

	const [selectedItem, setSelectedItem] = useState(null);
	const [rowSelection, setRowSelection] = useState("hidden")
	
	function toggleSelection() {
		return (rowSelection === "hidden") ? setRowSelection("expense_item_details"): setRowSelection("hidden")
	}

	function clickedObject(obj) {
		setSelectedItem(obj)
		toggleSelection()
	}

	function handleSubmit(obj) {
		let expenseIdLastItem = parseInt(expenseList.at(-1).expenseId)
		let newObj = {expenseId: (expenseIdLastItem+1).toString(),...obj}
		setExpenseList(expenseList.concat(newObj))
		console.log(expenseList);
	}

	return (
		<div className="App">
			<div className="App-header">
				{expenseList && <ExpenseList expenseList={expenseList} clickedObject={clickedObject} />}
				<ExpenseForm
					onExpenseCreated={handleSubmit}
				/>
				{rowSelection==="expense_item_details" && <ExpenseItem selectedItem={selectedItem} className={rowSelection} clickedObject={toggleSelection}/>}
			</div>
		</div>
	);
}

export default App;
