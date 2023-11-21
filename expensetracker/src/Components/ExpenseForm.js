import {useState} from 'react'

const ExpenseForm =()=> {
    const[title, setTitle] = useState('');
    const[amount, setAmount] = useState('');

    const[Date, setDate] = useState('');


    const change = (e) =>{
        console.log(e.target.value);
    }
    return(
        <form >
            <label htmlFor="title">Expense Title</label>
            <input id="title" onChange={change} /> <br />
            <label htmlFor="amount">Expense Amount</label>
            <input id="amount"  onChange={change} /> <br />
            <label htmlFor="amount">Date</label>
            <input type="date"  onChange={change} id="amount" />
           

        </form>
    )
}

export default ExpenseForm

