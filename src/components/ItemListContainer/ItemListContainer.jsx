import { ItemCount } from "../ItemCount/ItemCount";
import styles from "./ItemListContainer.module.css";

export const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1 className={styles.title}>{greeting}</h1>
      <ItemCount initial={1} stock={20} />
    </div>
  );
};
