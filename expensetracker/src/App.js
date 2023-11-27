import logo from './logo.svg';
import ExpenseItem from './Components/ExpenseItem'
import NewExpense from './Components/NewExpense';
import { useState } from 'react';
import ExpenseFilter from './Components/Expenses/ExpenseFilter';
import './Components/ExpenseItem.css'



function App(props) {

  const [expenses, setExpenses] = useState([


    {
      title: 'car Insurance',
      date: new Date(),
      location: 'mumbai',
      amount: '1500'
    },
    {
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
    },
  ])




  const addExpenseHandler = expense => {
    // Update state using the functional form of setState
    setExpenses(prevExpenses => [expense, ...prevExpenses]);
  };

  const [year, setYear] = useState('2022');

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

      {filteredExpenses.map((element) => (
        <ExpenseItem title={element.title} date={element.date} location={element.location} amount={Math.floor(Math.random() * (5000 - 1000) + 1000)}></ExpenseItem >
      ))}



    </>
  );
}

export default App;