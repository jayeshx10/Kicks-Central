import React from "react";
import { Link } from "react-router-dom";

import "styles/home.css";
import {
  newBalancePink,
  pinkSkates,
  whiteAirForce,
  skateboardShoes,
  zenFlex,
  aeroWalk,
  infinityWalk,
  styleSprint,
  swiftStrike,
  velocityX,
  flexStride,
  aeroTech,
  techGrip,
} from "Images/ImagesLinks";

export const Home = () => {
  return (
    <div className="home">
      <div className="home__container-1">
        <div className="discover-card">
          <img src={newBalancePink} className="discover__img" />
          <p className="discover__primary-text">Discover</p>
          <p className="discover__secondary-text">Solid Colors</p>
          <Link to="/products" className="discover__links">
            Explore
          </Link>
        </div>
        <div className="trends-card">
          <img src={pinkSkates} className="trends__img" />
          <p className="trends__primary-text">Trends</p>
          <p className="trends__secondary-text">Upcoming</p>
          <Link to="/products" className="trends__links">
            Explore
          </Link>
        </div>
        <div className="flex-col">
          <div className="effortlessly-card">
            <img src={whiteAirForce} className="effortlessly__img" />
            <p className="effortlessly__primary-text">Effortlessly</p>
            <p className="effortlessly__secondary-text">Transition</p>
            <Link to="/products" className="effortlessly__links">
              Explore
            </Link>
          </div>
          <div className="styling-card">
            <img src={skateboardShoes} className="styling__img" />
            <p className="styling__primary-text">Styling</p>
            <p className="styling__secondary-text">Edgy</p>
            <Link to="/products" className="styling__links">
              Explore
            </Link>
          </div>
        </div>
      </div>
      <p className="home__heading">New Arrivals</p>
      <ul className="home__ul">
        <li className="ul__li">
          <img src={zenFlex} className="li__img" />
          <p className="li__title">ZenFlex</p>
          <p className="li__type">Sliders</p>
        </li>
        <li className="ul__li">
          <img src={aeroWalk} className="li__img" />
          <p className="li__title">AeroWalk</p>
          <p className="li__type">Basketball</p>
        </li>
        <li className="ul__li">
          <img src={infinityWalk} className="li__img" />
          <p className="li__title">InfinityWalk</p>
          <p className="li__type">Sandals</p>
        </li>
        <li className="ul__li">
          <img src={styleSprint} className="li__img" />
          <p className="li__title">StyleSprint</p>
          <p className="li__type">Classics</p>
        </li>
      </ul>
      <div className="swift-strike">
        <Link to="/products" className="swift-strike swift-strike__links">
          <p className="swift-strike__offer-label">Flat 30% Off</p>
          <div className="container-3d">
            <div className="container-3d__bg-div">
              <ul className="container-3d__ul">
                <li>Flat 30% Off</li>
                <li>Flat 30% Off</li>
                <li>Flat 30% Off</li>
                <li>Flat 30% Off</li>
                <li>Flat 30% Off</li>
              </ul>
            </div>
            <img src={swiftStrike} className="img__swift-strike" />
          </div>
          <div className="swift-strike__info">
            <p>SwiftStrike</p>
            <p>Sneakers</p>
            <p>
              Introducing the SwiftStrike by KicksCentral a stylish and
              comfortable choice for sneaker enthusiasts. These sneakers combine
              modern design with premium materials to deliver a versatile and
              fashionable footwear option.
            </p>
            <button>Explore Now</button>
          </div>
          <p className="swift-strike__terms-label">T&C applied</p>
        </Link>
      </div>
      <p className="home__heading">Try Trending</p>
      <div className="home__try-trending">
        <div className="flex-col">
          <div className="collection-card__small">
            <img src={pinkSkates} />
            <p className="card__title">Urban</p>
            <p className="card__type">Women's collection</p>
            <Link to="/products">
              <button className="card__button">Shop</button>
            </Link>
          </div>
          <div className="collection-card__small">
            <img src={pinkSkates} />
            <p className="card__title">Chic</p>
            <p className="card__type">Unisex collection</p>
            <Link to="/products">
              <button className="card__button">Shop</button>
            </Link>
          </div>
        </div>
        <div className="collection-card__big">
          <img src={pinkSkates} />
          <p className="card__title">Versatile</p>
          <p className="card__type">Men's collection</p>
          <Link to="/products">
            <button className="card__button">Shop</button>
          </Link>
        </div>
      </div>
      <p className="home__heading">Bestseller of ‘22</p>
      <ul className="home__ul">
        <li className="ul__li">
          <img src={velocityX} className="li__img" />
          <p className="li__title">VelocityX</p>
          <p className="li__type">Sneakers</p>
        </li>
        <li className="ul__li">
          <img src={flexStride} className="li__img" />
          <p className="li__title">FlexStride</p>
          <p className="li__type">Sneakers</p>
        </li>
        <li className="ul__li">
          <img src={aeroTech} className="li__img" />
          <p className="li__title">AeroTech</p>
          <p className="li__type">Sneakers</p>
        </li>
        <li className="ul__li">
          <img src={techGrip} className="li__img" />
          <p className="li__title">TechGrip</p>
          <p className="li__type">Sneakers</p>
        </li>
      </ul>
    </div>
  );
};
