import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { fetchReview } from '@/api/review/get/ReviewGet';
import { fetchLecture } from '@/api/lectures/get/DetailLecture';
import ReviewTop from '@/components/DetailReviewTop/ReveiwTop';
import ReviewCard from '@/components/DetailReviewCard/ReviewCard';
import SettingBar from '@/components/DetailReviewMid/SettingBar';
import styles from './ReviewDetailPage.module.css';
import Footer from '@/components/Copyright/Footer';

export default function ReviewDetailPage({ review, detailLecture }) {
	if (!review || review.length === 0) {
		return <div>Reviews not found</div>;
	}

	if (!detailLecture) {
		return <div>Lecture detail not found</div>;
	}

	return (
		<div>
			<ReviewTop review={review} detailLecture={detailLecture} />
			<SettingBar review={review} detailLecture={detailLecture} />
			<div className={styles.gridContainer}>
				{review.map(review => (
					<ReviewCard
						key={review.reviewId}
						review={review}
						detailLecture={detailLecture}
					/>
				))}
			</div>
			<Footer></Footer>
		</div>
	);
}

ReviewDetailPage.getLayout = page => {
	return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(context) {
	const { lectureId } = context.params;
	const { review } = await fetchReview(lectureId);
	const { lecture: detailLecture } = await fetchLecture(lectureId);

	return {
		props: {
			review: review || [],
			detailLecture: detailLecture || null,
		},
	};
}
