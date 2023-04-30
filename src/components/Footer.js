import React from 'react';
import footer from '../images/footer.png';
import logo2 from '../images/logo2.png';
import Icon from 'react-icons-kit';
import {whatsapp} from 'react-icons-kit/icomoon/whatsapp';
import {instagram} from 'react-icons-kit/icomoon/instagram';
import {facebook} from 'react-icons-kit/icomoon/facebook';

const Footer = () => {
    return (
        <footer className='relative mt-12 flex items-center flex-col max-w-full mx-auto'>
            <img className=' w-full' src={footer} alt='footer' />
            <div className='absolute -top-3 lg:top-35px lg:top-6 md:top-2 sm:top-2 flex justify-center w-full '>
                <img className='w-24 md:w-40 lg:w-48 sm:w-28  ' src={logo2} alt='logo' />
            </div>
            <div className='h-auto bg-navy w-full text-cement lg:pt-6 md:pt-6'>
                <div className='lg:w-2/3 w-3/4 sm:pt-4 md:pt-4 mx-auto pt-12 '>
                    <p className=' text-center mt-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    aliqua. Ut enim ad minimniam quis nostrud exercitation
                    </p>
                </div>
                <div className='flex flex-col items-center lg:flex-row md:flex-row justify-between lg:w-1/2 md:w-2/4 md:pt-6 mx-auto lg:pt-6 w-4/6 pt-4'>
                    <div>
                        <p className='mb-3 md:mb-0 lg:mb-0'>Phone Number: <span className='text-lightblue'>00-12345678</span></p>
                    </div>
                    <div className='flex gap-6 cursor-pointer'>
                        <Icon icon={facebook} size={22} />
                        <Icon icon={instagram} size={22} />
                        <Icon icon={whatsapp} size={22} />
                    </div>
                </div>
                    <p className='text-center text-xs text-grey italic pb-2 pt-12 md:pt-10 sm:pt-6'>Development by Peggyta</p>
            </div>
        </footer>
    );
};

export default Footer;