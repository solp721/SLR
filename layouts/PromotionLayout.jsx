import React from 'react';
import styles from './styles/promotion.module.css';
import Image from 'next/image';
import logo1 from '../public/assets/logo/logo2.png';
import Link from 'next/link';

export default function PromotionLayout({ children }) {
	return (
		<div className={styles.rootLayout}>
			<nav className={styles.topNavBar}>
				<div className={styles.headerLeftLogo}>
					<Image src={logo1} className={styles.logo1} alt="logo1" />
				</div>
				<div className={styles.headerCenterUniversity}>
					<h2>부산대학</h2>
					<div className={styles.hiddenContainer}>
						<div className={styles.linkTitle}>
							<Link href="/">동서대학교</Link>
							<Link href="/">동서대학교</Link>
							<Link href="/">동서대학교</Link>
						</div>
					</div>
				</div>
				<div className={styles.headerRightIcon}>
					<h3>네비1</h3>
					<h3>네비1</h3>
				</div>
			</nav>
			<div>{children}</div>
		</div>
	);
}
