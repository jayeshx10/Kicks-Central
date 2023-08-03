import { Link } from "react-router-dom";
import { useContext } from "react";

import { WishlistIcon, CartIcon, UserIcon } from "Images/Icons";
import { kicksCentralIcon } from "Images/ImagesLinks.js";
import { ProductsContext } from "contexts/ProductsContext";
import "styles/headerStyles.css";

export const Header = () => {
  const { dispatch } = useContext(ProductsContext);

  return (
    <div className="header">
      <div className="header__container-1">
        <Link to="/" className="links-styling">
          <img src={kicksCentralIcon} className="img-kicksCentral" />
        </Link>
        <div className="header__navbar">
          <input
            type="text"
            placeholder="    Search"
            className="header__input-search"
            onChange={(e) =>
              dispatch({ type: "searchedKeyword", payload: e.target.value })
            }
          />
          <Link to="/wishlist" className="links-styling">
            <button className="btn-icons">
              <WishlistIcon />
            </button>
          </Link>
          <Link to="/cart" className="links-styling">
            <button className="btn-icons">
              <CartIcon />
            </button>
          </Link>
          <Link to="/user" className="links-styling">
            <button className="btn-icons">
              <UserIcon />
            </button>
          </Link>
        </div>
      </div>
      <nav className="header__container-2">
        <Link to="/products" className="header__links">
          <span className="header__span">All Products</span>
        </Link>
        <Link to="/products/sneakers" className="header__links">
          <span className="header__span">Sneakers</span>
        </Link>
        <Link className="header__links">
          <span className="header__span">Basketball</span>
        </Link>
        <Link className="header__links">
          <span className="header__span">Classics</span>
        </Link>
        <Link className="header__links">
          <span className="header__span">Skateboard</span>
        </Link>
        <Link className="header__links">
          <span className="header__span">Slides</span>
        </Link>
        <Link className="header__links">
          <span className="header__span">Sandals</span>
        </Link>
      </nav>
    </div>
  );
};
