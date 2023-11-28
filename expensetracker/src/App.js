import logo from './logo.svg';
import ExpenseItem from './Components/ExpenseItem'
import NewExpense from './Components/NewExpense';
import { useState } from 'react';
import ExpenseFilter from './Components/Expenses/ExpenseFilter';
import ExpensesChart from './Components/Expenses/ExpensesChart';
import './Components/ExpenseItem.css'



function App(props) {

  const [expenses, setExpenses] = useState([


    {
      title: 'car Insurance',
      date: new Date(),
      location: 'mumbai',
      amount: '100'
    },
    {
      title: 'car Insurance',
      date: new Date('2,3,2023'),
      location: 'mumbai',
      amount: '1500'
    }, {
      title: 'car Insurance',
      date: new Date(),
      location: 'mumbai',
      amount: '1500'
    }, {
      title: 'car Insurance',
      date: new Date(),
      location: 'mumbai',
      amount: '1500'
    }, {
      title: 'car Insurance',
      date: new Date(),
      location: 'mumbai',
      amount: '1500'
    }, {
      title: 'car Insurance',
      date: new Date(),
      location: 'mumbai',
      amount: '1500'
    }, {
      title: 'car Insurance',
      date: new Date(),
      location: 'mumbai',
      amount: '1500'
    }, {
      title: 'car Insurance',
      date: new Date(),
      location: 'mumbai',
      amount: '1500'
    }, {
      title: 'car Insurance',
      date: new Date(),
      location: 'mumbai',
      amount: '1500'
    }, {
      title: 'car Insurance',
      date: new Date(),
      location: 'mumbai',
      amount: '1500'
    }, {
      title: 'car Insurance',
      date: new Date(),
      location: 'mumbai',
      amount: '1500'
    }, {
      title: 'car Insurance',
      date: new Date(),
      location: 'mumbai',
      amount: '1500'
    }, {
      title: 'car Insurance',
      date: new Date(),
      location: 'mumbai',
      amount: '1500'
    }
  ])




  const addExpenseHandler = expense => {
    // Update state using the functional form of setState
    setExpenses(prevExpenses => [expense, ...prevExpenses]);
  };

  const [year, setYear] = useState('2023');

  const updatedYear = (carrier) => {
    setYear(carrier);
  }

  let filteredExpenses = expenses.filter((expense) => expense.date.getFullYear().toString() == year);
  console.log(filteredExpenses)
  // console.log(expenses)
  // console.log('sushl')
  // console.log(expenses[0].date.getFullYear())



  return (

    <>
      <h1>Let's get started</h1>
      <NewExpense className='expense-item__description' onAddExpense={addExpenseHandler} />
      <ExpenseFilter onChangeFilter={updatedYear} />
      {/* <ExpensesChart Expenses={filteredExpenses} ></ExpensesChart> */}
      {/* {filteredExpenses.length > 0 ? 'sushil' : 'sushilwa'} */}
      {filteredExpenses.length > 0 ? filteredExpenses.map((element) => (
        <ExpenseItem title={element.title} date={element.date} location={element.location} amount={element.amount}></ExpenseItem >
      )) : <h2 style={{ textAlign: 'center', backgroundColor: '#40005d', color: 'white', padding: '20px', width: '60%', borderRadius: '10px', marginLeft: 'auto', marginRight: 'auto' }}>NO Expenses Found</h2>}
      {filteredExpenses.length == 1 && filteredExpenses.map((element) => (<div>

        <p style={{ textAlign: 'center', backgroundColor: '#40005d', color: 'white', padding: '10px', width: '60%', borderRadius: '10px', marginLeft: 'auto', marginRight: 'auto' }}>Only single Expense here. Please add more..</p> </div>
      ))}
    </>
  );
}

export default App;