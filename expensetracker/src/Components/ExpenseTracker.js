import React from 'react'
import './ExpenseTracker.css'
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toLocaleString()}</div>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2 className='locationOfExpenditure'>{props.location}</h2>


        <div className="expense-item__price">Rs {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
