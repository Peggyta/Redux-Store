import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Icon} from 'react-icons-kit';
import {menu} from 'react-icons-kit/icomoon';
import {times} from 'react-icons-kit/fa/times'
import {cart} from 'react-icons-kit/icomoon';
import {search} from 'react-icons-kit/icomoon';
import '../styles/Navbar.css';

const HamburgerMenu = () => {
    const[clicked, setClicked] = useState(false);

    return (
        <div>
            <div className='md:hidden flex justify-between items-center px-6'>
                <div className='flex flex-row gap-3'>
                    <div>
                        <Icon className='text-rosewood' icon={cart} size={22} />
                    </div>
                    <div>
                        <div className='relative'>
                            <input className='pl-8 bg-lightblue rounded-md' type='text' placeholder='search...'/>
                            <span className='absolute left-2 -top-1.5px'><Icon icon={search} size={18} /></span>
                        </div>      
                    </div>
                </div>
                <div className='relative'>
                    <button onClick={()=> setClicked(!clicked)}>
                        {clicked ? <Icon className='text-grey' icon={times} size={26} /> : <Icon className='text-grey' icon={menu} size={22} /> }
                    </button> 
                    <div className={clicked ? 'mobile-navbar': 'no-menu'}>
                        <ul>
                            <li className='py-2'>
                                <Link to='#'>Home</Link>
                            </li>
                            <li className='py-2'>
                                <Link to='#'>Login</Link>
                            </li>
                            <li className='py-2'>
                                <Link to='#'>Register</Link>
                            </li>
                            <li className='py-2'>
                                <Link to='#'>Packages</Link>
                            </li>
                            <li className='py-2'>
                                <Link to='#'>Bestselling</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HamburgerMenu;