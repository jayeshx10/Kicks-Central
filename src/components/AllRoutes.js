import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";

import { AuthContext } from "contexts/AuthContext";
import { RequiresAuth } from "components/RequiresAuth";
import { Signup } from "pages/Signup";
import { LoginPage } from "pages/LoginPage";
import { User } from "pages/User";
import { Cart } from "pages/Cart";
import { Wishlist } from "pages/Wishlist";
import { ProductPage } from "pages/ProductPage";
import ProductsListingPage from "pages/ProductsListingPage";
import { Home } from "pages/Home";

export const AllRoutes = () => {
  //const isLoggedIn = false;
  const { token, currUser } = useContext(AuthContext);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/products" element={<ProductsListingPage />} />
        <Route path="/product/:productID" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth token={token}>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequiresAuth token={token}>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/user"
          element={
            <RequiresAuth token={token}>
              <User />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
};
