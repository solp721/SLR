import React from 'react';
import styles from './styles/promotionSection.module.css';
import Image from 'next/image';
import {
	TbCircleNumber1Filled,
	TbCircleNumber2Filled,
	TbCircleNumber3Filled,
	TbCircleNumber4Filled,
} from 'react-icons/tb';
import laptop from '../../public/assets/laptop/laptop.png';

const iconStyle = {
	color: '#4D49A7',
	marginRight: '8px',
};

export default function PromotionSection2() {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.sectionContainer}>
				<div className={styles.sectionTitle}>
					<h1 className={styles.mainTitle}>Share Lecture Review</h1>
					<h2 className={styles.subTitle}>어떤 시스템인가요?</h2>
				</div>
				<div className={styles.laptopTitle}>
					<div className={styles.laptopLeft1}>
						<h2 style={{ color: '#4D49A7' }}>학교 수업 리스트</h2>
						<Image src={laptop} alt="laptop" className={styles.laptopImg} />
					</div>
					<div className={styles.laptopRight1}>
						<div className={styles.iconContainer}>
							<span style={iconStyle}>
								<TbCircleNumber1Filled size={30} />
							</span>
							<h2>신이고신이고신이고신입니다</h2>
						</div>
						<div className={styles.iconContainer}>
							<span style={iconStyle}>
								<TbCircleNumber2Filled size={30} />
							</span>
							<h2>신이고신이고신이고신입니다</h2>
						</div>
						<div className={styles.iconContainer}>
							<span style={iconStyle}>
								<TbCircleNumber3Filled size={30} />
							</span>
							<h2>신이고신이고신이고신입니다</h2>
						</div>
						<div className={styles.iconContainer}>
							<span style={iconStyle}>
								<TbCircleNumber4Filled size={30} />
							</span>
							<h2>신이고신이고신이고신입니다</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
