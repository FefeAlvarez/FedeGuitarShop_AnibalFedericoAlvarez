import { Item } from '../Item/Item'
import { Spin } from '@douyinfe/semi-ui'
import styles from './ItemList.module.css'

export const ItemList = ({ products }) => {
	return (
		<div className={styles.itemList}>
			{products.length ? (
				products.map((product) => (
					<Item
						key={product.id}
						id={product.id}
						title={product.title}
						image={product.image}
						category={product.category}
					/>
				))
			) : (
				<div className={styles.message}>
					<Spin size='large' />
					<p className={styles.messageText}>Loading...</p>
				</div>
			)}
		</div>
	)
}
