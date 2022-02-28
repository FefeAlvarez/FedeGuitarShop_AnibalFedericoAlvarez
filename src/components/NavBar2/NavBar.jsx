import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import styles from "./NavBar.module.css";
import guitar from "../../assets/guitar.png";
import { CartContext } from "../../contexts/cartContext";
import { useContext } from "react";
import { Dropdown } from "@douyinfe/semi-ui";

export const NavBar = () => {
  const { totalProducts } = useContext(CartContext);

  return (
    <header className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img className={styles.logoIcon} src={guitar} alt="guitar icon" />
        <p className={styles.logoText}>Fede's Guitars</p>
      </Link>
      <nav className={styles.categories}>
        <NavLink
          exact
          className={styles.category}
          activeClassName={styles.activeCategory}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={styles.category}
          activeClassName={styles.activeCategory}
          to="/products"
        >
          <Dropdown
            render={
              <Dropdown.Menu>
                <Dropdown.Item>Electric guitars</Dropdown.Item>
                <Dropdown.Item>Acoustic guitars</Dropdown.Item>
                <Dropdown.Item>Basses</Dropdown.Item>
                <Dropdown.Item>Amplifiers</Dropdown.Item>
              </Dropdown.Menu>
            }
          >
            Catalog
          </Dropdown>
        </NavLink>

        <NavLink
          className={styles.category}
          activeClassName={styles.activeCategory}
          to="/cart"
        >
          Cart
        </NavLink>
      </nav>
      {totalProducts >= 1 && (
        <Link to="/cart">
          <CartWidget />
        </Link>
      )}
    </header>
  );
};
