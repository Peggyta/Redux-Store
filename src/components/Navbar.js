import {Icon} from 'react-icons-kit';
import {home2} from 'react-icons-kit/icomoon';
import {cart} from 'react-icons-kit/icomoon';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <header className='mt-24'>
                <ul className='md:flex md:items-center md:justify-center'>
                    <li className='mx-5'>
                        <Link to='#'>Register</Link>
                    </li>
                    <li className='mx-5'>
                        <Link to='#'>Login</Link>
                    </li>
                    <li className='mx-5'>
                        <Link to='#'>Bestselling</Link>
                    </li>
                    <li className='mx-5'>
                        <Link to='#'>Packages</Link>
                    </li>
                    <li className='mx-5'>
                        <Link to='#'>Products</Link>
                    </li>
                </ul>
            </header>
        </div>
    );
};

export default Navbar;