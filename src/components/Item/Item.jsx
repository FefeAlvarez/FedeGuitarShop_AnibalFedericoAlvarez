import styles from "./Item.module.css";

export const Item = ({ name, location, image }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Soy {name}</h1>
        <p className={styles.description}>vivo en {location}</p>
        <img className={styles.image} src={image} alt={name} />
      </div>
    </div>
  );
};
