import React from "react";
import "styles/loader.css";

export const Loader = () => {
  return (
    <div className="loader__container">
      <div class="newtons-cradle">
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
      </div>
    </div>
  );
};
