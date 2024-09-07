import React from 'react';
import "./ExpensesTransactions.css";
import ExpensesTransactionsBody from '../ExpensesTransactionsBody/ExpensesTransactionsBody';

const ExpensesTransactions = () => {
    return (
        <div className='Transactions'>
            <h2>Recent Transactions</h2>
            <ExpensesTransactionsBody />
        </div>
    );
};

export default ExpensesTransactions;