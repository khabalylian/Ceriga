'use client'
import React, { useState } from 'react'

import { DATA } from './constant/const';
import CardItems from '@/Layout/Popular/components/CardItems/CardItems';
import { IData } from '@/interface';

import styles from './ItemDesign.module.css';
import ModalCardItem from './components/ModalCardItem/ModalCardItem';

const ItemDesign = () => {
	const [showCard, setShowCard] = useState<IData | {}>({});
	
	const closeModal = () => {
		setShowCard({});
		document.body.style.overflow = '';
	}

	const openModal = ({image, id, sizes, article, type}: IData) => {
		setShowCard({image, id , sizes, article, type})
		document.body.style.overflow = 'hidden';
	}

	return (
		<div className={styles.itemDesign}>
			<h2 className={styles.title}>Choose item <br/> to design</h2>
			{DATA.map(({image, id, sizes, article, type}, index) => (
				<CardItems onClick={() => openModal({image, sizes, id, article, type})} key={index} sizes={sizes} type={type} image={image} article={article}/>
			))}
			{Object.keys(showCard).length && 'image' in showCard ? <ModalCardItem closeModal={closeModal} image={showCard.image} title={showCard.type}/> : null}
		</div>
	)
}

export default ItemDesign