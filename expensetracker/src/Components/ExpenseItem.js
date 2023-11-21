import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDetail from './ExpenseDetail'
import ExpenseDate from './ExpenseDate'
function ExpenseItem(props) {
  const [amount, setAmount] = useState(props.amount);
  let clickMe = () => {
    
    setAmount(+amount + 100);
  }
  return (
    <div style={{ width: '60%', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'black', padding: '10px' }}>
      <div className='expense-item'>
        <ExpenseDate date={props.date} />
        <ExpenseDetail amount={amount} location={props.location} title={props.title} />
        <button style={{ backgroundColor: 'white', cursor: 'pointer', padding: '10px', borderRadius:'10px' ,marginLeft:'5px' }} onClick={clickMe}>Click Me</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
