import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDetail from './ExpenseDetail'
import ExpenseDate from './ExpenseDate'
function ExpenseItem(props) {
<<<<<<< HEAD
  let clickMe = (e) => {
    e.target.parentElement.remove();
=======
  const [amount, setAmount] = useState(props.amount);
  let clickMe = () => {
    
    setAmount(+amount + 100);
>>>>>>> 68edf54e66d5e9b38b90d07a40ec53266e123afc
  }
  return (
    <div style={{ width: '60%', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'black', padding: '10px' }}>
      <div className='expense-item'>
        <ExpenseDate date={props.date} />
<<<<<<< HEAD
        <ExpenseDetail amount={props.amount} location={props.location} title={props.title} />
        <buton style={{ backgroundColor: 'white', cursor: 'pointer' }} onClick={clickMe}>Delete</buton>
=======
        <ExpenseDetail amount={amount} location={props.location} title={props.title} />
        <button style={{ backgroundColor: 'white', cursor: 'pointer', padding: '10px', borderRadius:'10px' ,marginLeft:'5px' }} onClick={clickMe}>Click Me</button>
>>>>>>> 68edf54e66d5e9b38b90d07a40ec53266e123afc
      </div>
    </div>
  );
}

export default ExpenseItem;
