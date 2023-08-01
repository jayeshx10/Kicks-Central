//import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";

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
  const isLoggedIn = false;
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/products" element={<ProductsListingPage />} />
        <Route path="/product/:productID" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<User />} />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth isLoggedIn={isLoggedIn}>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequiresAuth isLoggedIn={isLoggedIn}>
              <Cart />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
};
