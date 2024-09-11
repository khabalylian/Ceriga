"use client"

import React from 'react'
import styles from './Main.module.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import SideMenu from './components/SideMenu/SideMenu';

const Main = () => {
  return (
	<div style={{position: 'relative', zIndex: '100'}}>
		<Header/>
		<SideMenu/>
	</div>
  )
}

export default Main