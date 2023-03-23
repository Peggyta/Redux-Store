import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux';
import Slide from '../components/shared/Slide';

const Slider = () => {
    const productsState = useSelector(state=> state.productsState);
    
    return (
        <div className='hidden md:block lg:block md:w-1/2 lg:w-1/2 mx-auto'>
            <Carousel autoPlay infiniteLoop interval={4000} showArrows showStatus={false} >
                {productsState.products.slice(0,5).map(items=> <Slide key={items.id} productData={items}/>)}
            </Carousel>
        </div>
    );
};

export default Slider;