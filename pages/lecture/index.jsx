import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import styles from './MainPage.module.css';
import Slide from '@/components/Slide/Slide';
import Banner from '@/components/Slide/Banner';
import Card from '@/components/Card/Card';
import ShareUniversity from '@/components/Copyright/ShareUniversity';
import Footer from '@/components/Copyright/Footer';

export default function MainLecturePage({ lectures }) {
	return (
		<div className={styles.mainContainer}>
			<Slide />
			<Banner />
			<Card lectures={lectures} />
		</div>
	);
}

MainLecturePage.getLayout = page => {
	return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps() {
	const res = await fetch(process.env.NEXT_PUBLIC_LECTURE_API_URL);
	const json = await res.json();
	const lectures = json.data?.data || [];

	return {
		props: {
			lectures,
		},
	};
}
