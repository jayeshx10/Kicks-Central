import React from "react";
import { createContext, useState, useEffect, useContext } from "react";

import { AuthContext } from "contexts/AuthContext";
import { ProductsContext } from "contexts/ProductsContext";
import {
  getWishlistDataService,
  getCartDataService,
  addProductService,
  removeProductService,
  handleQuantityService,
} from "services/services.js";

export const WishlistCartContext = createContext();

export const WishlistCartContextProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const {addFlag, removeFlag } = useContext(ProductsContext);

  const [wishlistData, setWishlistData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cartData.map((item) => {
      const { price, qty } = item;
      return (total += price * qty);
    });
    setTotal(total);
  }, [cartData]);

  const getWishlistData = async () => {
    try {
      const {
        data: { wishlist },
        status,
      } = await getWishlistDataService(token);

      if (status === 200 || status === 201) {
        setWishlistData(wishlist);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCartData = async () => {
    try {
      const {
        data: { cart },
        status,
      } = await getCartDataService(token);

      if (status === 200 || status === 201) {
        setCartData(cart);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      getWishlistData();
      getCartData();
    }
  }, []);

  const addProduct = async (type, product) => {
    if (type === "wishlist") {
      try {
        const {
          data: { wishlist },
          status,
        } = await addProductService(token, type, product);
        if (status === 200 || status === 201) {
          setWishlistData(wishlist);
          addFlag("wishlist", product);
        }
      } catch (error) {
        console.log(error);
      }
    } else if (type === "cart") {
      try {
        const {
          data: { cart },
          status,
        } = await addProductService(token, type, product);
        if (status === 200 || status === 201) {
          setCartData(cart);
          addFlag("cart", product);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeProduct = async (type, targetID) => {
    if (type === "wishlist") {
      try {
        const {
          data: { wishlist },
          status,
        } = await removeProductService(token, type, targetID);
        if (status === 200 || status === 201) {
          setWishlistData(wishlist);
          removeFlag("wishlist", targetID);
        }
      } catch (error) {
        console.log(error);
      }
    } else if (type === "cart") {
      try {
        const {
          data: { cart },
          status,
        } = await removeProductService(token, type, targetID);
        if (status === 200 || status === 201) {
          setCartData(cart);
          removeFlag("cart", targetID);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const moveProduct = (type, product) => {
    const { _id } = product;

    if (type === "wishlist_to_cart") {
      //WISHLIST ---> CART
      addProduct("cart", product);
      removeProduct("wishlist", _id);
    } else if (type === "cart_to_wishlist") {
      //CART ---> WISHLIST
      addProduct("wishlist", product);
      removeProduct("cart", _id);
    }
  };

  const handleQuantity = async (type, productID) => {
    await handleQuantityService(token, type, productID).then((response) => {
      const {
        data: { cart },
      } = response;
      setCartData(cart);
    });
  };

  return (
    <WishlistCartContext.Provider
      value={{
        wishlistData,
        cartData,
        addProduct,
        removeProduct,
        moveProduct,
        handleQuantity,
        total,
      }}
    >
      {children}
    </WishlistCartContext.Provider>
  );
};
