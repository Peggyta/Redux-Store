import React from 'react';
import Icon from 'react-icons-kit';
import {ic_delete_twotone} from 'react-icons-kit/md/ic_delete_twotone';
import { useDispatch } from 'react-redux';
import {itemsTitle} from '../../helper/functions';
//actions
import { increase, decrease, removeItem } from '../../redux/cart/cartAction';

const Cart = (props) => {
    const {image, title, price, quantity} = props.data;
    const dispatch = useDispatch();
    return (
        // md:w-1/2 sm:w-2/3 w-6/6 mx-4 md:mx-auto sm:mx-auto
        <div className=' border border-grey rounded-xl max-w-3xl lg:w-full md:w-5/6 sm:w-3/4 w-11/12 sm:px-3 px-1 mx-auto mt-6'>
            <div className='flex md:pl-12 md:pr-16 py-2 px-3 gap-3 justify-between items-center h-32'>
                <div className='flex lg:flex-row md:flex-row sm:flex-row flex-col lg:gap-4 md:gap-4 sm:gap-4 gap-1 items-center'>
                    <img className='md:w-16 w-12' src={image} alt='product image'  />
                    <h3 className='font-bold text-center text-grey'>{itemsTitle(title)}</h3>
                </div>
                <div className='flex flex-col ml-6 w-40' > 
                    <p className='no-off-price text-sm w-full'>Price: {price} $</p>
                    <p className='mb-2 text-grass font-bold'>Price: {(price*0.8).toFixed(2)} $</p>
                </div>
                <div className='flex items-center'>
                        <div>
                           <p className='font-semibold'>{quantity}</p> 
                        </div>
                        <div className='flex flex-col'>
                        <div>
                            <button id='add-button' className='add-remove-buttons mb-1 bg-green hover:bg-grass rounded-xl' onClick={()=> dispatch(increase(props.data))} >+</button>
                        </div>
                        <div>
                            {
                                quantity > 1 ?
                                <button className='add-remove-buttons px-3 rounded-xl hover:bg-sakura'  onClick={()=>dispatch(decrease(props.data))}>-</button> :
                                <button className='bg-cement px-1 ml-2 py-0.75px rounded-xl text-center leading-normal hover:bg-grey transition transition-all delay-75' onClick={()=> dispatch(removeItem(props.data))}><Icon className='leading-normal hover:text-lightblue' icon={ic_delete_twotone} size={24} /></button>
                            }
                        </div>  
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Cart;