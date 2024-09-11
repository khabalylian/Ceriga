import React from 'react';
import Image, { StaticImageData } from 'next/image';

import styles from './CardInform.module.css';
import Link from 'next/link';

interface ICardInform {
	title: string;
	image: StaticImageData;
}

const CardInform = ({title, image}: ICardInform) => {
  return (
	<div className={styles.cardInfo}>
		<h3 className={styles.title}>{title}</h3>
		<hr className={styles.line}/>
		<Image className={styles.image} src={image} alt='cardImg'/>
		<Link className={styles.link} href='#'>See more</Link>
	</div>
  )
}

export default CardInform