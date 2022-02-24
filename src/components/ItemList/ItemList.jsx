import { Item } from "../Item/Item";
import { Spin } from "@douyinfe/semi-ui";
import styles from "./ItemList.module.css";

export const ItemList = ({ items }) => {
  return (
    <div className={styles.itemList}>
      {items.length ? (
        items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            category={item.category}
          />
        ))
      ) : (
        <div className={styles.message}>
          <Spin size="large" />
          <p className={styles.messageText}>Loading...</p>
        </div>
      )}
    </div>
  );
};
