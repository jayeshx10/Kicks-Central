import axios from "axios";

export const GetAllProducts = async () => axios.get("/api/products");

export const GetProductsByCategory = async () => axios.get("/api/categories");

export const loginUserService = async ({ email, password }) => {
  return axios.post("/api/auth/login", {
    email,
    password,
  });
};

export const getWishlistDataService = async (encodedToken) => {
  return axios.get("/api/user/wishlist", {
    headers: {
      authorization: encodedToken,
    },
  });
};

export const getCartDataService = async (encodedToken) => {
  return axios.get("/api/user/cart", {
    headers: {
      authorization: encodedToken,
    },
  });
};
