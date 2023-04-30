import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux';
import Slide from '../components/shared/Slide';
import { Link } from 'react-router-dom';
import Icon from 'react-icons-kit';
import {enter} from 'react-icons-kit/icomoon/enter';

const Slider = () => {
    const productsState = useSelector(state=> state.productsState);
    
    return (
        <>
        <div className='lg:hidden bg-blue w-full md:hidden flex justify-center mt-10 mx-auto animate-pulse'>
                <Link className='bg-stone w-full text-lightblue font-bold text-center 
                text-3xl sm:py-6 py-4 hover:bg-grey' to='/products'>
                Visit Shop <Icon icon={enter} size={28} /></Link>  
        </div>
        <div className='w-full lg:max-w-3xl md:max-w-2xl md:block lg:block  mx-auto lg:mt-28 md:mt-28 '>
            <Carousel autoPlay infiniteLoop interval={4000} showArrows showStatus={false} showThumbs={false} >
                {productsState.products.slice(0,5).map(items=> <Slide key={items.id} productData={items}/>)}
            </Carousel>
        </div>
        </>
    );
};


export default Slider;