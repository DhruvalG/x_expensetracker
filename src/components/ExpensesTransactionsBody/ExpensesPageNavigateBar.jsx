import React from 'react';
import "./ExpensesTransactionsBody.css"
import leftArrowIcon from "../../assets/leftArrow.svg";
import rightArrowIcon from "../../assets/rightArrow.svg";
import TrackerButton from '../TrackerButton/TrackerButton';

const ExpensesPageNavigateBar = props => {
    const {pages, updatePage} = props;
    return ( 
        <div className='TransactionBar PageNavigateBar'>
            <TrackerButton 
            icon={leftArrowIcon} 
            buttonSize="smallButton" 
            background={pages.currentPage === 1 ? "" : "shadow"} 
            clickFunction={()=> updatePage("left")}
            />
            <TrackerButton 
            text={pages.currentPage} 
            buttonSize="mediumButton" 
            background="backgroundDarkGreen" 
            />
            <TrackerButton 
            icon={rightArrowIcon} 
            buttonSize="smallButton" 
            background={pages.currentPage === pages.totalPages ? "" : "shadow"} 
            clickFunction={()=> updatePage("right")}
            />
        </div>
    );
};

export default ExpensesPageNavigateBar;