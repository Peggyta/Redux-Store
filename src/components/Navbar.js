import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import {Icon} from 'react-icons-kit';
import {home2} from 'react-icons-kit/icomoon';
import {ic_shopping_cart} from 'react-icons-kit/md/ic_shopping_cart';
import {search} from 'react-icons-kit/icomoon';

const Navbar = () => {
     // calling our state from the reduxer using useSelector hook of redux
    const state = useSelector(state => state.cartState);
    return (
        <header className='max-w-full'>
            <div className='mt-12'>
                <div className='flex items-center justify-center mb-3'>
                    <Link to='/'>
                        <img className='w-32' src={logo} alt='logo' />
                    </Link>
                </div>
                <ul className='hidden md:block md:flex md:items-center md:justify-center text-grey'>
                    <li className='md:px-10 sm:px-4'>
                    <div className='relative'>
                        <Link to='/cart'>
                            <span className='item-counter absolute -left-2 -bottom-1 bg-cherry rounded-full text-lightblue text-sm font-bold'>{state.itemsCounter}</span>
                            <Icon icon={ic_shopping_cart} size={28} className='text-rosewood' /> Cart
                        </Link> 
                    </div>    
                    </li>
                    <li>
                        <Link to='/register' className='buttons nav-buttons px-4'>Register</Link>
                    </li>
                    <li className='mx-1'>
                        <Link to='/login' className='buttons nav-buttons px-6 '>Login</Link>
                    </li>
                    <li className='mx-16'>
                        <Link to='#'>
                            <Icon icon={search} size={22} />
                        </Link>
                    </li>
                    <li className='mx-3'>
                        <Link to='/bestselling'>Bestselling</Link>
                    </li>
                    <li className='mx-3'>
                        <Link to='/packages'>Packages</Link>
                    </li>
                    <li className='mx-3'>
                        <Link to='/products'>Products</Link>
                    </li>
                    <li className='mx-3'>
                        <Link to='/'><Icon icon={home2} size={22} /></Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;