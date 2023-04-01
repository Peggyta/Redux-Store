import React from 'react';
import SearchCardMobile from './SearchCardMobile';

const SearchListMobile = ({searchProduct}) => {
    const filtered = searchProduct.map(items => <SearchCardMobile key={items.id} productData={items} />);
    return (
        <div className='font-semibold'>
            {filtered}
        </div>
    );
};

export default SearchListMobile;