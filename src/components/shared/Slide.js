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
        <div className='flex flex-col md:flex-row lg:flex-row border-2 gap-10 border-grey px-10 
        lg:py-16 md:py-16 py-6 rounded-xl bg-gradient-to-t from-grey to-blue lg:h-full h-450px md:h-350px '>
            <div className='lg:w-56 lg:h-56 md:w-56 md:h-48 w-40 h-40 mx-auto lg:mx-0 md:mx-0 lg:px-4 md:px-4'>
                <img className='h-full' src={productData.image} alt='product' />
            </div>
            <div className='text-left'>
                <h3 className='font-bold mb-3'>{searchTitle(productData.title)}</h3>
                <p className='no-off-price'>Price: {productData.price} $</p>
                <p className='mb-2 text-green font-bold'>Price: {(productData.price*0.8).toFixed(2)} $</p>
                <div className='flex justify-between w-40 gap-2 font-semibold  items-center'>
                    <Link to={`/products/${productData.id}`} className='text-normal px-2 rounded-md bg-lightblue'>Details</Link>
                </div>
                <div className=' mt-3 w-full font-semibold flex items-center'>
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
                    <button className='bg-cherry py-2 w-full text-center font-semibold text-lightblue rounded-lg hover:bg-sakura' onClick={()=> dispatch(addItem(productData))}>Add to cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Slide;