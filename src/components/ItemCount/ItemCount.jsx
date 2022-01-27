import styles from "./ItemCount.module.css";

import { useState } from "react";

export const ItemCount = ({ initial, stock, onAdd }) => {
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

  /* const onAdd = () => {
    const alertmsg = `Felicidades! Agregaste al carrito: ${count} producto`;
    count > initial ? alert(`${alertmsg}s`) : alert(alertmsg);
  }; */

  return (
    <div className={styles.counterDiv}>
      <div className={styles.buttonContainer}>
        <button className={styles.buttons} onClick={onDecrease}>
          -
        </button>

        <p className={styles.amountCounter}>Cantidad: {count} </p>
        <button className={styles.buttons} onClick={onIncrease}>
          +
        </button>
      </div>
      <button className={styles.addButton} onClick={onAdd} value={count}>
        Agregar al carrito
      </button>
    </div>
  );
};
