import React,{Fragment, useEffect, useState} from 'react';
import '../App.css';
import ProductCard from '../components/ProductCard';
import { getProduct} from '../actions/productActions';
import { useDispatch , useSelector} from 'react-redux';
import Loader from '../components/Layout/Loader/Loader';


const Products =  () => {

  const dispatch = useDispatch();
  const { loading , error ,products , productCount} = useSelector(
    (state) =>state.products
  );
  
     useEffect(() => {
        dispatch(getProduct());
     }, [dispatch]);     
     
  return(
    <Fragment>
    {loading ? (
      <Loader />
    ) : (
    <Fragment>  
       <h2 className="homeHeading">Featured Products</h2>
       <div className="container" >
         {
           products && products.map((product)=>
           <ProductCard key={product._id} product={product} />
           )
         }
       </div>
    </Fragment>
  ) }
  </Fragment> 
    )
};

export default Products;
