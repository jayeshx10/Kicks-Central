import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { Loader } from "components/Loader";
import { Footer } from "components/Footer";
import { AboutProduct } from "components/AboutProduct";
import { ProductsContext } from "contexts/ProductsContext";
import { WishlistCartContext } from "contexts/WishlistCartContext";
import "styles/productPage.css";

export const ProductPage = () => {
  let { productID } = useParams();
  const { productsDB, addFlag } = useContext(ProductsContext);
  const { addProduct } = useContext(WishlistCartContext);

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 1400);
  }, []);

  const product = productsDB.find((product) => product._id === productID);

  const addHandler = (type, product) => {
    addProduct(type, product);
    addFlag(type, product);
  };

  if (showLoader) {
    return <Loader />;
  }

  return (
    product && (
      <>
        <div className="productPage-main-container">
          <div className="productPage-div-left">
            <img src={product.imgUrl} alt="Shoes" />
          </div>
          <div className="productPage-div-right">
            <div>
              <p className="p-brand-name">{product.brand}</p>
              <p>
                <span className="span-name">{product.name}</span>
              </p>
              <p className="p-price">₹ {product.price}</p>
            </div>
            <div className="btns-product-page">
              {product.isWished ? (
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
              {product.inCart ? (
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
              <AboutProduct about={product.about} />
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  );
};
