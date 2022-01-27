import styles from "./ItemDetail.module.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";

export const ItemDetail = ({ item }) => {
  const [showComponent, setShowComponent] = useState(true);
  const [chosenItem, setChosenItem] = useState();
  const addItem = (e) => {
    setChosenItem(e.target.value);
    setShowComponent(false);
  };
  console.log("cantidad del producto", chosenItem);

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
        {showComponent ? (
          <ItemCount initial={1} stock={10} onAdd={addItem} />
        ) : (
          <div>
            <p>
              Adquiriste exitosamente {chosenItem} unidades de {item.title}
            </p>
            <Link to="/cart">Ir al carrito</Link>
          </div>
        )}

        <Link to="/products">Volver al catálogo</Link>
      </div>
    </div>
  );
};
