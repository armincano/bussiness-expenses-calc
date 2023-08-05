import './App.css';
import ExpenseList from './ExpenseList/ExpenseList';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import ExpenseItem from './ExpenseItem/ExpenseItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExpenseList/>
        <ExpenseForm/>
        <ExpenseItem/>
      </header>

    </div>
  );
}

export default App;
