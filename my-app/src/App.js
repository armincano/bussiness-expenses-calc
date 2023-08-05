import React,{useState, useEffect} from 'react';
import './App.css';
import ExpenseList from './ExpenseList/ExpenseList';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import ExpenseItem from './ExpenseItem/ExpenseItem';

function App() {
  const[info, setInfo] = useState("")
   useEffect(() => {
    fetch("http://10.212.160.134:3000/ex2")
    .then(response => response.json())
    .then(data => {
        setInfo(data)})
    },[])
    console.log(info)
  return (
    <div className="App">
      <header className="App-header">
        <ExpenseList expenseList={info}/>
        <ExpenseForm />
        <ExpenseItem/>
      </header>

    </div>
  );
}

export default App;
