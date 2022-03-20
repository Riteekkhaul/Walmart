const { json } = require("express/lib/response");
const Product = require("../models/product");
const ErrorHandeler = require("../utils/ErrorHandeler");
const catchAsyncError =require('../midleWare/catchAsyncError');
const ApiFeature = require('../utils/ApiFeatures');


//create product  Admin
exports.createProduct =catchAsyncError( async (req , res , next)=>{
    const product = await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
});



exports.getAllProducts =catchAsyncError( async (req , res) =>{

    const resultPerPage = 8;
    const productsCount = await Product.countDocuments();
 
 const apiFeature= new ApiFeature(Product.find(),req.query).search().filter().pagination(resultPerPage);
 const products = await apiFeature.query;

 let filteredProductsCount = products.length;

    res.status(200).json({
        success:true,
        products,
        productsCount,
        resultPerPage,
       filteredProductsCount
    })
});

// update Admin
exports.updateProduct = catchAsyncError(  async (req ,res , next) =>{
      let product = Product.findById(req.params.id);
    
      if(!product){
        return  next(new ErrorHandeler("Product Not Found " , 404))
      }

      product = await Product.findByIdAndUpdate(req.params.id,req.body ,{
          new:true, runValidators:true, useFindAndModify:false
      });

      res.status(200).json({
          success:true,
          product
      })
});


exports.deleteProduct = catchAsyncError(  async (req , res, next) =>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return  next(new ErrorHandeler("Product Not Found " , 404))
    }
    await product.deleteOne();
    res.status(200).json({
        success:true,
        message:"Product Deleted SuccessFully"
    })
});


exports.getProductDetails = catchAsyncError(  async(req , res , next) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        return  next(new ErrorHandeler("Product Not Found ",404))
    }
   
    res.status(200).json({
        success:true,
       product
    })
 });

 
// Create New Review or Update the review
exports.createProductReview = catchAsyncError(async (req, res, next) => {
    const { rating, comment, productId } = req.body;
  
    const review = {
      user: req.user._id,
      name: req.user.name,
      rating: Number(rating),
      comment,
    };
  
    const product = await Product.findById(productId);
  
    const isReviewed = product.reviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );
  
    if (isReviewed) {
      product.reviews.forEach((rev) => {
        if (rev.user.toString() === req.user._id.toString())
          (rev.rating = rating), (rev.comment = comment);
      });
    } else {
      product.reviews.push(review);
      product.numOfReviews = product.reviews.length;
    }
  
    let avg = 0;
  
    product.reviews.forEach((rev) => {
      avg += rev.rating;
    });
  
    product.ratings = avg / product.reviews.length;
  
    await product.save({ validateBeforeSave: false });
  
    res.status(200).json({
      success: true,
    });
  });

  
// Get All Reviews of a product
exports.getProductReviews = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandeler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});


// Delete Review
exports.deleteReview = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.query.productId);

  if (!product) {
    return next(new ErrorHandeler("Product not found", 404));
  }

  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;

  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  let ratings = 0;

  if (reviews.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / reviews.length;
  }

  const numOfReviews = reviews.length;

  await Product.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});