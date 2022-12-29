import React from 'react';
import Button from '../components/Button';
import missionimage from '../images/missionimage.svg';

const Mission = () => {
	return (
		<div className='mission'>
			<img src={missionimage} alt='missionimage' />
			<div className='mission-content'>
				<h2>We exist for your success.</h2>
				<Button size='m'>our mission</Button>
			</div>
		</div>
	);
};

export default Mission;
