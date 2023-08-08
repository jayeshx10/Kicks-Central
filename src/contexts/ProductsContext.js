import React from "react";
import { createContext, useState, useEffect, useReducer } from "react";
import { GetAllProducts } from "services/services";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [productsDB, setProductsDB] = useState([]);

  const getData = async () => {
    try {
      const response = await GetAllProducts();
      setProductsDB(response.data.products);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addFlag = (type, product) => {
    const { _id } = product;
    const newData = productsDB.map((product) => {
      return product._id === _id
        ? type === "wishlist"
          ? { ...product, isWished: true }
          : { ...product, inCart: true }
        : product;
    });
    setProductsDB(newData);
  };

  const removeFlag = (type, product) => {
    const { _id } = product;
    const newData = productsDB.map((product) => {
      return product._id === _id
        ? type === "wishlist"
          ? { ...product, isWished: false }
          : { ...product, inCart: false }
        : product;
    });
    setProductsDB(newData);
  };

  const initialFilterState = {
    searchedKeyword: "",
    rating: 2,
    sorting: "",
    brands: [],
  };

  const filtersReducer = (state, action) => {
    switch (action.type) {
      case "searchedKeyword":
        return { ...state, searchedKeyword: action.payload.toUpperCase() };
      case "rating":
        return { ...state, rating: action.payload };
      case "sorting":
        return { ...state, sorting: action.payload };
      case "clearFilters":
        return {
          ...state,
          rating: 2,
          sorting: "",
          brands: [],
        };
      default:
        return state;
    }
  };

  const [filters, dispatch] = useReducer(filtersReducer, initialFilterState);

  const productsPostSearch = filters.searchedKeyword
    ? productsDB.filter(
        ({ name, brand }) =>
          name.toUpperCase().includes(filters.searchedKeyword) ||
          brand.toUpperCase().includes(filters.searchedKeyword)
      )
    : productsDB;

  const productsPostRating = filters.rating
    ? productsPostSearch.filter((product) => product.rating >= filters.rating)
    : productsPostSearch;

  const productsPostSorting = filters.sorting
    ? filters.sorting === "lowToHigh"
      ? productsPostRating.sort((a, b) => a.price - b.price)
      : productsPostRating.sort((a, b) => b.price - a.price)
    : productsPostRating;

  return (
    <ProductsContext.Provider
      value={{
        productsDB,
        addFlag,
        removeFlag,
        productsPostSorting,
        dispatch,
        filters,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
