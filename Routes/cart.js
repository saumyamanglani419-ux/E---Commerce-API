import express from "express";
import {
  addToCart,
  clearCart,
  decreaseProductQty,
  removeProductFromCart,
  userCart,
} from "../Controllers/cart.js";
import { isAuthenticated } from "../Middlewares/Auth.js";

const router = express.Router();

// add to cart
// @API = /api/cart/add
router.post("/add", isAuthenticated, addToCart);

// get user cart
// @API = /api/cart/user
router.get("/user", isAuthenticated, userCart);

// remove product from cart
// @API = /api/cart/remove/productId
router.delete("/remove/:productId", isAuthenticated, removeProductFromCart);

// clear cart
// @API = /api/cart/clear
router.delete("/clear", isAuthenticated, clearCart);

// decrease qty of product from cart
// @API = /api/cart/--qty
router.post("/--qty", isAuthenticated, decreaseProductQty);

export default router;
