import React, {useState, useEffect} from 'react';
import axios from 'axios';
import arrow from '../images/arrow.png';
import ring from '../images/ring.png';
import Icon from 'react-icons-kit';
import {spinner4} from 'react-icons-kit/icomoon/spinner4';
import {truck} from 'react-icons-kit/fa/truck';
import {checkSquareO} from 'react-icons-kit/fa/checkSquareO';
import {dollar} from 'react-icons-kit/fa/dollar';
import {headphones} from 'react-icons-kit/iconic/headphones';
import { useSelector } from 'react-redux';
import Scroll from '../search/Scroll';
import SearchList from '../search/SearchList';
import Category from './Category';


const Banner = () => {
    const productsState = useSelector(state => state.productsState);
    const[banner, setBanner] = useState([]);
    const[loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const searchProduct = productsState.products.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));

    const displayBanner = async () => {
        try { //fetch a single product from api
            const data = await axios
            .get('https://fakestoreapi.com/products/7')
            .then((response) => {
                setBanner(response.data);
            });  
            console.log(data);
            setLoading(true);
        }   
        catch(error) {
            console.log(error)
        };
    };
      
    useEffect (()=> {
        displayBanner();
    },[]);

    const searchHandler = event => {
        setSearch(event.target.value);
        if(event.target.value === "") {
            setShowSearch(false);
        } else {
            setShowSearch(true);
        }
    };

    function searchList () {
        if(showSearch) {
            return (
                <Scroll>
                    <SearchList searchProduct={searchProduct} />
                </Scroll> 
            )
        }
    }

    return (
        <>
        <section className='hidden md:block'>
            <div className='mx-auto mt-6 w-1/6'>
                {loading? <img src={banner.image} alt='banner' /> : 
                <div className='mx-auto md:flex md:justify-center mb-6' >
                    <Icon className='md:animate-spin' icon={spinner4} size={35} />
                </div>}   
            </div>
            <div className='md:flex md:flex-col md:justify-center md:items-center md:w-2/4 w-670px mx-auto relative'>
                <div className='relative'>
                <input value={search} className=' bg-lightblue focus:outline-none lg:w-670px md:max-w-5xl md:px-36 focus:ring 
                focus:ring-grey pb-4 pt-3 rounded-md placeholder-style placeholder:text-xs' 
                onChange={searchHandler} placeholder='what are you looking for?' />
                <div className='absolute left-10 top-2'>
                    <p className='font-bold text-xl'>Search:</p>
                </div>
                </div>
                
                <div className='h-1'>
                    {searchList()}
                </div> 
            </div>  
            <div className='lg:w-670px md:w-450px mx-auto md:flex md:justify-center flex-col'>
                <div className='w-10 mx-auto lg:mt-2 lg:mb-4 md:hidden lg:block'>
                    <img className='w-3/4' src={arrow} alt='arrow' />
                </div>
                <div className='lg:-mt-24 md:mt-1 lg:w-670px md:w-auto mx-auto'>
                    <img  src={ring} alt='ring' />
                </div>                      
            </div>
                <div className='mx-auto text-center md:flex md:items-center md:justify-between md:w-3/12 lg:w-330px md:mt-6'>
                    <div className='text-grey '><Icon icon={truck} size={38} />
                    <p className='md:hidden lg:block text-sm text-black font-bold'>Quick Delivery</p></div>
                    <div className='text-grey'><Icon icon={dollar} size={38} />
                    <p className='md:hidden lg:block text-sm text-black font-bold'>Accurate Pricing</p></div>
                </div>     
                <div className='max-w-3xl mx-auto md:flex text-center md:items-center md:justify-between md:w-3/6 lg:w-670px -mt-24' >
                    <div className='text-grey'><Icon icon={headphones} size={38} />
                    <p className='md:hidden lg:block text-sm text-black font-bold'>Great Service Team</p></div>
                    <div className='text-grey'><Icon icon={checkSquareO} size={38} />
                    <p className='md:hidden lg:block text-sm text-black font-bold'>Jewellery Warranty</p></div>
                </div>
        </section>
        <Category />
        </>
    );
};

export default Banner;