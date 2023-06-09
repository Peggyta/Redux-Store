import React from 'react';
//icons:
import Icon from 'react-icons-kit';
import {coinDollar} from 'react-icons-kit/icomoon/coinDollar';
import {undo2} from 'react-icons-kit/icomoon/undo2';
import {ic_star} from 'react-icons-kit/md/ic_star';
import { Link, useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';


const Details = () => {
    const {id} = useParams();
    const data = useSelector(state => state.productsState.products);
    const product = data[id-1];
    const {image, title, description, category, price, rating} = product;

    
    return (
        <>
        <div className='flex md:flex-row items-center gap-10 justify-center mt-12 mb-6 flex-col'>
            <div>
                <img className=' mx-auto w-64' src={image} alt='product' />
            </div>
            <div className='md:w-3/6 border border-cement rounded-xl p-6 w-5/6'>
                <h3 className='font-bold text-lg pb-3'>{title}</h3>
                <p className='pb-2'>{description}</p>
                <p className='font-bold pb-2'>Category: {category}</p>
                <div className='flex items-center'>
                    <div className='mb-1'><Icon icon={ic_star}/></div>
                    <p className='text-xs'>Rate: {rating.rate}</p>  
                </div>
                <p className='no-off-price'>Price: {price} $</p>
                <div className=' text-grass text-lg font-bold flex items-center'>
                    <div className='mb-1 animate-pulse'><Icon icon={coinDollar} size={22} /></div>
                   <div><p>Discounted Price: {(price*0.8).toFixed(2)} $</p></div> 
                </div>
                <div className='flex jusitify-center pt-2'>
                   <Link className='bg-rosewood rounded-md py-2 text-center hover:bg-sakura w-screen font-medium' to='/products'><Icon icon={undo2}/>Back to shop</Link>
                </div>
            </div>
        </div>
     </>
    );
};

export default Details;