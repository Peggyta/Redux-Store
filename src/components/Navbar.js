import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
import {Icon} from 'react-icons-kit';
import {home2} from 'react-icons-kit/icomoon';
import {ic_shopping_cart} from 'react-icons-kit/md/ic_shopping_cart';
import {search} from 'react-icons-kit/icomoon';

const Navbar = () => {
    const state = useSelector(state => state.cartState);
    return (
        <div className='max-w-full'>
            <header className='mt-12'>
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
                        <Link to='/register' className='buttons md:bg-lightblue px-4 py-1'>Register</Link>
                    </li>
                    <li className='mx-1'>
                        <Link to='/login' className='buttons md:bg-lightblue px-6 py-1'>Login</Link>
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
            </header>
        </div>
    );
};

export default Navbar;