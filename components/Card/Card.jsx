import React from 'react';
import styles from './styles/card.module.css';

const dummyData = [
	{
		subject: '교과목1',
		category: '전공필수',
		professor: '교수1',
		rating: '4.5',
	},
	{
		subject: '교과목2',
		category: '전공선택',
		professor: '교수2',
		rating: '3.8',
	},
	{
		subject: '교과목3',
		category: '교양필수',
		professor: '교수3',
		rating: '4.2',
	},
	{
		subject: '교과목4',
		category: '교양선택',
		professor: '교수4',
		rating: '3.9',
	},
	{
		subject: '교과목5',
		category: '전공필수',
		professor: '교수5',
		rating: '4.0',
	},
	{
		subject: '교과목6',
		category: '전공선택',
		professor: '교수6',
		rating: '4.3',
	},
];

export default function Card() {
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
				{dummyData.map((item, index) => (
					<div key={index} className={styles.card}>
						<h2>{item.subject}</h2>
						<p>이수구분: {item.category}</p>
						<p>교수이름: {item.professor}</p>
						<p>별점: {item.rating}</p>
					</div>
				))}
			</div>
		</div>
	);
}
