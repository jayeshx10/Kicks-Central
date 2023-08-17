import React from "react";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "styles/loginPage.css";
import { toastifyMessageService } from "services/services.js";
import { Footer } from "components/Footer";
import { hidePassword, showPassword } from "Images/Icons";
import { AuthContext } from "contexts/AuthContext";

export const LoginPage = () => {
  const { token, loginHandler } = useContext(AuthContext);

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const [passwordType, setPasswordType] = useState("password");

  const togglePasswordState = (e) => {
    e.preventDefault();
    return passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };

  const testUser = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };

  const submitHandler = (e) => {
    e.preventDefault();
    loginHandler(userCredentials);
  };

  const PostLogin = () => {
    useEffect(() => {
      toastifyMessageService("success", "Successfully Logged In!");
    }, []);

    return (
      <div className="post-login">
        <h1>Successfully logged in</h1>
        <Link to="/products">
          <button className="post-login__btn">Start Shopping</button>
        </Link>
        <ToastContainer autoClose={2000} />
        <Footer />
      </div>
    );
  };

  return token ? (
    <PostLogin />
  ) : (
    <>
      <form className="form-container" onSubmit={submitHandler}>
        <h2 className="login-page-h2">Sign In</h2>

        <label className="labels" htmlFor="email">
          Email Address:{" "}
          <input
            className="inputs"
            type="text"
            name="input-email"
            value={userCredentials.email}
            onChange={(e) =>
              setUserCredentials((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
            placeholder="  shawn@gmail.com"
            required
          />
        </label>
        <label className="labels" htmlFor="password">
          Password:{" "}
          <input
            className="inputs"
            type={passwordType}
            name="input-password"
            value={userCredentials.password}
            onChange={(e) =>
              setUserCredentials((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
            placeholder="  •••••••••"
            required
          />
          <button
            className="inputs__button-icons"
            onClick={togglePasswordState}
          >
            <img
              src={passwordType === "password" ? hidePassword : showPassword}
              className="inputs__password-icons"
              alt="Hide or show password"
            />
          </button>
        </label>
        <br />
        <button type="submit" className="btns-sign-ins">
          SIGN IN
        </button>
        <button
          type="submit"
          onClick={() => {
            setUserCredentials(testUser);
          }}
          className="btns-sign-ins"
        >
          LOG IN AS GUEST
        </button>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="link-signup">
            Sign Up
          </Link>
        </p>
      </form>
      <Footer />
      <ToastContainer autoClose={2000} />
    </>
  );
};
