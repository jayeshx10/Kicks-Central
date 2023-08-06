import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { Footer } from "components/Footer";
import { AboutProduct } from "components/AboutProduct";
import { ProductsContext } from "contexts/ProductsContext";
import { WishlistCartContext } from "contexts/WishlistCartContext";
import "styles/productPage.css";

export const ProductPage = () => {
  let { productID } = useParams();
  const { productsDB } = useContext(ProductsContext);
  const { addProduct } = useContext(WishlistCartContext);

  const product = productsDB.find((product) => product._id === productID);
  const { _id, name, brand, imgUrl, about, price, categoryName } = product;

  //states for "Added to wishlist" and "Added to cart"
  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  //handler for "Add to wishlist" and "Add to cart"
  const addHandler = (type, product) => {
    if (type === "wishlist") {
      addProduct("wishlist", product);
      setAddedToWishlist(!addedToWishlist);
    } else {
      addProduct("cart", product);
      setAddedToCart(!addedToCart);
    }
  };

  return (
    <>
      <div className="productPage-main-container">
        <div className="productPage-div-left">
          <img src={imgUrl} />
        </div>
        <div className="productPage-div-right">
          <div>
            <p className="p-brand-name">{brand}</p>
            <p>
              <span className="span-name">{name}</span>
            </p>
            <p className="p-price">₹ {price}</p>
          </div>
          <div className="btns-product-page">
            {addedToWishlist ? (
              <button className="btn-disabled" disabled>
                Added to wishlist
              </button>
            ) : (
              <button
                className="btn-add"
                onClick={() => addHandler("wishlist", product)}
              >
                Add to Wishlist
              </button>
            )}
            <br />
            {addedToCart ? (
              <button className="btn-disabled" disabled>
                Added to Cart
              </button>
            ) : (
              <button
                className="btn-add"
                onClick={() => addHandler("cart", product)}
              >
                Add to cart
              </button>
            )}
          </div>
          <div>
            <AboutProduct about={about} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
