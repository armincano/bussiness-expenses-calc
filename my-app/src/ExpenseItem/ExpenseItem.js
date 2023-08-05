import React from "react";
import "./ExpenseItem.css"


function ExpenseItem({selectedItem}) {
    return(
        <div className="expense_item_container">
            <div className="expense_item_details">
                <h2>Expense Details</h2>
                <p>Description: {selectedItem.description}</p>
                <p>Category: {selectedItem.category}</p>
                <p>Amount: {selectedItem.amount}</p>
                <p>Date: {selectedItem.date}</p>
            </div>
        </div>
    )
}

export default ExpenseItem
