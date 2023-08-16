import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "styles/Cart.css";
import { increaseQty, decreaseQty } from "Images/Icons";
import { Footer } from "components/Footer";
import { WishlistCartContext } from "contexts/WishlistCartContext";

const CartProductCard = ({ item }) => {
  const { removeProduct, moveProduct, handleQuantity } =
    useContext(WishlistCartContext);

  const { _id, name, brand, imgUrl, price, qty } = item;

  return (
    <>
      <Link to={`/product/${_id}`}>
        <img src={imgUrl} alt={name} className="cart-card__img" />
      </Link>
      <div className="flex-col">
        <div>
          <div className="cart-card__li-text">
            <p>{name}</p>
            <p>{brand}</p>
            <p>₹ {price}</p>
          </div>
          <div className="cart-card__qty-container">
            <p>
              <span>Quantity: </span>
            </p>
            <button onClick={() => handleQuantity("increment", _id)}>
              <img
                src={increaseQty}
                alt="Increase quantity"
                className="cart-card__qty-icons"
              />
            </button>
            {`  ${qty}  `}
            <button
              onClick={() => handleQuantity("decrement", _id)}
              disabled={qty === 1}
            >
              <img
                src={decreaseQty}
                alt="Increase quantity"
                className="cart-card__qty-icons"
              />
            </button>
          </div>
        </div>
        <div className="cart-card__btns-container">
          <button
            className="cart-card__btn"
            onClick={() => moveProduct("cart_to_wishlist", item)}
          >
            Move to Wishlist
          </button>
          <button
            className="cart-card__btn"
            onClick={() => removeProduct("cart", _id)}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </>
  );
};

export const Cart = () => {
  const { cartData, total } = useContext(WishlistCartContext);

  return (
    <>
      <div className="cart__container">
        {cartData.length >= 1 ? (
          <>
            <ul className="cart__ul">
              {cartData.map((item) => {
                const { _id } = item;
                return (
                  <li className="cart__li" key={_id}>
                    <CartProductCard item={item} />
                  </li>
                );
              })}
            </ul>
            <hr />
            <div className="checkout">
              <ul className="checkout__ul">
                {cartData.map((item) => {
                  const { _id, name, price, qty } = item;

                  return (
                    <li className="checkout__li" key={_id}>
                      <p>{name}</p>
                      <p>x{qty}</p>
                      <p>₹{price}</p>
                    </li>
                  );
                })}
              </ul>
              <hr />
              <p className="checkout__total">TOTAL: ₹ {total}</p>
              <Link>
                <button className="btn-icons"></button>
              </Link>
            </div>
          </>
        ) : (
          <div className="cart__empty">
            <h1>Nothing in your Cart :/</h1>
            <Link to="/products">
              <button className="empty-cart__btn">Start Shopping</button>
            </Link>
          </div>
        )}
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};
