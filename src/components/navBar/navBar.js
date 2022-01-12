import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <h3>Fede's Guitar Shop</h3>
      <ul className="listaMenu">
        <li>Home</li>
        <li>About us</li>
        <li>Guitars</li>
        <li>Accesories</li>
        <li>Contact Us</li>
      </ul>
      <CartWidget />
    </nav>
  );
};
