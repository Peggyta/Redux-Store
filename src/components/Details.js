import React from 'react';
import Icon from 'react-icons-kit';
import {coinDollar} from 'react-icons-kit/icomoon/coinDollar';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Details = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const data = useSelector(state => state.productsState.products);
    const product = data[id-1];
    const {image, title, description, category, price} = product;
    
    return (
        <div className='flex items-center gap-10 justify-center mt-12'>
            <div>
                <img className='max-w-sm mx-auto' src={image} alt='product' />
            </div>
            <div className='w-2/6 border border-cement rounded-xl p-6 '>
                <h3 className='font-bold text-lg pb-3'>{title}</h3>
                <p className='pb-2'>{description}</p>
                <p className='font-bold pb-2'>Category: {category}</p>
                <p className='no-off-price'>Price: {price} $</p>
                <div className=' text-grass text-lg font-bold flex items-center'>
                    <div className='mb-1 animate-pulse'><Icon icon={coinDollar} size={22} /></div>
                   <div><p>Discounted Price: {(price*0.8).toFixed(2)} $</p></div> 
                </div>
            </div>
        </div>
    );
};

export default Details;