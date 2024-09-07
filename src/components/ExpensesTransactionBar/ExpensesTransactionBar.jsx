import React, { useContext, useState } from 'react';
import "./ExpensesTransactionBar.css"
import foodIcon from "../../assets/food.svg";
import movieIcon from "../../assets/movie.svg";
import travelIcon from "../../assets/travel.svg";
import deleteIcon from "../../assets/closeIcon.svg";
import editIcon from "../../assets/editIcon.svg";
import TrackerButton from '../TrackerButton/TrackerButton';
import MainModal from '../MainModal/MainModal';
import { MoneyContext, TransactionsContext } from '../../Contexts/mainContext';


const ExpensesTransactionBar = props => {
    const { name, date, amount, category, id } = props;
    const [money, setMoney] = useContext(MoneyContext);
    const [transactionData, setTransactionData] = useContext(TransactionsContext);
    const [modalOn, setModalOn] = useState(false);
    const toggleModal = () => setModalOn(!modalOn);
    const selectIcon = () => {
        if(category === "food") return foodIcon;
        if(category === "entertainment") return movieIcon;
        if(category === "travel") return travelIcon;
    }
    const deleteTransaction = () => {
        const indexOfTransaction = transactionData.findIndex(item => id === item.id);

        const newBalance = money.balance + Number(amount);
        const newExpense = money.expenses - Number(amount);

        transactionData.splice(indexOfTransaction, 1);

        setTransactionData([...transactionData]);
        setMoney({balance: newBalance, expenses: newExpense});
    }
    return (
        <div className='TransactionBar'>
            <span className='transactionIcon'>
                <img src={selectIcon()}/>
            </span>
            <span className='TransactionBarBody'>
                <span className='TransactionText'>
                    <span className='TransactionName'>{name}</span>
                    <span className='TransactionDate'>{date}</span>
                </span>
                <span className='TransactionAmount cardTextRed'>₹{amount}</span>
            </span>
            <TrackerButton icon={deleteIcon} buttonSize="smallButton" background="backgroundRed" clickFunction={deleteTransaction}/>
            <TrackerButton icon={editIcon} buttonSize="smallButton" background="backgroundOrange" clickFunction={toggleModal} />
            {modalOn ? 
                <MainModal 
                toggleModal={toggleModal} 
                text="Edit Expense"
                existingData={{name, date, amount, category, id}}
                /> 
            :null
            }
        </div>
    );
};

export default ExpensesTransactionBar;