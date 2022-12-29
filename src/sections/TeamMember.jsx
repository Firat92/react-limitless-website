import React from 'react';

const TeamMember = ({ user }) => {
	return (
		<div className='user'>
			<div>
				<img src={user.picture} alt='user' className='user-pic' />
			</div>
			<div className='user-content'>
				<div className='user-content-names'>
					<p>{user.firstName}</p>
					<p>{user.lastName}</p>
				</div>
				<p>{user.mail}</p>
			</div>
		</div>
	);
};

export default TeamMember;
