import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "styles/signup.css";
import { hidePassword, showPassword } from "Images/Icons";

export const Signup = () => {
  const [passwordType, setPasswordType] = useState("password");

  const togglePasswordState = () => {
    return passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };
  return (
    <div className="main-container">
      <h2 className="signup-h2">Sign Up</h2>
      <label className="labels" for="name">
        Name:{" "}
      </label>
      <input
        className="inputs"
        type="text"
        name="name"
        placeholder="Shawn Pattins"
        required
      />
      <label className="labels" for="email">
        Email Address:{" "}
      </label>
      <input
        className="inputs"
        type="text"
        name="email"
        placeholder="shawn@gmail.com"
        required
      />
      <label className="labels" for="password">
        Password (8 characters minimum):
        <input
          className="inputs"
          type={passwordType}
          name="password"
          placeholder="••••••••••••"
          minlength="8"
          required
        />
        <button className="inputs__button-icons" onClick={togglePasswordState}>
          <img
            src={passwordType === "password" ? showPassword : hidePassword}
            className="inputs__password-icons"
          />
        </button>
      </label>
      <label className="labels" for="cnf-password">
        Confirm Password:{" "}
        <input
          className="inputs"
          type={passwordType}
          name="cnf-password"
          placeholder="••••••••••••"
          minlength="8"
          required
        />
      </label>
      <button className="btn-new-acc">CREATE NEW ACCOUNT</button>
      <p>
        Already have an account?{" "}
        <Link to="/login" className="link-login">
          Log In
        </Link>
      </p>
    </div>
  );
};
