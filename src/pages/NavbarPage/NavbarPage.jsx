import React from 'react';
import './NavbarPage.css';
import { Link } from 'react-router-dom';
import Limitlesslogo from '../../images/Limitlesslogo.svg';
import Button from '../../components/Button';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navbar-limit'>
				<img src={Limitlesslogo} alt='Limitlesslogo' />
				<p to='/'>Limitless</p>
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
