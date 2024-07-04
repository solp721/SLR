import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import styles from './MainPage.module.css';
import Slide from '@/components/Slide/Slide';
import Banner from '@/components/Slide/Banner';
import Card from '@/components/Card/Card';

export default function MainLecturePage() {
	return (
		<div className={styles.mainContainer}>
			<Slide></Slide>
			<Banner></Banner>
			<Card></Card>
		</div>
	);
}

MainLecturePage.getLayout = page => {
	return <MainLayout>{page}</MainLayout>;
};
