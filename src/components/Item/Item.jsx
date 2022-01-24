import { Link } from "react-router-dom";
import styles from "./Item.module.css";

export const Item = ({ id, title, image, category }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Link to={`/products/${id}`}>
          <h1 className={styles.title}> {title}</h1>
          <img className={styles.image} src={image} alt={title} />
          <p>ver detalle</p>
        </Link>
        <Link to={`/category/${category}`}>
          <p>{category}</p>
        </Link>
      </div>
    </div>
  );
};
