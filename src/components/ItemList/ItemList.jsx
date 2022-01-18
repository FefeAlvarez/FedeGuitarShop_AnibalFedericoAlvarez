import { Item } from "../Item/Item";
import styles from "./ItemList.module.css";
export const ItemList = ({ products }) => {
  console.log("estoy en IL", products);
  const characterList = products;
  return (
    <div>
      <h1>Item List</h1>
      <div className={styles.liContainer}>
        {characterList.map((char) => (
          <li className={styles.listItem} key={char.id}>
            <Item
              name={char.name}
              image={char.image}
              location={char.location.name}
            />
          </li>
        ))}
      </div>
    </div>
  );
};
