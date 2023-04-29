import React from 'react';
import { Link, useParams } from 'react-router-dom';
import pc from '../images/pc.png';
import dress from '../images/dress.png';
import coat from '../images/coat.png';
import diamond from '../images/diamond.png';

const Category = () => {
    return (
        <div className='max-w-lg mx-auto mt-32'>
            <div className='flex px-6 lg:px-0 md:px-0 w-full justify-center 
             text-sm font-semibold text-center lg:gap-10 md:gap-10 gap-6 items-center'>
                <div className='shadow-lg rounded-md px-3 py-1'>
                    <Link className='flex items-center flex-col justify-center' to='/products/categories/electronics'>
                        <img className='lg:h-20 md:h-20 h-12' src={pc} alt='electronics' />
                        <p>Electronics</p>
                    </Link>
                </div>
                <div className='shadow-lg rounded-md px-3  py-1'>
                    <Link className='flex items-center flex-col flex-col justify-center' to="/products/categories/women's clothing">
                        <img className='lg:h-20 md:h-20 h-12' src={dress} alt='dress' />
                        <p>Dress</p>
                    </Link>
                </div>
                <div className='shadow-lg rounded-md px-3 py-1'>
                    <Link className='flex items-center flex-col justify-center' to='/products/categories/jewelery'>
                        <img className='lg:h-20 md:h-20 h-12' src={diamond} alt='jewellery' />
                        <p>Jewellery</p>
                    </Link>
                </div>
                <div className='shadow-lg rounded-md px-3 py-1'>
                    <Link className='flex items-center flex-col justify-center' to='/products/categories/menclothing'>
                        <img className='lg:h-20 md:h-20 h-12' src={coat} alt='clothing' />
                        <p>Menswear</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Category;