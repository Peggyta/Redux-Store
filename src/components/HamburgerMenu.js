import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {Icon} from 'react-icons-kit';
import {user} from 'react-icons-kit/fa/user';
import {menu} from 'react-icons-kit/icomoon';
import {times} from 'react-icons-kit/fa/times'
import {ic_shopping_cart} from 'react-icons-kit/md/ic_shopping_cart';
import {search} from 'react-icons-kit/icomoon';
import '../styles/Navbar.css';
import { fetchProducts } from '../redux/products/productsAction';
import HamberScroll from './shared/HamberScroll';
import SearchList from './SearchList';

const HamburgerMenu = () => {
    const dispatch = useDispatch();
    const[clicked, setClicked] = useState(false);
    const [open, setOpen] = useState(false);
    const productsState = useSelector(state => state.productsState);
    const state = useSelector(state=> state.cartState);
    const [searchItem, setSearchItem] = useState('');
    const [products, setProducts] = useState([]);
    const [showSearch, setShowSearch] = useState(false);

    const searchHandler = event => {
        setSearchItem(event.target.value);
        if(event.target.value === '') {
            setShowSearch(false);
        } else {
            setShowSearch(true);
        }
    };
    console.log(searchHandler)

    const searchProduct = productsState.products.filter(item => item.title.toLowerCase().includes(searchItem.toLowerCase()));
   function searchList () {
    if(showSearch) {
        return (
            <HamberScroll>
                <SearchList searchProduct={searchProduct} />
            </HamberScroll>
            )
        }
   }
    
    useEffect(()=> {
        setProducts(productsState);
        if(!productsState.products.lenght)dispatch(fetchProducts());
    },[]);
    
    return (
        <div className='relative max-w-md mx-auto mt-6'>
            <div className='md:hidden flex justify-between items-center px-10'>
                <div className='flex flex-row gap-3'>
                    <div className='relative'>
                        <Link to='/cart'>
                            <span className='item-counter absolute -left-2 -bottom-1 bg-cherry rounded-full text-lightblue text-sm font-bold'>{state.itemsCounter}</span>
                            <Icon className='text-rosewood' icon={ic_shopping_cart} size={30} />
                        </Link>  
                    </div>
                        <button onClick={()=> setOpen(!open)}>
                            <Icon className='text-grey' icon={user} size={22} />
                        </button>
                    <div>
                        <div className='relative'>
                            <input className='pl-8 shadow-lg py-1 w-36 sm:w-48 rounded-xl sm:w-auto  rounded-md pr-2' value={searchItem} onChange={searchHandler} type='search' placeholder='search...'/>
                            <span className='absolute left-2 top-1.5px text-grey'><Icon icon={search} size={18} /></span>
                        </div> 
                    </div>
                </div>
                <div className='relative mb-0'>
                    <button onClick={()=> setClicked(!clicked)}>
                        {clicked ? <Icon className='text-grey' icon={times} size={26} /> : <Icon className='text-grey' icon={menu} size={22} /> }
                    </button> 
                    <div className={clicked ? 'mobile-navbar': 'no-menu'}>
                        <ul className='mt-6'>
                            <li className='py-4'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='py-4'>
                                <Link to='/products'>Products</Link>
                            </li>
                            <li className='py-4'>
                                <Link to='/packages'>Packages</Link>
                            </li>
                            <li className='py-4'>
                                <Link to='/bestselling'>Bestselling</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='absolute left-28 z-10 bg-lightblue'>
                {searchList()}
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