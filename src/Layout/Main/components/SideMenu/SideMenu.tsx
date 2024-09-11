import React, { useState } from 'react'
import cn from 'classnames'

import { MenuClose, MenuOpen } from '../SvgIcon/MenuSvg';
import BoxSvg from '../SvgIcon/BoxSvg';
import TShirtSvg from '../SvgIcon/TShirtSvg';
import EditSvg from '../SvgIcon/EditSvg';
import Track from '../SvgIcon/Track';
import Credit from '../SvgIcon/Credit';

import styles from './SideMenu.module.css';
import Logo from '../SvgIcon/LogoSvg';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const SideMenu = () => {
	const [checkOpenMenu, setCheckOpenMenu] = useState<boolean>(false);

	const router = usePathname();
  
	const openMenu = () => {
		setCheckOpenMenu(true);
	}

	const closeMenu = () => {
		setCheckOpenMenu(false);
	}

	return (
		<div className={cn(styles.sideMenu, {
				[styles.animateMenu]: checkOpenMenu
			})}>
			<div className={styles.sideMenuTop}>
				<Logo className={cn(styles.menuLogo, {
					[styles.showMenuLogo]: checkOpenMenu
				})}/>
				{
					checkOpenMenu ? <MenuClose onClick={closeMenu}/> : <MenuOpen onClick={openMenu}/>
				}
			</div>
			<div className={cn(styles.sideMenuContent, {
				[styles.animateContentMenu]: checkOpenMenu
			})}>
				<Link href='/' className={cn(styles.menuTextBox, {
					[styles.activeLink]: router === '/'
				})}>
					<BoxSvg/>
					<p className={cn(styles.menuText, {
						[styles.animateMenu]: checkOpenMenu,
					})}>Dashboard</p>
				</Link>
				<Link href='/design' className={cn(styles.menuTextBox, {
					[styles.activeLink]: router === '/design'
				})}>
					<TShirtSvg/>
					<p className={cn(styles.menuText, {
						[styles.animateMenu]: openMenu,
					})}>Catalog</p>
				</Link>
				<div className={styles.menuTextBox}>
					<EditSvg/>
					<p className={cn(styles.menuText, {
						[styles.animateMenu]: openMenu
					})}>My drafts</p>
				</div>
				<div className={styles.menuTextBox}>
					<Track/>
					<p className={cn(styles.menuText, {
						[styles.animateMenu]: openMenu
					})}>Orders</p>
				</div>
				<div className={styles.menuTextBox}>
					<Credit/>
					<p className={cn(styles.menuText, {
						[styles.animateMenu]: openMenu
					})}>Wallet</p>
				</div>
			</div>
		</div>
	)
}

export default SideMenu