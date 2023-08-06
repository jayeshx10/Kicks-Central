import React from "react";
import { Link } from "react-router-dom";
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
        <Link to={`/product/${_id}`} className="links-styling">
          <img src={imgUrl} alt={name} className="wishlist-card__img" />
        </Link>
        <div>
          <div className="wishlist-card__li-text">
            <p>{name}</p>
            <p>{brand}</p>
            <p>₹ {price}</p>
          </div>
          <div className="wishlist-card__btns-container">
            <button
              className="wishlist-card__btn"
              onClick={() => moveProduct("wishlist_to_cart", item)}
            >
              Move to Cart
            </button>
            <button
              className="wishlist-card__btn"
              onClick={() => removeProduct("wishlist", _id)}
            >
              Remove from Wishlist
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="wishlist__container">
        <h2>Items in your wishlist: {wishlistData.length}</h2>
        <ul className="wishlist__ul">
          {wishlistData.map((item) => {
            const { _id } = item;
            return (
              <li className="wishlist__li" key={_id}>
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
