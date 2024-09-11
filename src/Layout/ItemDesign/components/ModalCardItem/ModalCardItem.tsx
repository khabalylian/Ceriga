import React from 'react'
import Image from 'next/image';

import styles from './ModalCardItem.module.css'
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import CloseSvg from '../CloseSvg';

interface IModal {
	title: string;
	image: StaticImageData;
	closeModal: () => void;
}

const ModalCardItem = ({title, image, closeModal}: IModal) => {
  return (
	<>
		<div className={styles.modalWrapper} onClick={closeModal}>
		</div>
		<div className={styles.modal}>
			<CloseSvg onClick={closeModal} className={styles.closeModal}/>
			<Image className={styles.image} src={image} alt='imgClothes'/>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>{title}</h2>
				<Link className={styles.button} href=''>Start Designing</Link>
				<div className={styles.description}>
					<div className={styles.box}>
						<div className={styles.property}>Moq</div>
						<div className={styles.descrProps}>50</div>
					</div>
					<div className={styles.box}>
						<div className={styles.property}>Fabric</div>
						<div className={styles.descrProps}>100 % cotton (50 cent each), fleece100% cotton (50 cent each), French terry (1 euro each) depending on what fabric is chosen, the colour selection is different. French terry should have less available colours</div>
					</div>
					<div className={styles.box}>
						<div className={styles.property}>Color option</div>
						<div className={styles.descrProps}>Up to 30 colors (can only select 3 colours, adding more individual colours adds 1 euro)</div>
					</div>
					<div className={styles.box}>
						<div className={styles.property}>Dye style</div>
						<div className={styles.descrProps}>Reactive (1 euro), fade out (1 euro), pigment (1.50 euro), acid dye (2 euro)</div>
					</div>
					<div className={styles.box}>
						<div className={styles.property}>Fit</div>
						<div className={styles.descrProps}>Slim, oversized, boxy,</div>
					</div>
				</div>
			</div>
		</div>
	</>
  )
}

export default ModalCardItem