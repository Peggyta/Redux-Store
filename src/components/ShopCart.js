import React from 'react';
import Cart from './shared/Cart';
import { Link } from 'react-router-dom';
//action
import { checkout, clear } from '../redux/cart/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-icons-kit';
import {neutral} from 'react-icons-kit/icomoon/neutral';
import {checkmark} from 'react-icons-kit/icomoon/checkmark';


const ShopCart = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.cartState);
    return (
        <div>
            <h3 className='text-center font-bold text-xl mt-6 mb-4'>Shopping Cart</h3>
            <div>
                {state.selectedItem.map(item => <Cart key={item.id} data={item} />)}
            </div>
            {
                // md:w-1/2 sm:w-4/6 w-6/6
                state.itemsCounter > 0 && 
                    <div className='flex flex-col mx-auto max-w-3xl lg:w-full md:w-5/6 sm:w-3/4 w-11/12 items-center rounded-xl my-2 py-3  mx-4 bg-blue/25'>
                        <div className='font-semibold text-center'>
                            <p><span>Total Items: </span>{state.itemsCounter}</p>
                            <p><span>Total Price: </span>{state.total} $</p>
                        </div>
                        <div className='flex w-full gap-6 justify-center my-2'>
                            <button className='bg-cement px-6 py-1 rounded-lg hover:bg-grey ' onClick={()=>dispatch(clear())}>Clear</button>
                            <button className='bg-navy px-3 rounded-lg font-semibold text-lightblue hover:bg-stone' onClick={()=> dispatch(checkout())}>Checkout</button>
                        </div>  
                    </div>
            }
            
            {
                !state.checkout && state.itemsCounter === 0 &&
                <div className='flex mt-6 justify-center items-center flex-col gap-3'>
                    <div>
                        <Icon icon={neutral} size={100} />
                    </div>
                    <div className='text-center'>
                        <p className='pb-4'>Your shopping cart is empty!</p>
                        <Link className='bg-cherry transition delay-75 hover:bg-sakura px-4 py-2 font-semibold text-lightblue rounded-lg' to='/products'>Back to shop</Link>
                    </div>
                </div>
            }
            {
                state.checkout && 
                <div className='flex justify-center flex-col items-center mt-6'>
                    <div className='flex gap-2 text-grass'>
                        <Icon className='animate-pulse' icon={checkmark} />
                        <h3 className='font-bold text-lg mb-4'>Thanks for buying!</h3>
                    </div>
                    <div>
                        <Link className='bg-cherry transition delay-75 hover:bg-sakura px-4 py-2 font-semibold text-lightblue rounded-lg' to='/products'>Back to shop</Link>
                    </div>      
                </div>
            }
        </div>
    );
};

export default ShopCart;