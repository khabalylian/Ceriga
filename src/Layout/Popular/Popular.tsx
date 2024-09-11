'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper/modules';

import tshirt from './assets/tshirt.png';
import 'swiper/css';

import styles from './Popular.module.css'
import CardItems from './components/CardItems/CardItems';
import { ArrowNext, ArrowPrev } from './components/SvgIcons/ArrowSvg';

const DATA = [
	{type: 'basic tshirt', sizes: 9, article: 'MOQ - 1000', image: tshirt},
	{type: 'basic tshirt', sizes: 7, article: 'MOQ - 1000', image: tshirt},
	{type: 'basic tshirt', sizes: 5, article: 'MOQ - 1000', image: tshirt},
	{type: 'basic tshirt', sizes: 4, article: 'MOQ - 1000', image: tshirt},
	{type: 'basic tshirt', sizes: 9, article: 'MOQ - 1000', image: tshirt},
]

const Popular = () => {
  return (
	<div className={styles.popular}>
		<h2 className={styles.title}>MOST POPULAR ITEMS</h2>
		<p className={styles.descr}>
			Represent your brand and vision with the
			highest quality blanks in the industry
		</p>
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
			direction="horizontal" // Налаштування напрямку слайдів
			spaceBetween={30}
			slidesPerView={4}
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
					<SwiperSlide key={item.article} className={styles.swiperCustom}>
						<CardItems type={item.type} sizes={item.sizes} image={item.image} article={item.article}/>
					</SwiperSlide>
				))}
				<div style={{position: 'absolute', left: 0, top: '50%', zIndex: 15}} className='swiper-button-prev'><ArrowPrev/></div>
				<div style={{position: 'absolute', right: 0, top: '50%', zIndex: 15}} className='swiper-button-next'><ArrowNext/></div>
		</Swiper>
	</div>
  )
}

export default Popular