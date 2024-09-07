import React from 'react';
import "../ExpensesTransactions/ExpensesTransactions.css";
import ExpenseTopBody from '../ExpenseTopBody/ExpenseTopBody';

const ExpensesTop = () => {
    return (
        <div className='Transactions'>
            <h2>Top Expenses</h2>
            <ExpenseTopBody />
        </div>
    );
};

export default ExpensesTop;