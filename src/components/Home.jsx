import React from 'react';
import Navbar from '../sections/Navbar';
import AboutLimitless from '../sections/AboutLimitless';
import Programs from '../sections/Programs';
import Mission from '../sections/Mission';
import Subscribe from '../sections/Subscribe';
import Team from '../sections/Team';
import BlogSection from '../sections/BlogSection';
import Carousel from '../sections/Carousel';
import Announcement from '../sections/Announcement';
import Hero from '../sections/Hero';

const Home = () => {
	return (
		<>
			<div className='home'>
				<Announcement />
				<Navbar />
				<Hero />
			</div>
			<AboutLimitless />
			<Programs />
			<Mission />
			<Subscribe />
			<Team />
			<BlogSection />
			<Carousel />
		</>
	);
};

export default Home;
