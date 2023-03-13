import React, {useEffect} from 'react';
import { fetchProducts } from '../redux/products/productsAction';
import { useSelector, useDispatch } from 'react-redux';
import Product from './shared/Product';

const Products = () => {
  const dispatch = useDispatch();
  const productsState = useSelector(state => state.productsState);

  useEffect(()=> {
    if(!productsState.products.lenght)dispatch(fetchProducts())
  },[]);

    return (
        <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 mt-36 px-36'>
          {
            productsState.loading ? <h2>loading...</h2> : 
            productsState.error ? <h2>an error occurred!</h2> :
            productsState.products.map (product => <Product key={product.id}
            productData={product} />)
          }
        </div>
    );
};

export default Products;