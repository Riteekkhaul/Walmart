const express = require('express');
const router = express.Router();
const { registerUser , loginUser, logout ,forgotPassword, resetPassword, getUserDetails, updatePassword ,updateProfile ,getAllUser,getSingleUser,updateUserRole, deleteUser } = require("../controllers/userController");
const { isAuthUser , autherRole } = require('../midleWare/Auth');

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").get(logout);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/update").put(isAuthUser, updatePassword);

router.route("/password/reset/:token").put( resetPassword);

router.route("/me").get(isAuthUser, getUserDetails);

router.route("/me/update").put(isAuthUser, updateProfile);

router.route("/admin/users").get(isAuthUser, autherRole("admin"), getAllUser);

router.route("/admin/user/:id").get(isAuthUser, autherRole("admin"), getSingleUser)
.put(isAuthUser, autherRole("admin"), updateUserRole)
.delete(isAuthUser, autherRole("admin"), deleteUser);

module.exports = router;
