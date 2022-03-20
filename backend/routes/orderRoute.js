const express = require("express");
const { newOrder,getSingleOrder, myOrders,getAllOrders, updateOrder, deleteOrder} = require("../controllers/orderController");
const router = express.Router();

const { isAuthUser, autherRole } = require("../midleWare/Auth");

router.route("/order/new").post(isAuthUser, newOrder);

router.route("/order/:id").get(isAuthUser, getSingleOrder);

router.route("/orders/me").get(isAuthUser, myOrders);

router.route("/admin/orders").get(isAuthUser, autherRole("admin"), getAllOrders);

router.route("/admin/order/:id").put(isAuthUser, autherRole("admin"), updateOrder).delete(isAuthUser, autherRole("admin"), deleteOrder);

module.exports = router;
