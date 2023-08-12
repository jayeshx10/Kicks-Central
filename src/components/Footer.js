import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "contexts/AuthContext";

import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
} from "Images/Icons";
import "styles/footer.css";

export const Footer = () => {
  const { token } = useContext(AuthContext);
  return (
    <div className="footer">
      {!token && (
        <div className="footer__container-1">
          <p>Join and Get 10% off</p>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      )}
      <div className="footer__container-2">
        <ul className="ul primary-ul">
          <li>Find a store</li>
          <li>Become a member</li>
          <li>Send us feddback</li>
          <li>Student dicount</li>
        </ul>
        <ul className="ul secondary-ul">
          <li>
            <span>SUPPORT</span>
          </li>
          <li>Contact Us</li>
          <li>Promotion and Sale</li>
          <li>Track order</li>
          <li>Privacy</li>
          <li>Terms and Contions</li>
          <li>Cookies</li>
        </ul>
        <ul className="ul secondary-ul">
          <li>
            <span>ABOUT</span>
          </li>
          <li>Company</li>
          <li>Press</li>
          <li>Career</li>
          <li>Sustainability</li>
          <li>Store Funds</li>
        </ul>
        <div className="social-media__links">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <YoutubeIcon />
        </div>
        <p>No Rights Reserved</p>
      </div>
    </div>
  );
};
