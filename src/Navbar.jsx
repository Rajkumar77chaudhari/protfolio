import React from "react";
import "./style/style.css";

const Navbar = () => {
  return (
    <>
      <nav className="navBar">
        <div className="logo">
          <img src="./LOGO_2_00001.svg" alt="logo" />
        </div>
        <ul className="List-container">
          <li className="items">
            <a href="#">Home</a>
          </li>
          <li className="items">
            <a href="#">About</a>
          </li>
          <li className="items">
            <a href="#">Services</a>
          </li>
          <li className="items">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
