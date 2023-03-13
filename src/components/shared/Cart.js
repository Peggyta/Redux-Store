import React from 'react';
import Icon from 'react-icons-kit';
import { useDispatch } from 'react-redux';
//actions
import { increase, decrease, removeItem } from '../../redux/cart/cartAction';

const Cart = (props) => {
    const {image, title, price, quantity} = props.data;
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                <img src={image} alt='product image'  />
                <h3>{title}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span>{quantity}</span>
            </div>
            {
                quantity > 1 ?
                <button onClick={()=>dispatch(decrease(props.data))}>-</button> :
                <button onClick={()=> dispatch(removeItem(props.data))}><Icon icon={trash} /></button>
            }
            <button onClick={()=> dispatch(increase(props.data))} >+</button>
        </div>
    );
};

export default Cart;