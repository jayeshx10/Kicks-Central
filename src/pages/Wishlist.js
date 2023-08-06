import React from "react";
import { useContext, useState } from "react";

import "styles/wishlist.css";
import { Footer } from "components/Footer";
import { WishlistCartContext } from "contexts/WishlistCartContext";

export const Wishlist = () => {
  const { wishlistData, addProduct, removeProduct, moveProduct } =
    useContext(WishlistCartContext);

  const WishlistProductCard = ({ item }) => {
    const { _id, name, brand, imgUrl, about, price, categoryName } = item;
    return (
      <>
        <img src={imgUrl} alt={name} className="img-wishlist" />
        <div className="wishlist-li-right">
          <p>{name}</p>
          <p>{brand}</p>
          <p>{price}</p>
        </div>
        <button onClick={() => moveProduct("wishlist_to_cart", item)}>
          Move to Cart
        </button>
        <button onClick={() => removeProduct("wishlist", _id)}>
          Remove from Wishlist
        </button>
      </>
    );
  };

  return (
    <>
      <div className="wishlist-container">
        <h2>Items: {wishlistData.length}</h2>
        <ul className="wishlist-ul">
          {wishlistData.map((item) => {
            const { _id } = item;
            return (
              <li className="wishlist-li" key={_id}>
                <WishlistProductCard item={item} />
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
};
