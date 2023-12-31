import axios from "axios";
import { toast } from "react-toastify";

export const GetAllProducts = async () => axios.get("/api/products");

export const GetProductsByCategory = async () => axios.get("/api/categories");

export const signupService = async (signupDetails) => {
  const { firstName, lastName, email, password, addresses } = signupDetails;

  return axios.post("/api/auth/signup", {
    firstName,
    lastName,
    email,
    password,
    addresses,
  });
};

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

export const addProductService = async (encodedToken, type, product) => {
  const apiEndpoint = `/api/user/${type}`;
  return axios.post(
    apiEndpoint,
    { product },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};

export const removeProductService = async (encodedToken, type, productID) => {
  const apiEndpoint = `/api/user/${type}/${productID}`;
  return axios.delete(apiEndpoint, {
    headers: {
      authorization: encodedToken,
    },
  });
};

export const handleQuantityService = async (encodedToken, type, productID) => {
  return axios.post(
    `/api/user/cart/${productID}`,
    {
      action: {
        type: type,
      },
    },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};

export const toastifyMessageService = (type, msg) => {
  switch (type) {
    case "success":
      return toast.success(msg);
    case "error":
      return toast.error(msg);
    case "info":
      return toast.info(msg);
    default:
      break;
  }
};
