import styles from './CartWidget.module.css'
import { Badge } from '@douyinfe/semi-ui'
import { IconCart } from '@douyinfe/semi-icons'

export const CartWidget = () => {
	const style = {
		badge: { width: '18px', height: '18px' },
	}

	return (
		<Badge
			count={5}
			style={style.badge}
			style={{ color: 'white', backgroundColor: '#FF6D00' }}
		>
			<IconCart size='large' style={{ color: '#ff9100' }} />
		</Badge>
	)
}
