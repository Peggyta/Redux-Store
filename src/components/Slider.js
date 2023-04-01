import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux';
import Slide from '../components/shared/Slide';
import { Link } from 'react-router-dom';
import Icon from 'react-icons-kit';
import {enter} from 'react-icons-kit/icomoon/enter';
import pc from '../images/pc.png';
import dress from '../images/dress.png';
import coat from '../images/coat.png';
import diamond from '../images/diamond.png';

const Slider = () => {
    const productsState = useSelector(state=> state.productsState);
    
    return (
        <>
        <div className='w-full lg:max-w-3xl md:max-w-2xl md:block lg:block  mx-auto lg:mt-36 md:mt-36 mt-12'>
            <Carousel autoPlay infiniteLoop interval={4000} showArrows showStatus={false} showThumbs={false} >
                {productsState.products.slice(0,5).map(items=> <Slide key={items.id} productData={items}/>)}
            </Carousel>
        </div>
        <div className='lg:hidden bg-blue w-full md:hidden flex justify-center mx-auto animate-pulse'>
                <Link className='bg-stone w-full text-lightblue font-bold text-center 
                text-3xl sm:py-6 py-4 hover:bg-blue' to='/products'>
                Visit Shop <Icon icon={enter} size={28} /></Link>  
        </div>
        <h3 className='font-bold text-xl md:hidden lg:hidden block pl-4 mt-4'>Categories:</h3>
        <div className='lg:hidden md:hidden block flex max-w-md mx-auto justify-center 
        sm:gap-16 gap-6 text-sm font-semibold mt-6 text-center items-center'>
            <div className='w-12 flex items-center flex-col justify-center cursor-pointer'>
                <img className='h-12' src={pc} alt='electronics' />
                <div><p>Electronics</p></div>
            </div>
            <div className='w-12 flex items-center flex-col cursor-pointer justify-center'>
                <img className='h-12' src={diamond} alt='diamond' />
                <div><p>Jewellery</p></div>
            </div>
            <div className='w-12 flex items-center flex-col cursor-pointer justify-center'>
                <img className='h-12 mb-1' src={dress} alt='dress' />
                <div><p>Dress</p></div>
            </div>
            <div className='w-12 flex items-center flex-col cursor-pointer justify-center'>
                <img className='h-12 mb-1' src={coat} alt='coat' />
                <div><p>Menswear</p></div>
            </div>
        </div>
        </>
    );
};


export default Slider;