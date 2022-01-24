import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <h3>Fede's Guitar Shop</h3>
      </Link>
      <ul className={styles.listaMenu}>
        <li>
          <NavLink
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles.link}
            activeClassName={styles.activeLink}
            to="/products"
          >
            Catalog
          </NavLink>
        </li>

        <li>
          <NavLink
            className={styles.link}
            activeClassName={styles.activeLink}
            to="/cart"
          >
            Cart
          </NavLink>
        </li>
      </ul>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
};
