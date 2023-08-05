import React from "react"
function ExpenseList(props) {
   console.log(props)
    return(
        <div>
            <h2>Expense List</h2>
            <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">expenseId</th>
        <th scope="col">Description</th>
        <th scope="col">Amount</th>
        <th scope="col">Date</th>
        <th scope="col">category</th>
      </tr>
    </thead>
            <tbody>
      { 
        props.expenseList && props.expenseList.map((element) => 
        <tr 
            key = {element.expenseId} className="" > 
          <td>{element.expenseId}</td>
          <td>{element.description}</td>
          <td>{element.amount} </td>
          <td>{element.date}</td>
          <td>{element.category}</td>
        </tr>
        )}
     </tbody>
     </table>
        </div>
    )
}

export default ExpenseList