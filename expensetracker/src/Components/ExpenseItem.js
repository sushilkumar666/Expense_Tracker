import React, { useState } from 'react'
import './ExpenseItem.css'
import Card from './UI/Card';

import ExpenseDetail from './ExpenseDetail'
import ExpenseDate from './ExpenseDate'
function ExpenseItem(props) {
  const [amount, setAmount] = useState(props.amount);
  let clickMe = () => {

    setAmount(+amount + 100);
  }
  return (
    <Card className='expense-item' style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}>

      <div className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description '>
          <ExpenseDetail amount={props.amount} location={props.location} title={props.title} />
        </div>
        <button style={{ backgroundColor: 'white', cursor: 'pointer', padding: '10px', borderRadius: '10px', marginLeft: '5px' }} onClick={clickMe}>Click Me</button>
      </div>

    </Card>
  );
}

export default ExpenseItem;
