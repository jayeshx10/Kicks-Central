import React from "react";
import { useContext } from "react";
import { WishlistCartContext } from "contexts/WishlistCartContext";

export const Cart = () => {
  const { wishlistData, cartData, addProduct, removeProduct, moveProduct } =
    useContext(WishlistCartContext);
  return (
    <div>
      <h1>Items: {cartData.length}</h1>
    </div>
  );
};
