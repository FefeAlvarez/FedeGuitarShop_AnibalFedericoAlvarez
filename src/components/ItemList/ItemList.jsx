import { Item } from "../Item/Item";
import styles from "./ItemList.module.css";
export const ItemList = ({ products }) => {
  console.log("hola", products.length);

  return (
    <div>
      <div className={styles.liContainer}>
        {products.length > 0 ? (
          products.map((product) => (
            <div className={styles.listItem} key={product.id}>
              <Item
                id={product.id}
                title={product.title}
                image={product.image}
                category={product.category}
              />
            </div>
          ))
        ) : (
          <div className={styles.msgContainer}>
            <p className={styles.waitingMsg}>loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};
