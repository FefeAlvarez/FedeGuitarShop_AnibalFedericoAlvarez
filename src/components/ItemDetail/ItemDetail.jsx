import styles from "./ItemDetail.module.css";
export const ItemDetail = ({ item }) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>{item.title}</h1>
        <img className={styles.image} src={item.pictureUrl} alt={item.title} />
        <span className={styles.price}>{item.price}</span>
        <p className={styles.description}>{item.description}</p>
      </div>
    </>
  );
};
