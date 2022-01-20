import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import styles from "./ItemDetailContainer.module.css";

export const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      const response = await fetch(
        "https://coderhouse.franncode.com/api/products"
      );
      const data = await response.json();
      console.log(data, "soy la data");
      setItems(data);
    };
    getItem();
  }, []);
  console.log(items, "soy el item final");

  return (
    <>
      <div className={styles.itemsContainer}>
        {items.map((item) => (
          <ItemDetail key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};
