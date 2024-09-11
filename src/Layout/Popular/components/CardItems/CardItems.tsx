import React, { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from 'react'
import styles from './CardItems.module.css'
import Image, { StaticImageData } from 'next/image'

interface ICardItems extends DetailedHTMLProps<
		HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	type: string;
	article: string;
	sizes: number;
	image: StaticImageData;
}

const CardItems = ({type, article, sizes, image, ...props}: ICardItems,) => {
  return (
	<div className={styles.cardItems} {...props}>
		<div className={styles.typeBox}>
			<span className={styles.type}>
				{type}
			</span>
			<p className={styles.article}>
				{article}
			</p>
		</div>
		<span className={styles.sizes}>{sizes} sizes</span>
		<Image className={styles.image} src={image} alt='photoCard'/>
	</div>
  )
}

export default CardItems