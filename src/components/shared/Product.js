import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-icons-kit';
//actions :
import {addItem, removeItem, increase, decrease} from '../../redux/cart/cartAction';
//function :
import { itemsTitle, numberOfItems, isInCart } from '../../helper/functions';

const Product = ({productData}) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.cartState);
    return (
        <div className='flex flex-col items-center'>
            <img className='w-36' src={productData.image} alt='product' />
            <h3>{itemsTitle(productData.title)}</h3>
            <p>{productData.rate}</p>
            <p>{productData.price}</p>
            <div className='flex justify-between'>
                <div>
                    <Link>Details</Link>
                </div>
                <div>
                    {numberOfItems(state, productData.id)===1 &&
                    <button onClick={()=> dispatch(removeItem(productData))}><Icon /></button>}
                    {numberOfItems(state, productData.id) > 1 &&
                    <button onClick={()=> dispatch(decrease(productData))}>-</button>}

                    {isInCart(state, productData.id) ? 
                    <button onClick={()=> dispatch(increase(productData))}>+</button> : 
                    <button onClick={()=> dispatch(addItem(productData))}>Add to cart</button>}
                </div>
            </div>  
        </div>
    );
};

export default Product;