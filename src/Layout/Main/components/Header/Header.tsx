import React from 'react'
import Image from 'next/image'

import Logo from '../SvgIcon/LogoSvg'
import BellsSvg from '../SvgIcon/BellsSvg'
import userPhoto from '../../assets/userPhoto.png'

import styles from './Header.module.css'

const Header = () => {
  return (
	<header className={styles.header}>
		<div className={styles.content}>
			<Logo/>
			<BellsSvg/>
		</div>
		<span className={styles.vertLine}></span>
		<div className={styles.user}>
			<Image src={userPhoto} alt='userPhoto' />
			<h3 className={styles.userName}>Adam Sendler</h3>
		</div>
	</header>
  )
}

export default Header