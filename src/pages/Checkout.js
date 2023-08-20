import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";

import "styles/checkout.css";
import { Footer } from "components/Footer";
import { WishlistCartContext } from "contexts/WishlistCartContext";
import { AuthContext } from "contexts/AuthContext";

export const Checkout = () => {
  const {
    currUser: { addresses },
  } = useContext(AuthContext);
  const [billingAddress, setBillingAddress] = useState([]);
  const { cartData, setCartData, total } = useContext(WishlistCartContext);

  const OrderSummary = () => {
    return (
      <ul className="order-summary__ul">
        {cartData.map((item) => {
          const { _id, name, price, qty } = item;

          return (
            <li className="order-summary__li" key={_id}>
              <p>{name}</p>
              <p>x{qty}</p>
              <p>₹{price}</p>
            </li>
          );
        })}
      </ul>
    );
  };

  const changeHandler = (e) => {
    setBillingAddress(e.target.value);
  };

  const Addresses = () => {
    return (
      <ul className="billing-address__ul">
        {addresses.map((address) => {
          return (
            <li
              key={addresses.indexOf(address)}
              className="billing-address__li"
            >
              <label className="billing-address__label">
                <input type="radio" value={address} onChange={changeHandler} />{" "}
                <p>{address}</p>
              </label>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <div className="checkout">
        <h2>Order Summary</h2>
        <OrderSummary />
        <p className="order-summary__total">TOTAL: ₹ {total}</p>
        <h2>Billing Address</h2>
        {billingAddress.length > 0 ? (
          <p className="billing-address">{billingAddress}</p>
        ) : (
          <Addresses />
        )}
        <Link to="/order-placed">
          {billingAddress.length > 0 && cartData.length > 0 ? (
            <button
              className="order-placed__btn"
              onClick={() => setCartData([])}
            >
              Place Order
            </button>
          ) : (
            <button className="order-placed__btn order-placed__btn--disabled">
              Place Order
            </button>
          )}
        </Link>
      </div>
      <Footer />
    </>
  );
};
