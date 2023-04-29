import React from 'react';
import Product from '../shared/Product';

const ItemsList = ({info}) => {
    return (
        <div className='grid col-auto lg:mx-12 md:mx-6 place-items-center grid-col-1 mt-32 lg:grid-cols-4 
        md:grid-cols-3 sm:grid-cols-2 sm:mx-16'>
            {info.map((product)=> (
                <Product key={product.id} productData={product} />
            ))}
        </div>
    );
};

export default ItemsList;