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
import '../../styles/General.css';

const Product = ({productData}) => {
    
    const dispatch = useDispatch();
     // calling our state from the reduxer using useSelector hook of redux
    const state = useSelector(state => state.cartState);
    return (
        <div className='flex flex-col items-center px-4 py-3 md:w-auto my-4 border rounded-2xl border-cement md:px-6 sm:px-10'>
            <img className='w-32 h-32' src={productData.image} alt='product' />
            <h3 className='font-bold text-sm'>{itemsTitle(productData.title)}</h3>
            <p className='no-off-price text-sm'>Price: {productData.price} $</p>
            <p className='mb-2 text-grass font-bold'>Price: {(productData.price*0.8).toFixed(2)} $</p>
            <div className='flex justify-between w-40 gap-2  items-center'>
                <div>
                    <Link to={`/products/${productData.id}`} className='text-sm'>Details</Link>
                </div>
                <div className='flex items-center'>
                    {numberOfItems(state, productData.id)===1 &&
                    <button className='block text-center bg-cement w-32px pt-1 rounded-md leading-normal hover:bg-grey transition transition-all delay-75' onClick={()=> dispatch(removeItem(productData))}><Icon icon={ic_delete_twotone} size={27} /></button>}
                    {numberOfItems(state, productData.id) > 1 &&
                    <button className='add-remove-buttons hover:bg-sakura' onClick={()=> dispatch(decrease(productData))}>-</button>}
                    {numberOfItems(state, productData.id)> 0 && <span className='pl-2 font-bold'>{numberOfItems(state,productData.id)}</span>}
                    {isInCart(state, productData.id) ? 
                    <button className='add-remove-buttons bg-olive hover:bg-grass' onClick={()=> dispatch(increase(productData))}>+</button> : 
                    <button className='bg-rosewood rounded-md font-bold text-sm px-3 py-1 hover:bg-cream' onClick={()=> dispatch(addItem(productData))}>Add to cart</button>}
                </div>
            </div>  
        </div>
    );
};

export default Product;