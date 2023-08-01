import React from "react";
import { Link } from "react-router-dom";

import "styles/signup.css";

export const Signup = () => {
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
        Password:{" "}
      </label>
      <input
        className="inputs"
        type="text"
        name="password"
        placeholder="••••••••••••"
        required
      />
      <label className="labels" for="cnf-password">
        Confirm Password:{" "}
      </label>
      <input
        className="inputs"
        type="text"
        name="cnf-password"
        placeholder="••••••••••••"
        required
      />
      <br />
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
