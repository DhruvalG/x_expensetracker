import React from 'react';
//styles
import "./TrackerHead.css"

//components
import TrackerCard from '../TrackerCard/TrackerCard';
import MainPieChartComp from '../MainPieChart/MainPieChart';

const TrackerHead = props => {
    //props
    const { balance, expenses } = props;
    return (
        <header className='AppHead'>
            <TrackerCard text="Wallet balance" value={balance}/>
            <TrackerCard text="Expenses" value={expenses}/>
            <MainPieChartComp />
        </header>
    );
};

export default TrackerHead;