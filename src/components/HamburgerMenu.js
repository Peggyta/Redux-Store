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
import Product from './shared/Product';
import Loader from './shared/Loader';

const HamburgerMenu = () => {
    const dispatch = useDispatch();
    const[clicked, setClicked] = useState(false);
    const [open, setOpen] = useState(false);
    const [loadMore, setLoadMore] = useState(8);
    const productsState = useSelector(state => state.productsState);
    const state = useSelector(state=> state.cartState);
    const [searchItem, setSearchItem] = useState('');
    const [products, setProducts] = useState([]);

    const searchHandler = event => {
        setSearchItem(event.target.value)
    };

    const loadHandler = () => {
        setLoadMore((prevValue)=> prevValue+8);
    };

    const searchProduct = productsState.products.filter(item => item.title.toLowerCase().includes(searchItem.toLowerCase()));

    useEffect(()=> {
        setProducts(productsState);
        if(!productsState.products.lenght)dispatch(fetchProducts());
    },[]);
    
    return (
        <div className='relative'>
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
                            <input className='pl-8 w-36 sm:w-auto bg-lightblue rounded-md pr-2' value={searchItem} onChange={searchHandler} type='search' placeholder='search...'/>
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
            <div className={open ? 'show-login-box': 'hide-login-box'}>
                <ul>
                    <Link to='/register'><li>Register</li></Link>
                    <Link to='/login'><li>Login</li></Link>
                </ul>
            </div>
            {/* <div className='lg:hidden md:hidden grid col-auto place-items-center grid-col-1 mt-32 sm:grid-cols-2 sm:mx-16 '>
          {
            productsState.loading ? productsState.products.slice(0,loadMore).map 
            (loading => <Loader key={loading.id} loadData={loading} />) :  
            productsState.error ? <h2 className='font-bold text-center'>an error occurred!</h2> :
            searchProduct.slice(0, loadMore).map (product => <Product key={product.id}
            productData={product} />)
          }
        </div> */}
        {/* <div className='lg:hidden md:hidden flex justify-center mt-4 mb-6'>
          <button className='bg-cherry px-12 py-2 hover:bg-sakura rounded-md text-lightblue font-bold' onClick={loadHandler}>Load more</button>
        </div> */}
        </div>
    );
};

export default HamburgerMenu;