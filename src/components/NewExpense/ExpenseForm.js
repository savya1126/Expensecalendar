import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props)
{ 
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput,setUserInput] =useState({
    //     enteredTitle = '',
    //     enteredAmount = '',
    //     enteredDate = '';
    // });

    function titleChangeHandler(event)
    {
        setEnteredTitle(event.target.value);
    };

    function amountChangeHandler(event)
    {
        setEnteredAmount(event.target.value);
    };
    function dateChangeHandler(event)
    {
        setEnteredDate(event.target.value);
    };

    function submitHandler(event){
       event.preventDefault();

       const expenseData = {
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate)
       }
       props.onSaveExpenseData(expenseData);
       setEnteredTitle('');
       setEnteredAmount('');
       setEnteredDate('');
    }
    return(
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min="2020-03-19" max="2024-02-17" onChange={dateChangeHandler}/>
            </div>
        </div>
        <button type="submit">Add Expense</button>

        </form>
    )
}

export default ExpenseForm;