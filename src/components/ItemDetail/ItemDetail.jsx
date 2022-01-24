import styles from "./ItemDetail.module.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
export const ItemDetail = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={item.image} alt={item.title} />
        <h1 className={styles.title}>Product: {item.title}</h1>
        <p>{item.description}</p>
      </div>
      <div className={styles.countContainer}>
        <Link to={`/category/${item.category}`}>
          <p>{item.category}</p>
        </Link>
        <p className={styles.priceTxt}>Precio: USD {item.price}</p>
        <ItemCount initial={1} stock={10} />
        <Link to="/products">Volver</Link>
      </div>
    </div>
  );
};
