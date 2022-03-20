import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {  

  return(
   <>
   <Link className="productCard" to={`/product/${product._id}`}>
      <img src='/timer.jpg' alt='image'/>
      <p>{product.name}</p>
      <div>
          💙💙💙
        <span className="productCardSpan">
          {product.NOReviews} Reviews
        </span>
      </div>
      <span>₹{` ${product.price}`} </span>
  </Link>
 </>
  ) ;
};

export default ProductCard;
