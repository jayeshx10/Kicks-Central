import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { hidePassword, showPassword } from "Images/Icons";
import { AuthContext } from "contexts/AuthContext";
import "styles/loginPage.css";

export const LoginPage = () => {
  const { token, loginHandler } = useContext(AuthContext);

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const [passwordType, setPasswordType] = useState("password");

  const togglePasswordState = () => {
    return passwordType === "password" ? setPasswordType("text") : setPasswordType("password");
  };

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
      <label className="labels" htmlFor="email">
        Email Address:{" "}
        <input
          className="inputs"
          type="text"
          name="input-email"
          onChange={(e) =>
            setUserCredentials((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
          placeholder="shawn@gmail.com"
          required
        />
      </label>
      <label className="labels" htmlFor="password">
        Password:{" "}
        <input
          className="inputs"
          type={passwordType}
          name="input-password"
          onChange={(e) =>
            setUserCredentials((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
          placeholder="•••••••••"
          required
        />
        <button className="inputs__button-icons" onClick={togglePasswordState}>
          <img
            src={passwordType === "password" ? showPassword : hidePassword}
            className="inputs__password-icons"
          />
        </button>
      </label>
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
