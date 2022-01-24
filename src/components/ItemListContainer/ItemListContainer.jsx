import styles from "./ItemListContainer.module.css";

import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log("soy la data del fetch", data);
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{greeting}</h1>

      <ItemList products={products} />
    </div>
  );
};
