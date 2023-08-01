import { useState } from "react";

import "styles/AboutProduct.css";
export const AboutProduct = ({ about }) => {
  const [state, setState] = useState(false);
  return (
    <div>
      <div className="about-product">
        <p>ABOUT PRODUCT </p>
        <button onClick={() => setState(!state)} className="btn-about">
          {state ? (
            <img
              src="https://img.icons8.com/?size=512&id=85458&format=png"
              height="25"
              alt="plus-icon"
            />
          ) : (
            <img
              src="https://img.icons8.com/?size=512&id=3220&format=png"
              height="25"
              alt="minus-icon"
            />
          )}
        </button>
      </div>
      <hr />
      {state && (
        <div className="about-card">
          <p>{about}</p>
        </div>
      )}
    </div>
  );
};
