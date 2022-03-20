import React, {useEffect, useState,Fragment } from 'react';
import Navbar from '../components/Navbar';
import MetaData from '../components/Layout/MetaData';
import { useDispatch , useSelector } from 'react-redux';
import{ clearErrors } from '../actions/productActions';
import Loader from '../components/Layout/Loader/Loader';
import { getProduct } from '../actions/productActions';
import ProductCard from '../components/ProductCard';
import './AllProducts.css';
import { useParams } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const AllProducts = () => {

   
const categories = [
  "Laptop",
  "Footwear",
  "Mouse",
  "Tops",
  "Attire", 
  "Camera",
  "Mobile ",
];

  const dispatch = useDispatch();
  const { keyword } = useParams();
  const { products,loading,productsCount, filteredProductsCount, resultPerPage, error } = useSelector((state) => state.products);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 35000]);
  const [category, setCategory] = useState("");  
  const [ratings, setRatings] = useState(0);

  
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

 
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    if (error) {
     
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword,currentPage));
  }, [dispatch,keyword,currentPage]);


  return (
    <Fragment>
        <Navbar />
        {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
         
          <div className="filterBox fixed">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={35000}
            />
            
            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {  categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))    }
            </ul>

            <fieldset className='w-36'>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset> 

          </div>  
 
          { resultPerPage < productsCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
         )
    }

        </Fragment>  
      )
    }
    </Fragment>
  );
};

export default AllProducts;
