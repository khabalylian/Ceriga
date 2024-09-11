'use client'

import React from 'react'
import { A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import CardInform from './components/CardInform';

import laptop from './assets/laptop.png';
import tshirt from './assets/Tshirt.png';

import styles from './AddInform.module.css';
import { ArrowNext, ArrowPrev } from '../Popular/components/SvgIcons/ArrowSvg';

const DATA = [
	{title: 'Printify Blog', image: laptop},
	{title: 'Webinars', image: tshirt},
	{title: 'Printify Blog', image: laptop},
	{title: 'Printify Blog', image: tshirt},
]


const AddInform = () => {
  return (
	<div className={styles.addInfo}>
		<h2 className={styles.title}>Additional Information</h2>
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
			direction="horizontal" // Налаштування напрямку слайдів
			spaceBetween={30}
			slidesPerView={3}
			pagination={{ clickable: true }}
			navigation={{
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}}
			scrollbar={{ draggable: true }} 
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
			className={styles.swiper}
			>
				{DATA.map(item => (
					<SwiperSlide key={item.title} className={styles.swiperCustom}>
						<CardInform image={item.image} title={item.title}/>
					</SwiperSlide>
				))}
				<div style={{position: 'absolute', left: 0, top: '50%', zIndex: 15}} className='swiper-button-prev'><ArrowPrev/></div>
				<div style={{position: 'absolute', right: 0, top: '50%', zIndex: 15}} className='swiper-button-next'><ArrowNext/></div>
		</Swiper>
	</div>
  )
}

export default AddInform