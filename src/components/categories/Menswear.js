import React from 'react';
import ItemsList from './ItemsList';
import { useSelector } from 'react-redux';

const Menswear = () => {
    const productState = useSelector(state=> state.productsState);
    const menswear = productState.products.filter((item)=> item.category === "men's clothing");
    return (
        <div>
            <ItemsList info={menswear} /> 
        </div>
     );
};

export default Menswear;