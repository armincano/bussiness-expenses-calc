import React,{useState,useEffect} from "react"
function ExpenseList() {
   const[info, setInfo] = useState("")
    
   useEffect(() => {
    fetch("http://10.212.160.134:3000/ex2")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setInfo(data)})
    },[])
    console.log(info)
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
        info && info.map((element) => 
        <tr 
            key = {element.expenseId} className="" > 
          <td scope="row" >{element.expenseId}</td>
          <td scope="row">{element.description}</td>
          <td scope="row">{element.amount} </td>
          <td scope="row">{element.date}</td>
          <td scope="row">{element.category}</td>
        </tr>
        )}
     </tbody>
     </table>
        </div>
    )
}

export default ExpenseList