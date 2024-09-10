import React from 'react'

import styles from './MainContent.module.css'

const MainContent = () => {
  return (
	<div className={styles.content}>
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Premium merch for
				your business
			</h1>
			<p className={styles.description}>Ceriga simplifies merch by combining a powerful
				digital platform with a fully integrated supply chain.
				Create unique apparel with ease, leveraging top-tier
				production and unmatched customization options, all
				delivered quickly and transparently.
			</p>
			<button className={styles.getStarter}>Get started</button>
		</div>
	</div>
  )
}

export default MainContent