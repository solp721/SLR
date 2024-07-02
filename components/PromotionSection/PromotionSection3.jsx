import React from 'react';
import styles from './styles/promotionSection.module.css';
import Image from 'next/image';
import laptop from '../../public/assets/laptop/laptop.png';

export default function PromotionSection3() {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.sectionContainer}>
				<div className={styles.laptopTitle}>
					<div className={styles.laptopLeft2}>
						<div className={styles.leftSection}>
							<h2>수업 리뷰를 공유하는 시스템입니다.</h2>
							<h2>무슨 내용을 넣으면 좋을까요 여러분들??</h2>
						</div>
					</div>
					<div className={styles.laptopRight2}>
						<h2 style={{ color: '#4D49A7' }}>마이페이지 관리</h2>
						<Image src={laptop} alt="laptop" className={styles.laptopImg} />
					</div>
				</div>
			</div>
		</div>
	);
}
