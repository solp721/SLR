import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles/slide.module.css';

const slides = [
	'/assets/backgroundimg/background1.jpg',
	'/assets/backgroundimg/background2.jpg',
	'https://via.placeholder.com/1200x360?text=Image+2',
	'https://via.placeholder.com/1200x360?text=Image+3',
	'https://via.placeholder.com/1200x360?text=Image+4',
	'https://via.placeholder.com/1200x360?text=Image+5',
];

const SimpleSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
	};

	return (
		<div className={styles.container}>
			<Slider {...settings}>
				{slides.map((slide, index) => (
					<div key={index} className={styles.slide}>
						<Image
							src={slide}
							alt={`Slide ${index}`}
							layout="fill"
							objectFit="cover"
						/>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default SimpleSlider;
