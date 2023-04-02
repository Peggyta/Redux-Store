import React, {useState, useEffect} from 'react';
import { fetchProducts } from '../redux/products/productsAction';
import { useSelector, useDispatch } from 'react-redux';
import Product from './shared/Product';
import Loader from './shared/Loader';
import '../styles/General.css';

const Products = () => {
  const [loadMore, setLoadMore] = useState(8);
  const [showLoadBtn, setShowLoadBtn] = useState(true);
  const dispatch = useDispatch();
  const productsState = useSelector(state => state.productsState);

  const loadHandler = () => {
    setLoadMore((prevValue)=> prevValue+12);
    setShowLoadBtn(!showLoadBtn);
  };

  useEffect(()=> {
    if(!productsState.products.lenght)dispatch(fetchProducts());
  },[]);

    return (
      <div className='max-w-5xl mx-auto'>
        <div className='grid col-auto lg:mx-12 md:mx-6 place-items-center grid-col-1 mt-32 lg:grid-cols-4 
        md:grid-cols-3 sm:grid-cols-2 sm:mx-16 ' onClick={()=> setShowLoadBtn(!showLoadBtn)}>
          {
            productsState.loading ? productsState.products.slice(0,loadMore).map 
            (loading => <Loader key={loading.id} loadData={loading} />) :  
            productsState.products.error ? <h2 className='font-bold text-center'>an error occurred!</h2> :
            productsState.products.slice(0, loadMore).map (product => <Product key={product.id}
            productData={product} />)
          }
        </div>
        <div className='flex justify-center mt-4 mb-6'>
          <button className={showLoadBtn ? 'show-load-btn': 'hide-load-btn'} onClick={loadHandler}>Load more</button>
        </div>
      </div>
        
    );
};

export default Products;