/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import styles from "./ItemDetailContainer.module.css";

export const ItemDetailContainer = () => {
  const { productID } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productID}`
      );
      const data = await response.json();
      setItem(data);
    };
    getItem();
  }, [productID]);

  console.log(item, "soy el item final");

  return (
    <>
      <div className={styles.itemsContainer}>
        <ItemDetail item={item} />
      </div>
    </>
  );
};
