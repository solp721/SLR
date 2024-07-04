import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Slide from '@/components/Slide/Slide';
import styles from './MainPage.module.css';

export default function MainLecturePage() {
	return (
		<div className={styles.mainContainer}>
			<h1>ㅎㅇㅎㅇ</h1>
		</div>
	);
}

MainLecturePage.getLayout = page => {
	return <MainLayout>{page}</MainLayout>;
};
