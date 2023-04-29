import React from 'react';
import ItemsList from './ItemsList';
import { useSelector } from 'react-redux';

const Dress = () => {
    const productState = useSelector(state=> state.productsState);
    const dress = productState.products.filter((item)=> item.category === "women's clothing");
    return (
        <div>
           <ItemsList info={dress} /> 
        </div>
    );
};

export default Dress;