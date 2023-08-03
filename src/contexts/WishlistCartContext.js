import React from "react";
import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "contexts/AuthContext";
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

  const [wishlistData, setWishlistData] = useState([]);
  const [cartData, setCartData] = useState([]);

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

  const handleQuantity = (type, productID) => {
    // try {
    //   const {
    //     data: { cart },
    //     status,
    //   } = await handleQuantityService(token, type, productID);
    //   if (status === 200 || status === 201) {
    //     console.log(cart);
    //     setCartData(cart);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    console.log(productID);
    const updatedCart = [...cartData].map((product) => {
      return product._id === productID
        ? type === "increment"
          ? { ...product, quantity: product.quantity + 1 }
          : { ...product, quantity: product.quantity - 1 }
        : product; 
    });
    setCartData(updatedCart);
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
      }}
    >
      {children}
    </WishlistCartContext.Provider>
  );
};
