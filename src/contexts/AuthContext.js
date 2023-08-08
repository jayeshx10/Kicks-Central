import React from "react";
import { useState, createContext } from "react";
import { loginUserService, signupService } from "services/services.js";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));
  const [token, setToken] = useState();
  const [currUser, setCurrUser] = useState();

  const loginHandler = async (loginData) => {
    try {
      const response = await loginUserService(loginData);
      const {
        data: { foundUser, encodedToken },
        status,
      } = response;

      if (status === 200 || status === 201) {
        if (encodedToken === localStorageToken?.token) {
          setToken(localStorageToken.token);
          setCurrUser(localStorageToken.user);
          console.log("if", currUser);
        } else {
          localStorage.setItem(
            "loginDetails",
            JSON.stringify({ user: foundUser, token: encodedToken })
          );
          setToken(encodedToken);
          setCurrUser(foundUser);
          console.log("else", foundUser);
        }
      }
    } catch (error) {
      alert(error.response.data.errors);
    }
  };

  const signupHandler = async (userDetails) => {
    try {
      const response = await signupService(userDetails);
      const {
        data: { createdUser, encodedToken },
        status,
      } = response;

      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: createdUser, token: encodedToken })
        );
        setToken(encodedToken);
        setCurrUser(createdUser);
        console.log("signup", createdUser);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ token, setToken, currUser, loginHandler, signupHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};
