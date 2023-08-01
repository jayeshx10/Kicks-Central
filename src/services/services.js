import axios from "axios";

export const GetAllProducts = async () => axios.get("/api/products");

export const GetProductsByCategory = async () => axios.get("/api/categories");

export const loginUser = async ({ email, password }) => {
  return axios.post("/api/auth/login", {
    email,
    password,
  });
}; 
