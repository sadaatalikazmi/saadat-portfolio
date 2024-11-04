import React from 'react';
import '../assets/styles/techCardStyles.css';

const TechCard = ({ techName, techIcon }) => {
    return (
        <div className='flip-container'>
            <div className='flipper'>
                <div id={`${techName}_icon`} className='front'>{techIcon}</div>
                <div className='back'>{techName}</div>
            </div>
        </div>
    );
};

export default TechCard;