import React from "react";

import classes from "./Header.module.css";
import mealsImage from "../../assets/mealsimage.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <div className="d-flex flex-column justify-content-center">
      <header className="d-flex flex-row justify-content-center bg-dark text-white py-2">
        <a
          href="/"
          className="d-flex align-items-center mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="fs-3 mx-3 fw-bold text-light">Best Meals</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item text-light pt-3">
            <a href="/" className="nav-link text-light" aria-current="page">
              Home
            </a>
          </li>
          <li className="nav-item pt-3">
            <a href="/" className="nav-link text-light">
              My Orders
            </a>
          </li>
          <li className="nav-item pt-3">
            <a href="/" className="nav-link text-light">
              Logout
            </a>
          </li>
          <li className="nav-item pt-3">
            <a href="/" className="nav-link text-light">
              Login
            </a>
          </li>
          <li className="nav-item">
            <p className="nav-link text-light">
              <HeaderCartButton onClick={props.onShowCart} />
            </p>
          </li>
        </ul>
      </header>
      <div className={classes["main-image"]}>
        <img
          src={mealsImage}
          className="img-fluid mx-auto d-block"
          alt="Meals on a table"
        />
      </div>
    </div>
  );
};

export default Header;
