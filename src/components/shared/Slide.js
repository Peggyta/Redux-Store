import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { isInCart, numberOfItems } from '../../helper/functions';
import {addItem, removeItem, increase, decrease} from '../../redux/cart/cartAction';
//icons :
import Icon from 'react-icons-kit';
import {ic_delete_twotone} from 'react-icons-kit/md/ic_delete_twotone';

const Slide = ({productData}) => {
    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();
    return (
        <div className='flex border-2 gap-10 border-grey px-10 py-16 rounded-xl bg-blue'>
            <div className='w-56 h-56'>
                <img className='h-full' src={productData.image} alt='product' />
            </div>
            <div className='text-left'>
                <h3 className='font-bold mb-3'>{productData.title}</h3>
                <p className='no-off-price'>Price: {productData.price} $</p>
                <p className='mb-2 text-grass font-bold'>Price: {(productData.price*0.8).toFixed(2)} $</p>
                <div className='flex justify-between w-40 gap-2 font-semibold  items-center'>
                    <Link to={`/products/${productData.id}`} className='text-normal px-2 rounded-md bg-lightblue'>Details</Link>
                </div>
                <div className=' mt-2 w-full font-semibold'>
                    {
                        numberOfItems(state, productData.id) === 1 &&
                        <button onClick={()=> dispatch(removeItem(productData))}><Icon className='pl-0.75px hover:text-lightblue' icon={ic_delete_twotone} size={28} /></button>
                    }
                    {
                        numberOfItems(state, productData.id) > 1 &&
                        <button className='add-remove-buttons px-3' onClick={()=> dispatch(decrease(productData))}>-</button>
                    }
                    {numberOfItems(state, productData.id)> 0 && <span className='pr-1 pl-3 font-bold'>{numberOfItems(state,productData.id)}</span>}
                    {
                        isInCart(state, productData.id) ? 
                    <button className='add-remove-buttons px-2' onClick={()=>dispatch(increase(productData))}>+</button>:
                    <button className='bg-cherry py-2 w-full text-center font-semibold text-lightblue rounded-lg' onClick={()=> dispatch(addItem(productData))}>Add to cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Slide;