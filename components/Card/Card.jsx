import React from 'react';
import styles from './styles/card.module.css';

export default function Card({ lectures }) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.header__left}>
					<h1>수강목록</h1>
				</div>
				<div className={styles.header__center}>
					<form className={styles.searchForm}>
						<span className={styles.formLabel}>학과:</span>
						<select className={styles.departmentSelect}>
							<option>소프트웨어학과</option>
						</select>
						<span className={styles.formLabel}>학년:</span>
						<select className={styles.gradeSelect}>
							<option>1</option>
						</select>
						<span className={styles.formLabel}>이수구분:</span>
						<select className={styles.categorySelect}>
							<option>전공선택</option>
						</select>
						<button type="submit" className={styles.searchButton}>
							검색
						</button>
					</form>
				</div>
				<div className={styles.header__right}>
					<button className={styles.rightBtn}></button>
				</div>
			</div>
			<div className={styles.cards}>
				{lectures &&
					lectures.map((lecture, index) => (
						<div key={index} className={styles.card}>
							<h2>{lecture.lectureName}</h2>
							<p>이수구분: {lecture.lectureType}</p>
							<p>교수이름: {lecture.professor}</p>
							<p>별점: {lecture.averageStarLating}</p>
						</div>
					))}
			</div>
		</div>
	);
}
