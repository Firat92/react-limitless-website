import React from 'react';
import Button from '../components/Button';
import { HashLink } from 'react-router-hash-link';

const Hero = () => {
	return (
		<>
			<div className='hero-content'>
				<div className='hero-text'>
					<p>LIMITLESS</p>
					<p className='big'>Enabling emerging adults to adapt and succeed.</p>
				</div>
				<div className='btn-group'>
					<HashLink to='#blog'>
						<Button size='m'>blog</Button>
					</HashLink>
					<HashLink to='#programs'>
						<Button size='m'>programs</Button>
					</HashLink>
				</div>
			</div>
		</>
	);
};

export default Hero;
