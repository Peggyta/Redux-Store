import React from 'react';
import SearchCard from './SearchCard';

const SearchList = ({searchProduct}) => { 
    const filtered = searchProduct.map (items => <SearchCard key={items.id} productData={items} /> );
    return (
        <div>
            {filtered}
        </div>
    );
};

export default SearchList;