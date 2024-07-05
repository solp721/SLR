import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './styles/settingBar.module.css';

export default function SettingBar({ review, detailLecture }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [formData, setFormData] = useState({
		postTitle: '',
		postContent: '',
		starLating: 0,
		lecName: detailLecture.lectureName, // detailLecture에서 가져옴
		userNumber: 0,
	});

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleStarRating = rating => {
		setFormData({
			...formData,
			starLating: rating,
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();
		const apiUrl = process.env.NEXT_PUBLIC_REVIEW_API_URL;
		const body = JSON.stringify(formData);

		console.log('Sending data:', body);

		try {
			const response = await fetch(apiUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: body,
			});

			console.log('Response status:', response.status);
			console.log('Response status text:', response.statusText);

			if (!response.ok) {
				throw new Error(`Network response was not ok: ${response.statusText}`);
			}

			const responseData = await response.json();
			console.log('Response data:', responseData);
			closeModal();
		} catch (error) {
			console.error('There was a problem with the fetch operation:', error);
		}
	};

	return (
		<div className={styles.reviewWrapper}>
			<div className={styles.header}>
				<div className={styles.headerLeft}>
					<h1>
						<span>{detailLecture.lectureName}</span>
						<span className={styles.headerTitle}> 평가 및 리뷰</span>
					</h1>
					<div className={styles.headerInfo}>
						<p>
							<span className={styles.averageStars}>
								{detailLecture.averageStarLating}
							</span>{' '}
							<span className={styles.totalReviews}>/ 5</span>
						</p>
						<p>{detailLecture.reviewCount}개의 수강 리뷰</p>
					</div>
				</div>
				<div className={styles.headerCenter}>
					<input type="checkbox" />
					<label>최신순</label>
					<input type="checkbox" />
					<label>별점 높은순</label>
					<input type="checkbox" />
					<label>별점 낮은순</label>
					<input type="checkbox" />
					<label>좋아요 많은순</label>
				</div>
				<div className={styles.headerRight}>
					<button className={styles.reviewBtn} onClick={openModal}>
						글쓰기
					</button>
				</div>
			</div>

			<Modal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				className={styles.modal}
				overlayClassName={styles.overlay}
			>
				<div className={styles.modalContainer}>
					<h2>리뷰 작성</h2>
					<form onSubmit={handleSubmit}>
						<div className={styles.starRating}>
							<label>수업은 만족하셨나요?</label>
							{[1, 2, 3, 4, 5].map(star => (
								<span
									key={star}
									className={
										formData.starLating >= star
											? styles.starSelected
											: styles.star
									}
									onClick={() => handleStarRating(star)}
								>
									★
								</span>
							))}
						</div>
						<textarea
							className={styles.textArea}
							name="postContent"
							value={formData.postContent}
							onChange={handleChange}
							placeholder="유익한 수업 리뷰는 교수님들한테 많은 도움이 됩니다. ^__^"
						/>
						<div className={styles.buttons}>
							<span>아이디: </span>
							<input
								type="number"
								name="userNumber"
								value={formData.userNumber}
								onChange={handleChange}
							/>
							<button type="button" onClick={closeModal}>
								취소
							</button>
							<button type="submit">등록</button>
						</div>
					</form>
				</div>
			</Modal>
		</div>
	);
}
