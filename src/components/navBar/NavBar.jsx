import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import styles from './NavBar.module.css'
import guitar from '../../assests/guitar.png'

export const NavBar = () => {
	return (
		<header className={styles.navbar}>
			<Link to='/' className={styles.logo}>
				<img className={styles.logoIcon} src={guitar} alt='guitar icon' />
				<p className={styles.logoText}>Fede's Guitar</p>
			</Link>
			<nav className={styles.categories}>
				<NavLink
					exact
					className={styles.category}
					activeClassName={styles.activeCategory}
					to='/'
				>
					Home
				</NavLink>
				<NavLink
					className={styles.category}
					activeClassName={styles.activeCategory}
					to='/products'
				>
					Catalog
				</NavLink>

				<NavLink
					className={styles.category}
					activeClassName={styles.activeCategory}
					to='/cart'
				>
					Cart
				</NavLink>
			</nav>

			<Link to='/cart'>
				<CartWidget />
			</Link>
		</header>
	)
}
