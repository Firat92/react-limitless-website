import React from 'react';
import './AboutUs.css';
import NavbarPart from '../NavbarPage/NavbarPage';
import Button from '../../components/Button';

const AboutUs = () => {
	return (
		<div className='container-about'>
			<NavbarPart />
			<div className='about'>
				<div className='about-content'>
					<p className='about-content-time'>2016</p>
					<p className='about-content-head'>The Dreamer</p>
					<p className='about-content-info'>
						Nunc imperdiet at turpis sollicitudin vulputate velit. Commodo augue
						dolor ornare purus lobortis dui. Nisl mollis sodales porta vitae
						nulla pharetra amet, duis. Rhoncus tincidunt sollicitudin et sed
						iaculis senectus ornare sagittis. Est leo sed euismod id odio
						commodo consequat. Elit magna vitae ullamcorper posuere sagittis,
						sed natoque. Eget eget vulputate porttitor massa porttitor egestas
						donec. Id tellus parturient sit aliquam neque condimentum auctor.
					</p>
					<p className='about-content-line'></p>
				</div>
				<div className='about-content'>
					<p className='about-content-line'></p>
					<p className='about-content-time'>2018</p>
					<p className='about-content-head'>The Believers</p>
					<p className='about-content-info'>
						Imperdiet dui enim egestas aenean. Aenean imperdiet morbi tempor, a.
						Urna senectus sit sit integer malesuada facilisi nullam neque. Lorem
						laoreet maecenas in commodo morbi. Turpis hendrerit neque imperdiet
						aliquet arcu senectus sed.
					</p>
					<p className='about-content-line'></p>
				</div>
				<div className='about-content'>
					<p className='about-content-line'></p>
					<p className='about-content-time'>2019</p>
					<p className='about-content-head'>The Helpers</p>
					<p className='about-content-info'>
						Mattis netus viverra egestas integer. Eu auctor proin a, sed. In sit
						feugiat pellentesque posuere amet. Sit ut cursus iaculis urna,
						lectus. Vestibulum quis nibh lorem volutpat sagittis, egestas eros
						pellentesque commodo. Ultrices cras massa faucibus mattis. Ut quam
						integer egestas vehicula. Purus ornare quam vitae sit vestibulum,
						facilisi. Diam pulvinar diam netus cum turpis sit vitae nisl. Quis
						quis amet, morbi nisi, eu dolor tincidunt. Vulputate pellentesque
						semper sed aliquet at pretium. Viverra in diam proin velit hendrerit
						habitant.
					</p>
					<p className='about-content-line'></p>
				</div>
				<div className='about-content'>
					<p className='about-content-line'></p>
					<p className='about-content-time'>tomorrow</p>
					<p className='about-content-head'>The Future</p>
					<p className='about-content-info'>
						Quis malesuada et quis egestas dignissim ante eu id. Posuere egestas
						non diam maecenas orci imperdiet dignissim. Ac pellentesque amet
						enim mi dictum hac. Id habitant sagittis a odio elit lectus
						ultrices. Netus quam elementum ac egestas praesent. Nisi, cras
						pellentesque nulla at tristique nisi, a tempus. Arcu nec nec blandit
						lobortis neque neque risus dignissim libero. Integer ac vel nisi at
						aliquet sed sagittis.
					</p>
					<p className='about-content-line'></p>
				</div>
			</div>
			<div className='about-section'>
				<div className='about-section-content'>
					<h2>Become a part of our continuing story.</h2>
					<div className='about-section-content-btn'>
						<Button variant='ghost'>get involved</Button>
						<Button variant='ghost'>donate</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
