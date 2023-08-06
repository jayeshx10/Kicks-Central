import React from "react";
import { useContext } from "react";

import { Footer } from "components/Footer";
import { WishlistCartContext } from "contexts/WishlistCartContext";

export const Cart = () => {
  const { cartData, addProduct, removeProduct, moveProduct, handleQuantity } =
    useContext(WishlistCartContext);

  const CartProductCard = ({ item }) => {
    const { _id, name, brand, imgUrl, about, price, quantity, categoryName } =
      item;
    console.log("Item", item);
    return (
      <>
        <img src={imgUrl} alt={name} className="img-wishlist" />
        <div className="wishlist-li-right">
          <p>{_id}</p>
          <p>{name}</p>
          <p>{brand}</p>
          <p>{price}</p>
          <p>{quantity}</p>
          <p>TOTAL: {quantity * price}</p>
        </div>
        <button onClick={() => moveProduct("cart_to_wishlist", item)}>
          Move to Wishlist
        </button>
        <button onClick={() => removeProduct("cart", _id)}>
          Remove from Cart
        </button>
        <button onClick={() => handleQuantity("increment", _id)}>+</button>
        <button
          onClick={() => handleQuantity("decrement", _id)}
          disabled={quantity === 1}
        >
          -
        </button>
      </>
    );
  };

  return (
    <>
      <div className="wishlist-container">
        <h2>Items: {cartData.length}</h2>
        <ul className="wishlist-ul">
          {cartData.map((item) => {
            const { _id } = item;
            return (
              <li className="wishlist-li" key={_id}>
                <CartProductCard item={item} />
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
};
