import { Link } from 'react-router-dom'
import { styles } from './Item.styles.js'
import { Card, Space, Button, Tag } from '@douyinfe/semi-ui'

export const Item = ({ id, title, image, category }) => {
	const { Meta } = Card

	return (
		<Link to={`/products/${id}`}>
			<Card
				style={{ maxWidth: 360 }}
				title={<Meta title={title} style={styles.meta} />}
				cover={<img alt='example' src={image} style={styles.cover} />}
				footerLine={true}
				footerStyle={styles.footer}
				footer={
					<Space style={styles.space}>
						{/* <Button theme='borderless' type='primary'>
							Featured Case
						</Button> */}
						<Link to={`/category/${category}`}>
							<Tag>{category}</Tag>
						</Link>
						<Button style={styles.button} theme='solid' type='primary'>
							Ver mas
						</Button>
					</Space>
				}
			></Card>
		</Link>
	)
}
