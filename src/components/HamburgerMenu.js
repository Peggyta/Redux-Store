import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {Icon} from 'react-icons-kit';
import {user} from 'react-icons-kit/fa/user';
import {menu} from 'react-icons-kit/icomoon';
import {times} from 'react-icons-kit/fa/times'
import {ic_shopping_cart} from 'react-icons-kit/md/ic_shopping_cart';
import {search} from 'react-icons-kit/icomoon';
import '../styles/Navbar.css';

const HamburgerMenu = () => {
    const[clicked, setClicked] = useState(false);
    const [open, setOpen] = useState(false);
    const state = useSelector(state=> state.cartState);
    return (
        <div className='relative'>
            <div className='md:hidden flex justify-between items-center px-10'>
                <div className='flex flex-row gap-3'>
                    <div className='relative'>
                        <Link>
                            <span className='item-counter absolute -left-2 -bottom-1 bg-cherry rounded-full text-lightblue text-sm font-bold'>{state.itemsCounter}</span>
                            <Icon className='text-rosewood' icon={ic_shopping_cart} size={30} />
                        </Link>  
                    </div>
                        <button onClick={()=> setOpen(!open)}>
                            <Icon className='text-grey' icon={user} size={22} />
                        </button>
                    <div>
                        <div className='relative'>
                            <input className='pl-8 w-36 sm:w-auto bg-lightblue rounded-md ' type='text' placeholder='search...'/>
                            <span className='absolute left-2 -top-1.5px'><Icon icon={search} size={18} /></span>
                        </div>      
                    </div>
                </div>
                <div className='relative mb-4'>
                    <button onClick={()=> setClicked(!clicked)}>
                        {clicked ? <Icon className='text-grey' icon={times} size={26} /> : <Icon className='text-grey' icon={menu} size={22} /> }
                    </button> 
                    <div className={clicked ? 'mobile-navbar': 'no-menu'}>
                        <ul className='mt-6'>
                            <li className='py-4'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='py-4'>
                                <Link to='#'>Packages</Link>
                            </li>
                            <li className='py-4'>
                                <Link to='#'>Bestselling</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={open ? 'show-login-box': 'hide-login-box'}>
                <ul>
                    <Link to='/register'><li>Register</li></Link>
                    <Link to='/login'><li>Login</li></Link>
                </ul>
            </div>
        </div>
    );
};

export default HamburgerMenu;