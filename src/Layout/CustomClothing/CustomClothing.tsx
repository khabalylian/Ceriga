import React from 'react';

import CardCustom from './components/CardCustom/CardCustom';

import clothing from './assets/clothes.png';
import tshirt from './assets/tshirt.png';
import tshirtSecond from './assets/tshirtcsecond.png';
import { PointOne, PointTwo, PointThree } from './components/SvgIcons/PointSvg';

import styles from './CustomClothing.module.css';

const DATA = [
	{imgage: clothing, title: 'Pick a product', descr: 'Choose from 333 premium products', icon: PointOne, reverse: false},
	{imgage: tshirt, title: 'Create the design', descr: 'Use built-in tools to design directly on your product', icon: PointTwo, reverse: true},
	{imgage: tshirtSecond, title: 'Order the product', descr: 'Sit tight while we fulfill and ship your order', icon: PointThree, reverse: false}
]

const CustomClothing = () => {
  return (
	<div className={styles.customClothing}>
		<h2 className={styles.title}>HOW TO DESIGN <span>CUSTOM</span> CLOTHING</h2>
		{DATA.map(item => <CardCustom key={item.title} reverse={item.reverse} image={item.imgage} descr={item.descr} Icon={item.icon} title={item.title}/>)}
	</div>
  )
}

export default CustomClothing
