import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-icons-kit';
import {bin} from 'react-icons-kit/icomoon/bin';
//actions :
import {addItem, removeItem, increase, decrease} from '../../redux/cart/cartAction';
//function :
import { itemsTitle, numberOfItems, isInCart } from '../../helper/functions';

const Product = ({productData}) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.cartState);
    return (
        <div className='flex flex-col items-center py-3 px-4 md:w-auto my-4 border rounded-2xl border-cement md:px-6 sm:px-10'>
            <img className='w-32 h-32' src={productData.image} alt='product' />
            <h3 className='font-bold'>{itemsTitle(productData.title)}</h3>
            <p>{productData.rate}</p>
            <p className=' text-cherry font-normal line-through'>Price: {productData.price} $</p>
            <p className='mb-2 text-grass font-bold'>Price: {(productData.price*0.8).toFixed(2)} $</p>
            <div className='flex justify-between w-40 gap-2  items-center'>
                <div>
                    <Link className='text-sm'>Details</Link>
                </div>
                <div>
                    {numberOfItems(state, productData.id)===1 &&
                    <button className='bg-cement px-2 py-1 rounded-md text-center leading-normal hover:bg-grey transition transition-all delay-75' onClick={()=> dispatch(removeItem(productData))}><Icon className='leading-normal pl-0.75px hover:text-lightblue' icon={bin} size={18} /></button>}
                    {numberOfItems(state, productData.id) > 1 &&
                    <button className='bg-cherry px-3 py-1.5px rounded-md text-xl font-bold ml-2 text-lightblue text-center hover:bg-sakura transition transition-all delay-75 ease-in' onClick={()=> dispatch(decrease(productData))}>-</button>}
                    {numberOfItems(state, productData.id)> 0 && <span className='pl-2 font-bold'>{numberOfItems(state,productData.id)}</span>}
                    {isInCart(state, productData.id) ? 
                    <button className='bg-cherry px-2 py-1.5px rounded-md text-xl font-bold ml-2 text-lightblue text-center hover:bg-sakura transition transition-all delay-75 ease-in' onClick={()=> dispatch(increase(productData))}>+</button> : 
                    <button className='bg-rosewood rounded-md font-bold text-sm px-3 py-1 hover:bg-cream' onClick={()=> dispatch(addItem(productData))}>Add to cart</button>}
                </div>
            </div>  
        </div>
    );
};

export default Product;