/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import styles from "./ItemDetailContainer.module.css";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      console.log(data.results, "soy la data");

      setItem(data.results.find((prod) => prod.id === parseInt(2)));
    };
    getItem();
  }, []);

  console.log(item, "soy el item final");

  return (
    <>
      <div className={styles.itemsContainer}>
        <h1>Soy el ITEM DETAIL</h1>
        <ItemDetail item={item} />
      </div>
    </>
  );
};
