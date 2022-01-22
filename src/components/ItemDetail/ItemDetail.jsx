import styles from "./ItemDetail.module.css";
export const ItemDetail = ({ item }) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Name: {item.name}</h1>
        <img className={styles.image} src={item.image} alt={item.name} />
        <span className={styles.price}>Is from: {item.location.name}</span>
        <p className={styles.description}>Species: {item.species}</p>
      </div>
    </>
  );
};
