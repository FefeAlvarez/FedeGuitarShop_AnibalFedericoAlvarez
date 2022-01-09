import React from "react";
import "./NavBar.css";

export const NavBar = ({ children }) => {
  return (
    <nav className="navbar">
      <h3>Fede's Guitar Shop</h3>
      {children}
      <ul className="listaMenu">
        <li>Home</li>
        <li>About us</li>
        <li>Guitars</li>
        <li>Accesories</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};
