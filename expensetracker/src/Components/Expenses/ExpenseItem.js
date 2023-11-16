import React from 'react'
import './ExpenseItem.css'
import ExpenseDetail from './ExpenseDetail'
import ExpenseDate from './ExpenseDate'
function ExpenseItem(props) {
  let clickMe = () => {
    console.log('clicked Me');
  }
  return (
    <div style={{ width: '60%', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'black', padding: '10px' }}>
      <div className='expense-item'>
        <ExpenseDate date={props.date} />
        <ExpenseDetail amount={props.amount} location={props.location} title={props.title} />
        <buton style={{ backgroundColor: 'white', cursor: 'pointer' }} onClick={clickMe}>Click Me</buton>
      </div>
    </div>
  );
}

export default ExpenseItem;
