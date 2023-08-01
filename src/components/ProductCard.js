import React from "react";
import { Link } from "react-router-dom";

import "styles/productCard.css";

export const ProductCard = ({ product }) => {
  const { _id, name, imgUrl, brand, about, price, categoryName } = product;
  return (
    <li className="product-card-li" key={_id}>
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
