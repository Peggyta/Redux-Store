import React from 'react';
import { Link } from 'react-router-dom';
import { searchTitle } from '../../helper/functions';

const SearchCard = ({productData}) => {
    return (
        <div className=' w-full  pb-2 hover:bg-cement'>
            <Link to={`/products/${productData.id}`} className='text-lg font-semibold'>{searchTitle(productData.title)}</Link>
        </div>
    );
};

export default SearchCard;