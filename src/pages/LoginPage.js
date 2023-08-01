import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { AuthContext } from "contexts/AuthContext";
import "styles/loginPage.css";

export const LoginPage = () => {
  const { token, loginHandler } = useContext(AuthContext);

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const testUser = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };

  const submitHandler = (e) => {
    toast.success("Successfully Logged In!");
    e.preventDefault();
    loginHandler(userCredentials);
  };

  return (
    <form className="form-container" onSubmit={submitHandler}>
      <h2 className="login-page-h2">Sign In</h2>
      <label className="labels" for="email">
        Email Address:{" "}
      </label>
      <input
        className="inputs"
        type="text"
        name="input-email"
        placeholder="shawn@gmail.com"
        required
      />
      <label className="labels" for="password">
        Password:{" "}
      </label>
      <input
        className="inputs"
        type="text"
        name="input-password"
        placeholder="•••••••••"
        required
      />
      <br />
      <button type="submit" className="btns-sign-ins">
        SIGN IN
      </button>
      <button type="submit" className="btns-sign-ins">
        LOG IN AS GUEST
      </button>
      <p>
        Don't have an account?{" "}
        <Link to="/signup" className="link-signup">
          Sign Up
        </Link>
      </p>
    </form>
  );
};
