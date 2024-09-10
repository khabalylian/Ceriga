import React, { ComponentType, ReactNode } from 'react';
import Image, {StaticImageData} from 'next/image';

import styles from './CardCustom.module.css';

interface ICustomClothing {
	image: StaticImageData;
	title: string;
	descr: string;
	Icon: ComponentType;
	reverse: boolean;
}

const CardCustom = ({image, title, descr, Icon, reverse}: ICustomClothing) => {
  return (
	<>
		{
			!reverse ? (
				<div className={styles.customCard}>
					<Image src={image} alt='imgCard'/>
					<div className={styles.wrapper}>
						<Icon/>
						<div className={styles.boxText}>
							<h3 className={styles.title}>{title}</h3>
							<p className={styles.descr}>{descr}</p>
						</div>
					</div>
				</div>
			) : (
				<div className={styles.customCard}>
					<div className={styles.wrapper}>
						<Icon/>
						<div className={styles.boxText}>
							<h3 className={styles.title}>{title}</h3>
							<p className={styles.descr}>{descr}</p>
						</div>
					</div>
					<Image src={image} alt='imgCard'/>
				</div>
			)
		}
	</>
  )
}

export default CardCustom