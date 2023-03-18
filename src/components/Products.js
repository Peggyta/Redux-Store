import React, {useState, useEffect} from 'react';
import { fetchProducts } from '../redux/products/productsAction';
import { useSelector, useDispatch } from 'react-redux';
import Product from './shared/Product';
import Loader from './shared/Loader';

const Products = () => {
  const[loadMore, setLoadMore] = useState(8);
  const dispatch = useDispatch();
  const productsState = useSelector(state => state.productsState);

  const loadHandler = () => {
    setLoadMore((prevValue)=> prevValue+8);
  };

  useEffect(()=> {
    if(!productsState.products.lenght)dispatch(fetchProducts())
  },[]);

    return (
      <div>
        <div className='grid md:mx-36 place-items-center grid-col-1 mt-32 md:grid-cols-4 sm:grid-cols-2 sm:mx-16 '>
          {
            productsState.loading ? productsState.products.map 
            (loading => <Loader key={loading.id} loadData={loading} />) :  
            productsState.error ? <h2>an error occurred!</h2> :
            productsState.products.slice(0, loadMore).map (product => <Product key={product.id}
            productData={product} />)
          }
        </div>
        <div className='flex justify-center mb-6 mt-4'>
          <button className='bg-cherry px-12 py-2 hover:bg-sakura rounded-md text-lightblue font-bold' onClick={loadHandler}>Load more</button>
        </div>
      </div>
        
    );
};

export default Products;