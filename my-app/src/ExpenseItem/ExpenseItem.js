import React from "react";
import "./ExpenseItem.css"


function ExpenseItem(props) {
    
    return(
        <div className="expense_item_container" onClick={() => props.clickedObject()}>
            <div className="expense_item_details">
                <h2>Expense Details</h2>
                <p>{`Description: ${props.selectedItem.description}`}</p>
                <p>{`Category: ${props.selectedItem.category}`}</p>
                <p>{`Amount: ${props.selectedItem.amount}`}</p>
                <p>{`Date: ${props.selectedItem.date}`}</p>
            </div>
        </div>
    )
}

export default ExpenseItem
