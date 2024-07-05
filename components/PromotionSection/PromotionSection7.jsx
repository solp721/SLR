import React from 'react';
import styles from './styles/promotionSection.module.css';
import Image from 'next/image';
import promotion from '../../public/assets/promotion/promotion1.png';

export default function PromotionSection7() {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.sectionTitle}>
				<h1 className={styles.mainTitle}>시연 영상</h1>
			</div>
		</div>
	);
}
