import React from 'react';
import ItemsList from './ItemsList';
import Icon from 'react-icons-kit';
import {undo2} from 'react-icons-kit/icomoon/undo2';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Jewellery = () => {
    const productState = useSelector(state=> state.productsState);
    const jewellery = productState.products.filter((item)=> item.category === "jewelery");
    console.log(jewellery);
    return (
        <div className='max-w-5xl mx-auto'>
            <div className='mt-16 lg:ml-16 md:ml-16 lg:block md:block flex justify-center'>
                <Link className='bg-cherry transition delay-75 hover:bg-sakura px-4 py-2 font-semibold text-lightblue rounded-lg' to='/products'><Icon icon={undo2}/>Back to shop</Link>
            </div>
            <ItemsList info={jewellery} /> 
        </div>
    );
};

export default Jewellery;