import React from 'react'

import styles from './ItemDesign.module.css';
import { DATA } from './constant/const';
import CardItems from '@/Layout/Popular/components/CardItems/CardItems';

const ItemDesign = () => {
  return (
	<div className={styles.itemDesign}>
		<h2 className={styles.title}>Choose item <br/> to design</h2>
		{DATA.map((item, index) => (
			<CardItems key={index} sizes={item.sizes} type={item.type} image={item.image} article={item.article}/>
		))}
	</div>
  )
}

export default ItemDesign