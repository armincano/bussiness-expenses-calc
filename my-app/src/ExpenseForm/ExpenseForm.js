import React, { useState } from "react"

function ExpenseForm(props) {

    const [valueDes,SetvalueDes] = useState("")
    const [valueAmount,SetvalueAmount] = useState("")
    const [valueDate,SetvalueDate] = useState("")
    const [valueCategory,SetvalueCategory] = useState("")

    function onChangeSubmit(event){
        event.preventDefault()
        props.onExpenseCreated(
            {
                "description": valueDes,
                "amount":  valueAmount,
                "date":  valueDate,
                "category": valueCategory
            }
        )
        SetvalueDes(""); 
        SetvalueAmount(""); 
        SetvalueDate("");
        SetvalueCategory("");
    }

    const changeInputDes = (event) => {
        SetvalueDes(event.target.value)
    }
    const changeInputAmount = (event) => {
        SetvalueAmount(event.target.value)
    }
    const changeInputDate = (event) => {
        SetvalueDate(event.target.value)
    }
    const changeInputCategoty = (event) => {
        SetvalueCategory(event.target.value)
    }

    return(<form onSubmit={onChangeSubmit}>
        <h3>Add your expense</h3>
        <input value = {valueDes} type = "text" placeholder = "Description" onChange={changeInputDes}></input>
        <input value = {valueAmount} type = "number" placeholder="Amount" onChange={changeInputAmount}></input>
        <input value = {valueDate} type = "text" placeholder="Date" onChange={changeInputDate}></input>
        <input value = {valueCategory} type = "text" placeholder="Category"onChange={changeInputCategoty}></input>
        <button>Add Expense</button>
    </form>
    )
}

export default ExpenseForm