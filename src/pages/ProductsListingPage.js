import { useContext } from "react";
import { SideBar } from "components/SideBar";
import { Link } from "react-router-dom";

import "styles/productsListingPage.css";
import { Footer } from "components/Footer";
import { ProductsContext } from "contexts/ProductsContext";

export default function ProductsListingPage() {
  const { productsPostSorting } = useContext(ProductsContext);

  const ProductCard = ({ product }) => {
    const { _id, name, imgUrl, brand, price } = product;
    return (
      <li className="product-card-li">
        <Link to={`/product/${_id}`} className="links-styling">
          <img src={imgUrl} className="product-img" alt={name} />
          <p style={{ opacity: "0.6" }}>{brand}</p>
          <p>
            <span className="product-card-span">{name}</span>
          </p>
          <p>
            <span className="product-card-span">₹ {price}</span>
          </p>
        </Link>
      </li>
    );
  };

  return (
    <>
      <div className="product-listing-main-div">
        <div>
          <SideBar />
        </div>
        <div className="all-products">
          <ul className="product-cards-ul">
            {productsPostSorting.map((product) => {
              const { _id } = product;
              return <ProductCard product={product} key={_id} />;
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
