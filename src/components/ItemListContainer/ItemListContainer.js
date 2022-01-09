import styles from "./ItemListContainer.module.css";

export const ItemListContainer = ({ greeting }) => {
  return <h1 className={styles.title}>{greeting}</h1>;
};
