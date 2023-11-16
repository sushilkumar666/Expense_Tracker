import React from 'react'
import './ExpenseItem.css'
import ExpenseDetail from './ExpenseDetail'
import ExpenseDate from './ExpenseDate'
function ExpenseItem(props) {
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetail amount={props.amount} location={props.location} title={props.title} />
    </div>
  );
}

export default ExpenseItem;
