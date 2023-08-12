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

  const initialFilterState = {
    searchedKeyword: "",
    rating: 2,
    sorting: "",
    categories: [],
  };

  const filtersReducer = (state, action) => {
    switch (action.type) {
      case "searchedKeyword":
        return { ...state, searchedKeyword: action.payload.toUpperCase() };
      case "rating":
        return { ...state, rating: action.payload };
      case "sorting":
        return { ...state, sorting: action.payload };
      case "categories":
        return {
          ...state,
          categories: state.categories.includes(action.payload)
            ? state.categories.filter((item) => item !== action.payload)
            : [...state?.categories, action.payload],
        };
      case "singleCategoryFilter":
        return {
          ...state,
          categories: action.payload ? [action.payload] : [],
        };
      case "clearFilters":
        return {
          ...state,
          rating: 2,
          sorting: "",
          categories: [],
        };
      default:
        return state;
    }
  };

  const [filters, dispatch] = useReducer(filtersReducer, initialFilterState);

  const productsPostCategoriesFilter =
    filters.categories.length > 0
      ? productsDB?.filter((product) =>
          filters?.categories.some(
            (category) => category === product?.categoryName
          )
        )
      : productsDB;

  const productsPostSearch = filters.searchedKeyword
    ? productsPostCategoriesFilter.filter(
        ({ name, brand }) =>
          name.toUpperCase().includes(filters.searchedKeyword) ||
          brand.toUpperCase().includes(filters.searchedKeyword)
      )
    : productsPostCategoriesFilter;

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
        productsPostSorting,
        dispatch,
        filters,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
