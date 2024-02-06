/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from "react";
import "./HeaderTest.css";
import logo from "../../assets/amazon-logo-white.png";
import { IoSearch } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

function HeaderTest() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="header-logo" />
      </Link>

      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <IoSearch className="header-search-icon" />
      </div>

      <div className="header-nav">
        <div className=" header-option-main">
          <span className="header-option-one">Hello, Guest</span>
          <span className="header-option-two">Sign In</span>
        </div>

        <div className="header-option">
          <span className="header-option-one">Returns</span>
          <span className="header-option-two">& Orders</span>
        </div>

        <div className="header-option">
          <span className="header-option-one">Your</span>
          <span className="header-option-two">Prime</span>
        </div>
      </div>

      <Link to="/checkout" className="link">
        <div className="header-option-basket">
          <BsCart3 className="header-basket-icon" />
          <span className="header-option-two header-basket-count">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default HeaderTest;
