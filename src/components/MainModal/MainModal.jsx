import React, { useState } from 'react';
import "./MainModal.css"
import ExpenseFormButtons from '../ExpenseFormButtons/ExpenseFormButtons';
import MainModalForm from './MainModalForm';

const MainModal = props => {
    const { toggleModal, text, existingData } = props;
    
    return (
        <div className='Modal' onClick={toggleModal}>
            <div className='modalBody' onClick={e => e.stopPropagation()}>
                <div className='modalHead'>{text}</div>
                <MainModalForm existingData={existingData} formType={text} toggleModal={toggleModal}/>
            </div>
        </div>
    );
};

export default MainModal;