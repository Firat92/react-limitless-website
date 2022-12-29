import React from 'react';
import TeamMember from './TeamMember';
import user1 from '../images/user1.jpg';
import user2 from '../images/user2.jpg';
import user3 from '../images/user3.jpg';
import user4 from '../images/user4.jpg';
import user5 from '../images/user5.jpg';
import user6 from '../images/user6.jpg';
import Button from '../components/Button';

const Team = () => {
	const dummy_app = [
		{
			id: 1,
			firstName: 'Vseslav',
			lastName: 'Martinec',
			mail: 'vseslav.martinec@example.com',
			gender: 'male',
			picture: user1,
		},
		{
			id: 2,
			firstName: 'Alexandra',
			lastName: 'King',
			mail: 'alexandra.king@example.com',
			gender: 'female',
			picture: user2,
		},
		{
			id: 3,
			firstName: 'Eugene',
			lastName: 'Anderson',
			mail: 'eugene.anderson@example.com',
			gender: 'male',
			picture: user3,
		},
		{
			id: 4,
			firstName: 'Yasemin',
			lastName: 'Eberlein',
			mail: 'yasemin.eberlein@example.com',
			gender: 'female',
			picture: user4,
		},
		{
			id: 5,
			firstName: 'Advaith',
			lastName: 'Prajapati',
			mail: 'advaith.prajapati@example.com',
			gender: 'male',
			picture: user5,
		},
		{
			id: 6,
			firstName: 'Andrea',
			lastName: 'Larsen',
			mail: 'andrea.larsen@example.com',
			gender: 'male',
			picture: user6,
		},
	];

	return (
		<div className='team'>
			<div className='teaml-content'>
				<div className='teaml-content-header'>
					<p>Our</p>
					<p className='teaml-content-header-underline'>Team</p>
				</div>
				<p>
					Tortor sit nisl purus nunc massa diam velit hac in. Nisl, sem
					adipiscing risus pulvinar non sed nullam id integer. Integer quis
					porttitor mauris arcu, pretium orci quam. Enim cursus mattis nunc
					aliquam pharetra feugiat ante sollicitudin.
				</p>
				<Button size='s'>all team members</Button>
			</div>
			<div className='teamr-content'>
				{dummy_app.map((user) => (
					<TeamMember key={user.id} user={user} />
				))}
			</div>
		</div>
	);
};

export default Team;
