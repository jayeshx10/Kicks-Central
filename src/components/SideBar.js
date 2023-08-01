import { useContext, useState } from "react";
import { ProductsContext } from "contexts/ProductsContext";

import "styles/sidebar.css";

export const SideBar = () => {
  const { productsDB, productsPostSorting, dispatch, filters, clearFilters } =
    useContext(ProductsContext);

  return (
    <div className="sidebar-div">
      <div className="sidebar-div-1">
        <h2>Filters</h2>
        <button
          className="btn-clearAll"
          onClick={() => dispatch({ type: "clearFilters" })}
        >
          {" "}
          <span className="span-clearAll">X Clear All</span>
        </button>
      </div>
      <div className="sidebar-div-2">
        <p className="p-sidebar-filters">Sort: </p>
        <div className="price-radio-btns">
          <label className="radio-labels">
            <input
              type="radio"
              value="lowToHigh"
              checked={filters.sorting === "lowToHigh"}
              onChange={(e) =>
                dispatch({ type: "sorting", payload: e.target.value })
              }
            />{" "}
            Low to High
          </label>
          <label className="radio-labels">
            <input
              type="radio"
              value="highToLow"
              checked={filters.sorting === "highToLow"}
              onChange={(e) =>
                dispatch({ type: "sorting", payload: e.target.value })
              }
            />{" "}
            High to Low
          </label>
        </div>
      </div>
      <hr />
      <div className="sidebar-div-3">
        <p>
          <span className="p-sidebar-filters">Ratings </span> (1-5)★
        </p>
        <input
          type="range"
          min={0}
          max={5}
          className="slider"
          value={Number(filters.rating)}
          onChange={(e) =>
            dispatch({ type: "rating", payload: e.target.value })
          }
        />
      </div>
      <hr />
      <div className="sidebar-div-4">
        <p className="p-sidebar-filters">Category</p>
        <div className="category-checkboxes">
          <label className="checkbox-labels">
            <input
              type="checkbox"
              className="checkbox-category"
              name="sneakers"
            />
            Sneakers
          </label>
          <label className="checkbox-labels">
            <input
              type="checkbox"
              className="checkbox-category"
              name="basketball"
            />
            Basketball
          </label>
          <label className="checkbox-labels">
            <input
              type="checkbox"
              className="checkbox-category"
              name="classics"
            />
            Classics
          </label>
          <label className="checkbox-labels">
            <input
              type="checkbox"
              className="checkbox-category"
              name="skateboard"
            />
            Skateboard
          </label>
          <label className="checkbox-labels">
            <input
              type="checkbox"
              className="checkbox-category"
              name="slides"
            />
            Slides
          </label>
          <label className="checkbox-labels">
            <input
              type="checkbox"
              className="checkbox-category"
              name="sandals"
            />
            Sandals
          </label>
        </div>
      </div>
    </div>
  );
};
