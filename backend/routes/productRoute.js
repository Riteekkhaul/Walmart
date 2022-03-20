
const express = require("express");
const { getAllProducts , createProduct, updateProduct, deleteProduct, getProductDetails,createProductReview, getProductReviews,deleteReview } = require("../controllers/productControllers");
const { isAuthUser , autherRole } = require("../midleWare/Auth");
const catchAsyncError = require("../midleWare/catchAsyncError");
const router = express.Router();


router.route('/products').get(getAllProducts);
router.route('/admin/product/new').post( isAuthUser ,autherRole("admin"),createProduct);
router.route('/admin/product/:id').put( isAuthUser ,autherRole("admin"),updateProduct).delete( isAuthUser ,autherRole("admin"),deleteProduct);
//router.route("/admin/products").get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthUser, createProductReview);


router.route("/reviews").get(getProductReviews).delete(isAuthUser, deleteReview);


module.exports = router;