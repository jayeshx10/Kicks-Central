import React from "react";
import { useState, createContext } from "react";
import { loginUserService } from "services/services.js";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));
  const [token, setToken] = useState(localStorageToken?.token);
  const [currUser, setCurrUser] = useState(localStorageToken?.user);

  const loginHandler = async (loginData) => {
    const { email, password } = loginData;
    try {
      const response = await loginUserService(loginData);
      const {
        data: { foundUser, encodedToken },
        status,
      } = response;
      console.log(foundUser.cart);

      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        setToken(encodedToken);
        setCurrUser(foundUser);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ token, setToken, currUser, loginHandler }}>
      {children}
    </AuthContext.Provider>
  );
};
