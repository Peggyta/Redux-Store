import React, {useState, useEffect} from 'react';
import { fetchProducts } from '../redux/products/productsAction';
import { useSelector, useDispatch } from 'react-redux';
import Product from './shared/Product';
import Loader from './shared/Loader';
import arrow from '../images/arrow.png';
import ring from '../images/ring.png';
import Icon from 'react-icons-kit';
import {truck} from 'react-icons-kit/fa/truck';
import {checkSquareO} from 'react-icons-kit/fa/checkSquareO';
import {dollar} from 'react-icons-kit/fa/dollar';
import {headphones} from 'react-icons-kit/iconic/headphones';
import '../styles/Navbar.css';

const Products = () => {
  const [loadMore, setLoadMore] = useState(8);
  const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const productsState = useSelector(state => state.productsState);
  const searchProduct = productsState.products.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));

  const loadHandler = () => {
    setLoadMore((prevValue)=> prevValue+8);
  };
  const searchHandler = event => {
    setSearch(event.target.value)
};

  useEffect(()=> {
    setProducts(productsState);
    if(!productsState.products.lenght)dispatch(fetchProducts());

  },[]);

    return (
      <div>
       {/* search section and it's icons */}
        <div className='hidden md:flex  md:justify-center md:w-2/4 mx-auto relative '>
                <input type='search' value={search} onChange={searchHandler} className='w-screen bg-lightblue focus:outline-none px-28 focus:ring 
                focus:ring-grey pb-4 pt-3 rounded-md placeholder-style' 
                 placeholder='what are you looking for?' />
                <div className='absolute left-10 top-2'>
                    <p className='font-bold text-xl'>Search:</p>
                </div>
            </div>  
            <div className='hidden md:w-2/4 mx-auto md:flex md:justify-center flex-col'>
                <div className='w-10 mx-auto mt-6 z-10'>
                    <img className='w-3/4' src={arrow} alt='arrow' />
                </div>
                <div className='hidden md:block md:-mt-24'>
                    <img  src={ring} alt='ring' />
                </div>                      
            </div>
                <div className='hidden md:mx-auto md:flex md:items-center md:justify-between w-1/6'>
                    <div className='text-grey'><Icon icon={truck} size={38} /></div>
                    <div className='text-grey'><Icon icon={dollar} size={38} /></div>
                </div>     
            <div className='hidden md:mx-auto md:flex md:items-center md:justify-between w-2/4 -mt-24' >
                    <div className='text-grey'><Icon icon={headphones} size={38} /></div>
                    <div className='text-grey'><Icon icon={checkSquareO} size={38} /></div>
            </div>
            {/* get products, loading and showing them on web page */}
            <div className='hidden md:grid lg:grid lg:col-auto md:col-auto lg:mx-12 md:mx-6 place-items-center grid-col-1 mt-32 lg:grid-cols-4 md:grid-cols-3 '>
            {
            productsState.loading ? productsState.products.slice(0,loadMore).map 
            (loading => <Loader key={loading.id} loadData={loading} />) :  
            productsState.error ? <h2 className='font-bold text-center'>an error occurred!</h2> :
            searchProduct.slice(0, loadMore).map (product => <Product key={product.id}
            productData={product} />)
            }
          </div>
          <div className='hidden lg:flex md:flex justify-center lg:mt-4 md:mb-6 md:mt-4 md:mb-6'>
            <button className='bg-cherry px-12 py-2 hover:bg-sakura rounded-md text-lightblue font-bold' onClick={loadHandler}>Load more</button>
          </div>
      </div>    
    );
};

export default Products;