import React from 'react';
import "./TrackerButton.css"

const TrackerButton = props => {
    const { text, background, buttonSize, icon, clickFunction, buttonType } = props;
    return (
        <button 
        className={`Button ${buttonSize} ${background}`}
        onClick={clickFunction}
        type={buttonType}
        >
            {text || <img src={icon} />}
        </button>
    );
};

export default TrackerButton;