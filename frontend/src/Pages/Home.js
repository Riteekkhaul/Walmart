import React, { Fragment } from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Products from '../Pages/Products';
import MetaData from "../components/Layout/MetaData";

const Home = () => {
  return(
   <Fragment>
    <MetaData title="WallMart" />
     <Navbar />
     <Hero />
     <Products />
   </Fragment>
  ) 
};

export default Home;
