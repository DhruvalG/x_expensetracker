import React, { useState } from 'react';
import "./TrackerCard.css"
import TrackerButton from '../TrackerButton/TrackerButton';
import MainModal from '../MainModal/MainModal';

const TrackerCard = props => {
    const { text, value} = props;
    const [modalOn, setModalOn] = useState(false);
    const toggleModal = () => setModalOn(!modalOn);

    return (
        <div className='card'>
            <span className='cardText'>
                <span>{text}: </span> 
                <span className={text === "Expenses" ? "cardTextRed" : "cardTextGreen"}>
                    ₹{value}
                </span>
            </span>
            <TrackerButton 
                text={text === "Expenses" ? "+ Add Expense" : "+ Add Income"}
                background={text === "Expenses" ? "gradientRed" : "gradientGreen"}
                buttonSize = "largeButton"
                clickFunction={toggleModal}
            />
            {modalOn ? 
                <MainModal 
                toggleModal={toggleModal} 
                text={text === "Expenses" ? "Add Expense" : "Add Balance"}/> 
            :null
            }
        </div>
    );
};

export default TrackerCard;