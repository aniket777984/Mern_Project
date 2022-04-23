import React, { Fragment } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { removeItemsFromCart} from "../../actions/cart";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";

const Cart = () => {
  
  const dispatch = useDispatch();
  const { cartPlaces } = useSelector((state) => state.cart);


  const deleteCartItems = (data) => {
    dispatch(removeItemsFromCart(data));
  };


  return (
    <Fragment>
      {cartPlaces.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />

          <Typography>No Product in Your Cart</Typography>
          <Link to="/products">View Products</Link>
        </div>
      ) : (
        <Fragment>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Package</p>
              <p></p>
              <p>Subtotal</p>
            </div>

            {cartPlaces &&
              cartPlaces.map((item) => (
                <div className="cartContainer" key={item.product}>
                  <CartItemCard item={item} deleteCartItems={deleteCartItems} />
                  <div className="cartInput">
                    
                  </div>
                  <p className="cartSubtotal">{`₹${
                    item.price
                  }`}</p>
                </div>
              ))}

            <div className="cartGrossProfit">
              <div></div>
              <div className="cartGrossProfitBox">
                <p>Gross Total</p>
                <p>{`₹${cartPlaces.reduce(
                  (acc, item) => acc +  item.price,
                  0
                )}`}</p>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <button>Check Out</button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
