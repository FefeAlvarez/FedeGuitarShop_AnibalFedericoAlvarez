import styles from "./ItemListContainer.module.css";
import { ItemCount } from "../ItemCount/ItemCount.jsx";
import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";

export const ItemListContainer = ({ greeting }) => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    setCharacters(data.results);
  };
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <div>
      <h1 className={styles.title}>{greeting}</h1>
      <ItemCount stock={20} initial={1} />
      <ItemList products={characters} />
    </div>
  );
};
