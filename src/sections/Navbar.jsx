import React from 'react';
import { Link } from 'react-router-dom';
import logotransparent from '../images/logotransparent.svg';
import Button from '../components/Button';

const Navbar = () => {
	return (
		<div className='nav'>
			<div className='nav-limit'>
				<img src={logotransparent} alt='logotransparent' />
				<Link to='/'>Limitless</Link>
			</div>
			<ul>
				<li>
					<Link to='/'>HOME</Link>
				</li>
				<li>
					<Link to='/about'>ABOUT US</Link>
				</li>
				<li>
					<Link to='/get'>GET INVOLVED</Link>
				</li>
				<li>
					<Link to='/blog'>BLOG</Link>
				</li>
				<li>
					<Link to='/contact'>CONTACT US</Link>
				</li>
			</ul>
			<Button>donate</Button>
		</div>
	);
};

export default Navbar;
