import { useEffect, useState } from "react";
import styles from "./Categories.module.css";

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    console.log("ojala llueva category", data);
    setCategories(data);
  };
  console.log("aver si llovio?", categories);
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className={styles.contenedor}>
      {categories.map((category) => (
        <div key={category}>
          <h1>{category}</h1>
        </div>
      ))}
    </div>
  );
};
