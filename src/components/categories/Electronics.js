import React from 'react';
import ItemsList from './ItemsList';
import { useSelector } from 'react-redux';

const Electronics = () => {
    const productState = useSelector(state=> state.productsState);
    const electronics = productState.products.filter((item)=> item.category === "electronics");
    return (
        <div>
            <ItemsList info={electronics} /> 
        </div>
    );
};

export default Electronics;