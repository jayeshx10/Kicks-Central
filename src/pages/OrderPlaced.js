import React from "react";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

import "styles/orderPlaced.css";
import { Footer } from "components/Footer";
import { toastifyMessageService } from "services/services";

export const OrderPlaced = () => {
  useEffect(() => {
    toastifyMessageService("success", "Order placed successfully");
  }, []);

  return (
    <>
      <ToastContainer autoClose={2000} />
      <div className="order-placed">
        <h1>Order placed successfully :)</h1>
        <Link to="/products">
          <button className="order-placed__btn">Explore more</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};
