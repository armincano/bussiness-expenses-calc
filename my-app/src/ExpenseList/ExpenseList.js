import React from "react";

function ExpenseList(props) {

	

	return (
		<div>
			<h2>Expense List</h2>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">expenseId</th>
						<th scope="col">Description</th>
						<th scope="col">Amount</th>
						<th scope="col">Date</th>
						<th scope="col">category</th>
					</tr>
				</thead>
				<tbody>
					{props.expenseList.map((item, index) => {
						return (
							<tr
								key={index}
								onClick={() => props.clickedObject(item)}
							>
								<td>{item.expenseId}</td>
								<td>{item.description}</td>
								<td>{item.amount}</td>
								<td>{item.date}</td>
								<td>{item.category}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default ExpenseList;
