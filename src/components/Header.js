import { Link } from "react-router-dom";
import { useContext } from "react";

import { ProductsContext } from "contexts/ProductsContext";
import "styles/headerStyles.css";

export const Header = () => {
  const { dispatch } = useContext(ProductsContext);

  return (
    <div className="header-div">
      <div className="header-div-1">
        <h1 className="header-div-1-1">
          <Link to="/" className="links-styling">
            KicksCentral
          </Link>
        </h1>

        <div className="header-div-1-2">
          <input
            type="text"
            placeholder="  Search"
            className="input-search"
            onChange={(e) =>
              dispatch({ type: "searchedKeyword", payload: e.target.value })
            }
          />
          <div>
            <Link to="/wishlist" className="links-styling">
              <button className="btn-icons">
                <img
                  src="https://img.icons8.com/?size=512&id=87&format=png"
                  alt="wishlist-icon"
                  height="30"
                />
              </button>
            </Link>
            <img
              src="https://img.icons8.com/?size=512&id=120588&format=png"
              alt="breakline"
              height="30"
            />
            <Link to="/cart" className="links-styling">
              <button className="btn-icons">
                <img
                  src="https://img.icons8.com/?size=512&id=3686&format=png"
                  alt="shopping-bag-icon"
                  height="30"
                />
              </button>
            </Link>
            <img
              src="https://img.icons8.com/?size=512&id=120588&format=png"
              alt="breakline"
              height="30"
            />
            <Link to="/user" className="links-styling">
              <button className="btn-icons">
                <img
                  src="https://img.icons8.com/?size=512&id=23264&format=png"
                  alt="user-icon"
                  height="30"
                />
              </button>
            </Link>
            <img
              src="https://img.icons8.com/?size=512&id=120588&format=png"
              alt="breakline"
              height="30"
            />
            <Link to="/login" className="links-styling">
              <button className="btn-icons">
                <img
                  src="https://img.icons8.com/?size=512&id=RdpDW3Vxtzg3&format=png"
                  alt="login-icon"
                  height="30"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <nav className="header-div-2">
        <Link to="/products" className="header-links">
          <span className="header-links-span">All Products</span>
        </Link>
        <Link to="/products/sneakers" className="header-links">
          <span className="header-links-span">Sneakers</span>
        </Link>
        <Link className="header-links">
          <span className="header-links-span">Basketball</span>
        </Link>
        <Link className="header-links">
          <span className="header-links-span">Classics</span>
        </Link>
        <Link className="header-links">
          <span className="header-links-span">Skateboard</span>
        </Link>
        <Link className="header-links">
          <span className="header-links-span">Slides</span>
        </Link>
        <Link className="header-links">
          <span className="header-links-span">Sandals</span>
        </Link>
      </nav>
    </div>
  );
};
