import { Link } from 'react-router-dom'
import styles from './Item.module.css'
import { Card, Space, Button, Typography } from '@douyinfe/semi-ui'

export const Item = ({ id, title, image, category }) => {
	const { Meta } = Card
	const { Text } = Typography
	// <div className={styles.item}>
	//   <div className={styles.card}>
	//     <Link to={`/products/${id}`}>
	//       <h1 className={styles.title}> {title}</h1>
	//       <img className={styles.image} src={image} alt={title} />
	//       <p>ver detalle</p>
	//     </Link>
	//     <Link to={`/category/${category}`}>
	//       <p>{category}</p>
	//     </Link>
	//   </div>
	// </div>

	return (
		<Link to={`/products/${id}`}>
			<Card
				style={{ maxWidth: 360 }}
				title={
					<Meta
						title={title}
						style={{
							whiteSpace: 'nowrap',
						}}
					/>
				}
				// headerExtraContent={<Text link>More</Text>}
				cover={
					<img
						alt='example'
						src={image}
						style={{
							width: '358px',
							height: '269px',
							objectFit: 'contain',
						}}
					/>
				}
				footerLine={true}
				footerStyle={{ display: 'flex', justifyContent: 'flex-end' }}
				footer={
					<Space>
						{/* <Button theme='borderless' type='primary'>
							Featured Case
						</Button> */}
						<Button
							style={{ backgroundColor: '#ff9100' }}
							theme='solid'
							type='primary'
						>
							Ver mas
						</Button>
					</Space>
				}
			></Card>
		</Link>
	)
}
