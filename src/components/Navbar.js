import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
import {Icon} from 'react-icons-kit';
import {home2} from 'react-icons-kit/icomoon';
import {cart} from 'react-icons-kit/icomoon';
import {search} from 'react-icons-kit/icomoon';

const Navbar = () => {
    return (
        <div className='max-w-full'>
            <header className='mt-12'>
                <div className='flex items-center justify-center mb-3'>
                    <Link to='#'>
                        <img className='w-32' src={logo} alt='logo' />
                    </Link>
                </div>
                <ul className='hidden md:block md:flex md:items-center md:justify-center text-grey'>
                    <li className='md:px-10 sm:px-4'>
                        <Link to='#'>
                            <Icon icon={cart} size={22} className='text-rosewood' /> Cart
                        </Link>
                    </li>
                    <li>
                        <Link to='#' className='buttons md:bg-lightblue px-4 py-1'>Register</Link>
                    </li>
                    <li className='mx-1'>
                        <Link to='#' className='buttons md:bg-lightblue px-6 py-1'>Login</Link>
                    </li>
                    <li className='mx-16'>
                        <Link to='#'>
                            <Icon icon={search} size={22} />
                        </Link>
                    </li>
                    <li className='mx-3'>
                        <Link to='#'>Bestselling</Link>
                    </li>
                    <li className='mx-3'>
                        <Link to='#'>Packages</Link>
                    </li>
                    <li className='mx-3'>
                        <Link to='#'>Products</Link>
                    </li>
                    <li className='mx-3'>
                        <Link to='#'><Icon icon={home2} size={22} /></Link>
                    </li>
                </ul>
            </header>
        </div>
    );
};

export default Navbar;