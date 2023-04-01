import React from 'react';
import pc from '../images/pc.png';
import dress from '../images/dress.png';
import coat from '../images/coat.png';
import diamond from '../images/diamond.png';

const Category = () => {
    return (
        <div>
            <h3 className='font-bold text-xl md:hidden lg:hidden block pl-4 mt-4'>Categories:</h3>
            <div className='lg:hidden md:hidden inline-block flex max-w-md w-full mx-auto justify-center 
            sm:gap-16 gap-4 px-2 text-sm font-semibold mt-6 text-center items-center'>
                <div className='flex items-center flex-col justify-center cursor-pointer'>
                    <img className='h-12' src={pc} alt='electronics' />
                    <p>Electronics</p>
                </div>
                <div className=' flex items-center flex-col cursor-pointer justify-center'>
                    <img className='h-12' src={dress} alt='dress' />
                    <p>Dress</p>
                </div>
                <div className=' flex items-center flex-col cursor-pointer justify-center'>
                    <img className='h-12' src={diamond} alt='diamond' />
                   <p>Jewellery</p> 
                </div>
                <div className=' flex items-center flex-col cursor-pointer justify-center'>
                    <img className='h-12' src={coat} alt='coat' />
                    <p>Menswear</p>
                </div>
            </div>
        </div>
    );
};

export default Category;