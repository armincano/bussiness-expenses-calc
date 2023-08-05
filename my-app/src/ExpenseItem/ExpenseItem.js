import React from "react";
import "./ExpenseItem.css"


function ExpenseItem(props) {
    return(
        <div className="expense_item_container">
            <div className="expense_item_details">
                <h2>Expense Details</h2>
                <p>Description: {props.description}</p>
                <p>Category: {props.category}</p>
                <p>Amount: {props.amount}</p>
                <p>Date: {props.date}</p>
            </div>
        </div>
    )
}

export default ExpenseItem
