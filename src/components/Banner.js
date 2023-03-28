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
import Scroll from './shared/Scroll';
import SearchList from './SearchList';


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
        <section className='hidden md:block'>
            <div className='mx-auto mt-6 w-1/6'>
                {loading? <img src={banner.image} alt='banner' /> : 
                <div className='mx-auto md:flex md:justify-center mb-6' >
                    <Icon className='md:animate-spin' icon={spinner4} size={35} />
                </div>}   
            </div>
            <div className='md:flex md:flex-col md:justify-center md:items-center md:w-2/4 mx-auto relative '>
                <div>
                <input value={search} className=' bg-lightblue focus:outline-none px-64 focus:ring 
                focus:ring-grey pb-4 pt-3 rounded-md placeholder-style' 
                onChange={searchHandler} placeholder='what are you looking for?' />
                </div>
                
                <div className='h-1'>
                    {searchList()}
                </div> 
                <div className='absolute left-10 top-2'>
                    <p className='font-bold text-xl'>Search:</p>
                </div>
            </div>  
            <div className='w-2/4 mx-auto md:flex md:justify-center flex-col'>
                <div className='w-10 mx-auto mt-6'>
                    <img className='w-3/4' src={arrow} alt='arrow' />
                </div>
                <div className='-mt-24'>
                    <img  src={ring} alt='ring' />
                </div>                      
            </div>
                <div className='mx-auto md:flex md:items-center md:justify-between w-1/6'>
                    <div className='text-grey'><Icon icon={truck} size={38} /></div>
                    <div className='text-grey'><Icon icon={dollar} size={38} /></div>
                </div>     
            <div className='mx-auto md:flex md:items-center md:justify-between w-2/4 -mt-24' >
                    <div className='text-grey'><Icon icon={headphones} size={38} /></div>
                    <div className='text-grey'><Icon icon={checkSquareO} size={38} /></div>
            </div>
        </section>
    );
};

export default Banner;