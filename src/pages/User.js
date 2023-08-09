import React from "react";
import { v4 as uuid } from "uuid";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "styles/user.css";
import { toastifyMessageService } from "services/services.js";
import { Footer } from "components/Footer";
import { DeleteIcon, closeIcon } from "Images/Icons";
import { AuthContext } from "contexts/AuthContext";

export const User = () => {
  const { token, setToken, currUser } = useContext(AuthContext);

  const [userDetails, setUserDetails] = useState(currUser);
  const { firstName, lastName, email, addresses } = userDetails;

  const [newAddress, setNewAddress] = useState("");
  const [modalState, setModalState] = useState(false);

  const deleteAddress = (target) => {
    const newData = addresses.filter((address) => address !== target);
    setUserDetails((prevData) => ({ ...prevData, addresses: newData }));
    toastifyMessageService("success", "Successfully deleted address");
  };

  useEffect(() => {
    localStorage.setItem(
      "loginDetails",
      JSON.stringify({ user: userDetails, token: token })
    );
  }, [userDetails]);

  const logoutHandler = () => {
    setToken("");
    localStorage.removeItem("loginDetails");
  };

  const changeHandler = (e) => {
    setNewAddress(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    toggleModal();
    setUserDetails((prevState) => ({
      ...prevState,
      addresses: [...prevState.addresses, newAddress],
    }));
    toastifyMessageService("success", "Successfully added new address");
  };

  const toggleModal = () => {
    setModalState((prevState) => !prevState);
  };

  const PostLogout = () => {
    useEffect(() => {
      toastifyMessageService("error", "You are Logged out!");
    }, []);

    return (
      <div className="post-logout">
        <h1>You are currently logged out</h1>
        <Link to="/login">
          <button className="post-logout__btn user-page__btns">
            Log In here
          </button>
        </Link>
        <ToastContainer />
        <Footer />
      </div>
    );
  };

  return token ? (
    <>
      <div className="user-details">
        <p>
          <span>Name:</span> {firstName} {lastName}
        </p>
        <p>
          <span>Email:</span> {email}
        </p>
        <p>
          <span>Addresses:</span>
        </p>
        <ul className="user-details__ul">
          {addresses.map((address) => {
            return (
              <li className="user-details__li" key={uuid()}>
                <p className="user-details__li-text">{address}</p>
                <button
                  onClick={() => deleteAddress(address)}
                  className="user-details__li-button"
                >
                  <DeleteIcon />
                </button>
              </li>
            );
          })}
        </ul>
        <div className="user-details__btns-container">
          <button className="user-page__btns" onClick={toggleModal}>
            Add New Address
          </button>
          <button className="user-page__btns" onClick={logoutHandler}>
            Log Out
          </button>
        </div>
        {modalState && (
          <form className="new-address__form" onSubmit={submitHandler}>
            <h2>Enter New Address</h2>
            <textarea rows="2" cols="20" wrap="hard" onChange={changeHandler} />
            <button type="submit" className="user-page__btns">
              Submit
            </button>
            <button onClick={toggleModal} className="address-modal__close-btn">
              <img src={closeIcon} alt="New address modal close button" />
            </button>
          </form>
        )}
      </div>
      <Footer />
      <ToastContainer />
    </>
  ) : (
    <PostLogout />
  );
};
