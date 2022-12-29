import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {
	AiFillYoutube,
	AiOutlineInstagram,
	AiOutlineTwitter,
} from 'react-icons/ai';
import Limitlesslogo from '../images/Limitlesslogo.svg';

const Footer = () => {
	return (
		<div className='footer-main'>
			<div className='footer'>
				<div className='footer-left'>
					<div className='footer-left-header'>
						<img src={Limitlesslogo} alt='Limitlesslogo' />
						<p>Limitless</p>
					</div>
					<div className='footer-links'>
						<FaFacebook />
						<MdEmail />
						<AiFillYoutube />
						<AiOutlineInstagram />
						<AiOutlineTwitter />
					</div>
				</div>
				<div className='footer-middle'>
					<div className='footer-middle-section'>
						<ul>
							<li>About Us</li>
							<li>Our Story</li>
							<li>Our Mission</li>
							<li>Our Team</li>
							<li>Contact Us</li>
						</ul>
					</div>
					<div className='footer-middle-section'>
						<ul>
							<li>Get Involved</li>
							<li>Volunteer</li>
							<li>Events</li>
							<li>Partners</li>
							<li>Careers</li>
						</ul>
					</div>
					<div className='footer-middle-section'>
						<ul>
							<li>Limitless</li>
							<li>Blog</li>
							<li>Careers</li>
							<li>Donate</li>
						</ul>
					</div>
				</div>
				<div className='footer-right'>
					<div className='footer-right-header'>stay up to date!</div>
					<form className='footer-right-form'>
						<fieldset>
							<legend>
								Name <span>*</span>
							</legend>
							<input type='text' placeholder='Jane Pollock' />
						</fieldset>
						<fieldset>
							<legend>
								Email Address <span>*</span>
							</legend>
							<input type='email' placeholder='Jane@example.com' />
						</fieldset>
						<button>subscribe</button>
					</form>
				</div>
			</div>
			<p className='footer-sub'>
				©2022 Limitless. Limitless is a 501(c)(3) tax-exempt charity. All Rights
				Reserved. EIN: 90-1302804
			</p>
		</div>
	);
};

export default Footer;
