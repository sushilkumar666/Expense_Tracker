import {useState} from 'react'

const ExpenseForm =()=> {
    const[enteredtitle , setEnteredtitle ] = useState('');
    const[enteredAmount , setEnteredAmount ] = useState('');

    const[enteredDate , setEnteredDate ] = useState('');


    const onTitleChange = (e) =>{
        console.log(e.target.value);
    }

    const onAmountChange = (e) =>{
        console.log(e.target.value);
    }

    const onDateChange = (e) =>{
        console.log(e.target.value);
    }



    return(
        <form >
            <label htmlFor="title">Expense Title</label>
            <input id="title" onChange={onTitleChange} /> <br />
            <label htmlFor="amount">Expense Amount</label>
            <input id="amount"  onChange={onAmountChange} /> <br />
            <label htmlFor="date">Date</label>
            <input type="date" min='2019-01-01' max='2023-12-31'  onChange={onDateChange} id="date" /> <br />
            <button type='submit'>Add</button>
           

        </form>
    )
}

export default ExpenseForm

