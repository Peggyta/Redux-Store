import React from 'react';
import ItemsList from './ItemsList';
import { useSelector } from 'react-redux';

const Jewellery = () => {
    const productState = useSelector(state=> state.productsState);
    const jewellery = productState.products.filter((item)=> item.category === "jewelery");
    console.log(jewellery);
    return (
        <div>
            <ItemsList info={jewellery} /> 
        </div>
    );
};

export default Jewellery;