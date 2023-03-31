import React from 'react';
import '../../styles/General.css';

const HamberScroll = (props) => {
    return (
        <div className='hamber-scroll'>
            {props.children}
        </div>
    );
};

export default HamberScroll;