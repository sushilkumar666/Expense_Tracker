import logo from './logo.svg';
import ExpenseItem from './Components/ExpenseItem'
import NewExpense from './Components/NewExpense';
import { useState } from 'react';
import ExpenseFilter from './Components/Expenses/ExpenseFilter';


function App() {

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



  return (

    <>
      <h1>Let's get started</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseFilter />

      {expenses.map((element) => (
        <ExpenseItem title={element.title} date={element.date} location={element.location} amount={Math.floor(Math.random() * (5000 - 1000) + 1000)}></ExpenseItem >
      ))}



    </>
  );
}

export default App;