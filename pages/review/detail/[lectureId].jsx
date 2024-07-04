import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { fetchReview } from '@/api/review/get/ReviewGet';

export default function ReviewDetailPage({ review }) {
	if (!review) {
		return <div>Review not found</div>;
	}

	return (
		<div>
			<h1>{review.postTitle}</h1>
			<p>{review.postContent}</p>
			<p>별점: {review.starLating}</p>
			<p>
				작성자: {review.userNumber.userName} ({review.userNumber.nickname})
			</p>
			<p>강의명: {review.lecId.lectureName}</p>
			<p>학과: {review.lecId.department}</p>
			<p>대학: {review.lecId.university}</p>
			<p>이수구분: {review.lecId.lectureType}</p>
		</div>
	);
}

ReviewDetailPage.getLayout = page => {
	return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(context) {
	const { lectureId } = context.params; // params에서 lectureId를 가져옵니다.
	const { review } = await fetchReview(lectureId);

	return {
		props: {
			review,
		},
	};
}
