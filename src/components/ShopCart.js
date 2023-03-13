import React from 'react';
import Cart from './shared/Cart';
import { Link } from 'react-router-dom';
//action
import { checkout, clear } from '../redux/cart/cartAction';
import { useDispatch, useSelector } from 'react-redux';


const ShopCart = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.cartState)
    return (
        <div>
            <div>
                {state.selectedItem.map(item => <Cart key={item.id} data={item} />)}
            </div>
            {
                state.itemsCounter > 0 && 
                <div>
                    <p><span>Total Items:</span>{state.itemsCounter}</p>
                    <p><span>Total Price:</span>{state.total}</p>
               </div>
            }
            <div>
                <button onClick={()=>dispatch(clear())}>Clear</button>
                <button onClick={()=> dispatch(checkout())}>Checkout</button>
            </div>
            {
                state.checkout && 
                <div>
                    <h3>Thanks for buying!</h3>
                    <Link to='/products'>Back to shop</Link>
                </div>
            }
            {
                !state.checkout && state.itemsCounter === 0 &&
                <div>
                   <h3>Need something to buy?</h3> 
                   <Link to='/products'>Go to shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;