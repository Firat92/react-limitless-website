import React from 'react';
import NavbarPart from '../NavbarPage/NavbarPage';
import './ContactUs.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ContactUs = () => {
	return (
		<div className='container'>
			<NavbarPart />
			<div className='contact'>
				<div className='contact-us'>
					<div className='contact-us-head'>
						<h2>Contact Us</h2>
						<p>
							We'd love to get in touch with you! Send us a message below and
							we'll contact you in the next 24 hours. Thanks!
						</p>
					</div>
					<div>
						<form className='contact-us-form'>
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
							<fieldset>
								<legend>
									Message <span>*</span>
								</legend>
								<input type='text' placeholder='How can we help?' />
							</fieldset>
							<button>send</button>
						</form>
					</div>
				</div>
				<div className='contact-image'></div>
			</div>
			<div className='touch'>
				<h3>Stay in touch</h3>
				<div className='touch-card'>
					<div className='touch-card-sec'>
						<AiOutlineInstagram style={{ color: 'rgba(236, 96, 65, 1)' }} />
						<p>Instagram</p>
					</div>
					<div className='touch-card-sec'>
						<FaFacebook style={{ color: 'rgba(236, 96, 65, 1)' }} />
						<p>Facebook</p>
					</div>
					<div className='touch-card-sec'>
						<MdEmail style={{ color: 'rgba(236, 96, 65, 1)' }} />
						<p>Email</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
