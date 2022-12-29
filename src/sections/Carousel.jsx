import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import carouselimage3 from '../images/carouselimage3.svg';
import carouselimage4 from '../images/carouselimage4.svg';
import carouselimage5 from '../images/carouselimage5.svg';

const Carousel = () => {
	const dummy_carousel = [
		{
			id: 1,
			picture: carouselimage3,
		},
		{
			id: 2,
			picture: carouselimage4,
		},
		{
			id: 3,
			picture: carouselimage5,
		},
		{
			id: 4,
			picture: carouselimage3,
		},
		{
			id: 5,
			picture: carouselimage4,
		},
		{
			id: 6,
			picture: carouselimage5,
		},
		{
			id: 7,
			picture: carouselimage4,
		},
		{
			id: 8,
			picture: carouselimage5,
		},
	];

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1224,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className='carousel'>
			<Slider {...settings}>
				{dummy_carousel.map((card) => (
					<div className='carousel-card' key={card.id}>
						<img src={card.picture} alt='' />
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Carousel;
