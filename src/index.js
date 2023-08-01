import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthContextProvider } from "contexts/AuthContext";
import { WishlistCartContextProvider } from "contexts/WishlistCartContext";
import { ProductsContextProvider } from "contexts/ProductsContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router>
        <ProductsContextProvider>
          <WishlistCartContextProvider>
            <App />
          </WishlistCartContextProvider>
        </ProductsContextProvider>
      </Router>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
