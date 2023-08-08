import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import "styles/signup.css";
import { AuthContext } from "contexts/AuthContext";
import { Footer } from "components/Footer";
import { hidePassword, showPassword } from "Images/Icons";

export const Signup = () => {
  const { signupHandler } = useContext(AuthContext);

  const [passwordType, setPasswordType] = useState("password");

  const togglePasswordState = () => {
    return passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };

  const [signupDetails, setSignupDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    addresses: [],
  });

  const changeHandler = (e) => {
    setSignupDetails((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const formSubmitter = async (e) => {
    e.preventDefault();
    if (signupDetails.password === signupDetails.confirmPassword) {
      signupHandler(signupDetails);
    } else {
      alert("Password Mismatch");
    }
  };

  return (
    <>
      <form className="main-container" onSubmit={formSubmitter}>
        <h2 className="signup-h2">Sign Up</h2>
        <div className="input-name-container">
          <div>
            <label className="labels" for="name">
              First Name:{" "}
            </label>
            <br />
            <input
              className="inputs inputs__name"
              type="text"
              name="firstName"
              placeholder="Shawn"
              onChange={changeHandler}
              required
            />
          </div>
          <div>
            <label className="labels" for="name">
              Last Name:{" "}
            </label>
            <br />
            <input
              className="inputs inputs__name"
              type="text"
              name="lastName"
              placeholder="Pattins"
              onChange={changeHandler}
              required
            />
          </div>
        </div>
        <label className="labels" for="email">
          Email Address:{" "}
          <input
            className="inputs"
            type="text"
            name="email"
            placeholder="shawn@gmail.com"
            onChange={changeHandler}
            required
          />
        </label>
        <label className="labels" for="password">
          Password (8 characters minimum):
          <input
            className="inputs"
            type={passwordType}
            name="password"
            placeholder="••••••••••••"
            minlength="8"
            onChange={changeHandler}
            required
          />
          <button
            className="inputs__button-icons"
            onClick={togglePasswordState}
          >
            <img
              src={passwordType === "password" ? showPassword : hidePassword}
              className="inputs__password-icons"
              alt="Hide or show password"
            />
          </button>
        </label>
        <label className="labels" for="cnf-password">
          Confirm Password:{" "}
          <input
            className="inputs"
            type={passwordType}
            name="confirmPassword"
            placeholder="••••••••••••"
            minlength="8"
            onChange={changeHandler}
            required
          />
        </label>
        <button type="submit" className="btn-new-acc">
          CREATE NEW ACCOUNT
        </button>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="link-login">
            Log In
          </Link>
        </p>
      </form>
      <Footer />
    </>
  );
};
