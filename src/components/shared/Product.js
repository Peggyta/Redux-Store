import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//actions :
import {addItem, removeItem, increase, decrease} from '../../redux/cart/cartAction';

const Product = ({productData}) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.cartState);
    return (
        <div>
            <img src={productData.image} alt='product' />
            <h3>{productData.title}</h3>
            <p>{productData.rate}</p>
            <p>{productData.price}</p>
            <div>
                <div>
                    <Link>Details</Link>
                </div>
                <div>
                        <button>-</button>
                </div>
            </div>  
        </div>
    );
};

export default Product;