import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { isInCart, numberOfItems, searchTitle } from '../../helper/functions';
import {addItem, removeItem, increase, decrease} from '../../redux/cart/cartAction';
//icons :
import Icon from 'react-icons-kit';
import {ic_delete_twotone} from 'react-icons-kit/md/ic_delete_twotone';
import '../../styles/General.css';

const Slide = ({productData}) => {
     // calling our state from the reduxer using useSelector hook of redux
    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();
    return (
        <div className='flex flex-row lg:gap-10 md:gap-10 gap-2 md:px-10 lg:px-10 sm:px-10 px-3 sm:h-400px h-300px
         lg:rounded-xl md:rounded-xl bg-navy py-10 lg:h-full md:h-350px md:px-6 '>
            <div className=' sm:h-300px  lg:w-64 md:w-64 lg:h-64 md:h-56 mx-auto lg:mx-0 md:mx-0 lg:px-4 md:px-2'>
                <img className='h-48 md:h-full lg:h-full sm:h-full object-fit: contain' src={productData.image} alt='product' />
            </div>
            <div className='text-left lg:bg-black/50 w-7/12 md:px-3 md:px-6 lg:px-6 sm:px-6 px-2 md:pt-4 lg:pt-4 sm:pt-4 pt-1'>
                <h3 className='font-bold text-cement mb-3 lg:text-lg md:text-lg sm:text-xl text-base'>{searchTitle(productData.title)}</h3>
                <p className='no-off-price'>Price: {productData.price} $</p>
                <p className='mb-2 text-grass font-bold'>Price: {(productData.price*0.8).toFixed(2)} $</p>
                <div className='flex justify-between w-40 gap-2 font-semibold  items-center'>
                    <Link to={`/products/${productData.id}`} className='text-normal px-2 text-rosewood rounded-md bg-stone/50'>Details</Link>
                </div>
                <div className=' mt-3 w-full font-semibold flex items-center'>
                    {
                        numberOfItems(state, productData.id) === 1 &&
                        <button onClick={()=> dispatch(removeItem(productData))}><Icon className='pl-0.75px hover:text-lightblue text-grey' icon={ic_delete_twotone} size={28} /></button>
                    }
                    {
                        numberOfItems(state, productData.id) > 1 &&
                        <button className='add-remove-buttons px-3' onClick={()=> dispatch(decrease(productData))}>-</button>
                    }
                    {numberOfItems(state, productData.id)> 0 && <span className='pr-1 pl-3 font-bold text-rosewood'>{numberOfItems(state,productData.id)}</span>}
                    {
                        isInCart(state, productData.id) ? 
                    <button className='add-remove-buttons px-2' onClick={()=>dispatch(increase(productData))}>+</button>:
                    <button className='buttons bg-stone md:py-2 sm:py-2 lg:py-2 py-1 w-full text-center font-semibold text-lightblue transition delay-75 rounded-lg hover:bg-grey/75' 
                    onClick={()=> dispatch(addItem(productData))}>Add to cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Slide;