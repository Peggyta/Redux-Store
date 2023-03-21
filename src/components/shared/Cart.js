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
        <div className=' border border-grey rounded-xl md:w-1/2 sm:w-2/3 w-6/6 mx-4 md:mx-auto sm:mx-auto mt-6'>
            <div className='flex md:pl-12 md:pr-16 py-2 px-3 gap-6 justify-between items-center h-32'>
                <div className='flex md:flex-row sm:flex-row gap-4'>
                    <img className='md:w-16 w-12' src={image} alt='product image'  />
                    <h3 className='font-bold text-grey'>{itemsTitle(title)}</h3>
                </div>
                <div > 
                        <p className='font-semibold text-grass'>{price} $</p>
                </div>
                <div className='flex items-center'>
                        <div>
                           <p className='font-semibold'>{quantity}</p> 
                        </div>
                        <div className='flex flex-col'>
                            <div>
                                <button className='add-remove-buttons px-2 mb-1 rounded-xl' onClick={()=> dispatch(increase(props.data))} >+</button>
                            </div>
                            <div>
                                {
                                    quantity > 1 ?
                                    <button className='add-remove-buttons px-3 rounded-xl'  onClick={()=>dispatch(decrease(props.data))}>-</button> :
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