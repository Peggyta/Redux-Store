import React from 'react';
import footer from '../images/footer.png';
import logo2 from '../images/logo2.png';

const Footer = () => {
    return (
        <div className='relative'>
            <img className='hidden md:block sm:block' src={footer} alt='footer' />
            <div className='absolute top-2 lg:top-35px md:top-2 sm:top-2 flex justify-center w-full '>
                <img className='w-28 lg:w-48  md:w-40' src={logo2} alt='logo' />
            </div>
            <div className='h-32 bg-navy'></div>
        </div>
    );
};

export default Footer;