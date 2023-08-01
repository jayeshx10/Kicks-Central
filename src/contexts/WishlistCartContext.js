import React from "react";
import { createContext, useState, useEffect } from "react";

export const WishlistCartContext = createContext();

export const WishlistCartContextProvider = ({ children }) => {
  const [wishlistData, setWishlistData] = useState([]);
  const [cartData, setCartData] = useState([]);

  const addProduct = (type, product) => {
    if (type === "wishlist") {
      setWishlistData((prevState) => [...prevState, product]);
    } else {
      setCartData((prevState) => [...prevState, product]);
    }
  };

  const removeProduct = (type, targetID) => {
    if (type === "wishlist") {
      const newWishlistData = wishlistData.filter(
        (product) => product._id !== targetID
      );
      setWishlistData(newWishlistData);
    } else {
      const newCartData = cartData.filter(
        (product) => product._id !== targetID
      );
      setCartData(newCartData);
    }
  };

  const moveProduct = (type, product) => {
    const { _id } = product;
    if (type === "wishlist_to_cart") {
      //WISHLIST ---> CART
      //STEP 1: Add to cart
      addProduct("cart", product);
      //STEP 2: Remove from wishlist
      removeProduct("wishlist", _id);
    } else {
      //CART ---> WISHLIST
      //STEP 1: add to wishlist
      addProduct("wishlist", product);
      //STEP 2: remove from cart
      removeProduct("cart", _id);
    }
  };

  return (
    <WishlistCartContext.Provider
      value={{
        wishlistData,
        cartData,
        addProduct,
        removeProduct,
        moveProduct,
      }}
    >
      {children}
    </WishlistCartContext.Provider>
  );
};
