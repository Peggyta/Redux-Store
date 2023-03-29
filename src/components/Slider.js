import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux';
import Slide from '../components/shared/Slide';
import { Link } from 'react-router-dom';

const Slider = () => {
    const productsState = useSelector(state=> state.productsState);
    
    return (
        <>
        <div className='w-2/3 md:block lg:block md:w-1/2 lg:w-1/2 mx-auto lg:mt-36 md:mt-36 mt-12'>
            <Carousel autoPlay infiniteLoop interval={4000} showArrows showStatus={false} showThumbs={false} >
                {productsState.products.slice(0,5).map(items=> <Slide key={items.id} productData={items}/>)}
            </Carousel>
        </div>
        <div className='lg:hidden md:hidden flex justify-center mt-4 w-2/3 mx-auto '>
                <Link className='bg-navy w-full text-lightblue font-bold text-center 
                text-xl py-4 rounded-xl hpver:bg-sakura' to='/products'>Visit Shop</Link>
        </div>
        </>
    );
};

export default Slider;