import React from "react";
import logo from "../assets/images/Asset 20@4x.png";
import Nav from "./Nav";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Logo" width="50" />
      <Nav />
      <p>Contact</p>
      <ul>
        <li>
          <a>Address</a>
        </li>
        <li>
          <a>Phone number</a>
        </li>
        <li>
          <a>Email</a>
        </li>
      </ul>

<p>Social Media Links</p>
      <ul>
        <li>
          <a>Address</a>
        </li>
        <li>
          <a>Phone number</a>
        </li>
        <li>
          <a>Email</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
