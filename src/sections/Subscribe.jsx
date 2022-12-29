import React from 'react';
import Button from '../components/Button';

const Subscribe = () => {
	return (
		<div className='subscribe'>
			<div className='subscribe-header'>Say updated with the latest news!</div>
			<form className='subscribe-form'>
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
				<Button size='s'>subscribe</Button>
			</form>
		</div>
	);
};

export default Subscribe;
