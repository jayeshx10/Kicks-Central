import React from "react";
import { useState, createContext } from "react";
import { loginUser } from "services/services.js";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("loginItems"));
  const [token, setToken] = useState(localStorageToken?.token);
  const [currUser, setCurrUser] = useState(localStorageToken?.user);

  const loginHandler = async (loginData) => {
    try {
      const {
        data: { foundUser, encodedToken },
        statusCode,
      } = await loginUser(loginData);
      if (statusCode === 200 || statusCode === 201) {
        localStorage.setItem(
          "loginItems",
          JSON.stringify({ token: encodedToken, user: foundUser })
        );
        setCurrUser(foundUser);
        setToken(encodedToken);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ token, loginHandler }}>
      {children}
    </AuthContext.Provider>
  );
};
