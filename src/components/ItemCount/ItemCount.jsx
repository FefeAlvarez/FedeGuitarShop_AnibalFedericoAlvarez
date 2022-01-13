import styles from "./ItemCount.module.css";

import { useState } from "react";

export const ItemCount = ({ initial, stock }) => {
  const [count, setCount] = useState(initial);

  const onDecrease = () => {
    const newAmount = count - 1;
    if (newAmount >= initial) {
      setCount(newAmount);
    }
  };

  const onIncrease = () => {
    const newAmount = count + 1;
    if (newAmount <= stock) {
      setCount(newAmount);
    }
  };

  const onAdd = () => {
    const alertmsg = `Felicidades! Agregaste al carrito: ${count} producto`;
    count > initial ? alert(`${alertmsg}s`) : alert(alertmsg);
  };

  return (
    <div className={styles.counterDiv}>
      <h1 className={styles.title}>Soy el contador</h1>
      <h2 className={styles.amountCounter}>Cantidad: {count} </h2>
      <div className={styles.buttonContainer}>
        <button className={styles.buttons} onClick={onDecrease}>
          -
        </button>

        <button className={styles.buttons} onClick={onIncrease}>
          +
        </button>
      </div>
      <button className={styles.addButton} onClick={onAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};
