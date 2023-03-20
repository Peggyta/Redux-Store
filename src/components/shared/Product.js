import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//icons :
import Icon from 'react-icons-kit';
import {ic_delete_twotone} from 'react-icons-kit/md/ic_delete_twotone';
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
            <p className='no-off-price'>Price: {productData.price} $</p>
            <p className='mb-2 text-grass font-bold'>Price: {(productData.price*0.8).toFixed(2)} $</p>
            <div className='flex justify-between w-40 gap-2  items-center'>
                <div>
                    <Link to={`/products/${productData.id}`} className='text-sm'>Details</Link>
                </div>
                <div>
                    {numberOfItems(state, productData.id)===1 &&
                    <button className='bg-cement px-1 pb-0.75px pt-1 rounded-md text-center leading-normal hover:bg-grey transition transition-all delay-75' onClick={()=> dispatch(removeItem(productData))}><Icon className='leading-normal pl-0.75px hover:text-lightblue' icon={ic_delete_twotone} size={24} /></button>}
                    {numberOfItems(state, productData.id) > 1 &&
                    <button className='add-remove-buttons px-3' onClick={()=> dispatch(decrease(productData))}>-</button>}
                    {numberOfItems(state, productData.id)> 0 && <span className='pl-2 font-bold'>{numberOfItems(state,productData.id)}</span>}
                    {isInCart(state, productData.id) ? 
                    <button className='add-remove-buttons px-2' onClick={()=> dispatch(increase(productData))}>+</button> : 
                    <button className='bg-rosewood rounded-md font-bold text-sm px-3 py-1 hover:bg-cream' onClick={()=> dispatch(addItem(productData))}>Add to cart</button>}
                </div>
            </div>  
        </div>
    );
};

export default Product;