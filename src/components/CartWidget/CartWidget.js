import styles from "./CartWidget.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const CartWidget = () => {
  return (
    <div>
      <FontAwesomeIcon
        className={styles.cartWidgetStyles}
        icon={faShoppingCart}
      />
    </div>
  );
};
