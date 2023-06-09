import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../styles/General.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import {Icon} from 'react-icons-kit';
import {home2} from 'react-icons-kit/icomoon';
import {ic_shopping_cart} from 'react-icons-kit/md/ic_shopping_cart';
import {search} from 'react-icons-kit/icomoon';

const Navbar = () => {
    const [click, setClick] = useState(false);
     // calling our state from the reduxer using useSelector hook of redux
    const state = useSelector(state => state.cartState);
    const clickHandler = () => {
        setClick(!click);
    }
    const changeHandler = event => {
        setClick(event.target.value);
    };
    return (
        <header className='mx-auto max-w-5xl hidden md:block lg:block'>
            <div className='lg:mt-12 md:mt-12 -mt-6'>
                <div className='flex items-center justify-center mb-3'>
                    <Link to='/'>
                        <img className='md:w-32 lg:w-32' src={logo} alt='logo' />
                    </Link>
                </div>
                <ul className='hidden md:block md:flex md:items-center md:justify-center text-grey mb-12'>
                    <li className='md:px-10 sm:px-4'>
                    <div className='relative'>
                        <Link to='/cart'>
                            <span className='item-counter absolute -left-2 -bottom-1 bg-cherry rounded-full text-lightblue text-sm font-bold'>{state.itemsCounter}</span>
                            <Icon icon={ic_shopping_cart} size={28} className='text-rosewood' /> Cart
                        </Link> 
                    </div>    
                    </li>
                    <li>
                        <Link to='/register' className='buttons nav-buttons lg:px-4 md:px-2 pb-2'>Register</Link>
                    </li>
                    <li className='mx-1'>
                        <Link to='/login' className='buttons nav-buttons lg:px-6 md:px-4 pb-2 '>Login</Link>
                    </li>
                        <div className='lg:mx-16 md:mr-3 md:ml-4 relative cursor-pointer' onClick={clickHandler}>
                            <input className={!click ? 'magnifier': 'default-icon'} onChange={changeHandler}  />
                            <div className='absolute top-2 left-3'><Icon icon={search} size={22} /></div>
                        </div>
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