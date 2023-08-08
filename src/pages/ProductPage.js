import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { Footer } from "components/Footer";
import { AboutProduct } from "components/AboutProduct";
import { ProductsContext } from "contexts/ProductsContext";
import { WishlistCartContext } from "contexts/WishlistCartContext";
import "styles/productPage.css";

export const ProductPage = () => {
  let { productID } = useParams();
  const { productsDB, addFlag } = useContext(ProductsContext);
  const { addProduct } = useContext(WishlistCartContext);

  const [product, setProduct] = useState(
    productsDB.find((product) => product._id === productID)
  );

  useEffect(() => {
    const newData = productsDB.find((product) => product._id === productID);
    setProduct(newData);
  }, [productsDB, productID]);

  const { name, brand, imgUrl, about, price, isWished, inCart } = product;

  // console.log("1", productID);
  // const product = productsDB.find((product) => product._id === productID);
  // console.log("2", product);

  // console.log("3", product);

  const addHandler = (type, product) => {
    addProduct(type, product);
    addFlag(type, product);
    console.log("from productPage", product);
  };

  return (
    <>
      <div className="productPage-main-container">
        <div className="productPage-div-left">
          <img src={imgUrl} alt="Shoes" />
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
            {isWished ? (
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
            {inCart ? (
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
