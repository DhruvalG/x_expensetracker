import React from 'react';
import "../MainModal/MainModal.css"
import TrackerButton from '../TrackerButton/TrackerButton';

const ExpenseFormButtons = props => {
    const { text, toggleModal } = props;
    return (
        <div className='formButtons'>
            <TrackerButton 
            text={text} 
            background="backgroundOrange" 
            buttonSize="largeButton"
            buttonType="submit"
            />
            <TrackerButton 
            text="Cancel" 
            background="backgroundWhite" 
            buttonSize="largeButton"
            clickFunction={toggleModal}
            />
        </div>
    );
};

export default ExpenseFormButtons;