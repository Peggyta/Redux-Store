import React from 'react';
import '../../styles/Navbar.css';

const Scroll = (props) => {
    return (
        <div className='scroll text-left mt-2 bg-lightblue'>
            {props.children}
        </div>
    );
};

export default Scroll;