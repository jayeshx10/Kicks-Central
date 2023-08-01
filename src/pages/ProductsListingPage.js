import { useContext } from "react";
import { SideBar } from "components/SideBar";

import "styles/productsListingPage.css";
import { ProductCard } from "components/ProductCard";
import { GetAllProducts } from "services/services.js";
import { ProductsContext } from "contexts/ProductsContext";

export default function ProductsListingPage() {
  const { productsDB, productsPostSorting, filterChangeHandler } =
    useContext(ProductsContext);

  return (
    <div className="product-listing-main-div">
      <div>
        <SideBar />
      </div>
      <div className="all-products">
        <ul className="product-cards-ul">
          {productsPostSorting.map((product) => {
            return <ProductCard product={product} />;
          })}
        </ul>
      </div>
    </div>
  );
}
