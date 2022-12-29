import React from 'react';
import Button from '../components/Button';
import programimage from '../images/programimage.svg';

const Programs = () => {
	return (
		<div className='programs' id='programs'>
			<div className='programs-section-a'>
				<div className='programs-section-a-headers'>
					Our
					<div className='underline'>Programs</div>
				</div>
				<p>
					Tortor sit nisl purus nunc massa diam velit hac in. Nisl, sem
					adipiscing risus pulvinar non sed nullam id integer. Integer quis
					porttitor mauris arcu, pretium orci quam. Enim cursus mattis nunc
					aliquam pharetra feugiat ante sollicitudin.
				</p>
			</div>
			<div className='programs-section-bb'>
				<div className='programs-section-b'>
					<img src={programimage} alt='programimage' />
					<div className='programs-section-b-right'>
						<h3>Program Name</h3>
						<p>
							Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed
							quisque velit, auctor at lobortis hac tincidunt sodales id. Elit
							interdum vel nisi, in enim sagittis at. Netus sagittis eleifend
							aliquet urna quis.
						</p>
						<Button size='s'>small button</Button>
					</div>
				</div>
				<div className='programs-section-b'>
					<img src={programimage} alt='programimage' />
					<div className='programs-section-b-right'>
						<h3>Program Name</h3>
						<p>
							Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed
							quisque velit, auctor at lobortis hac tincidunt sodales id. Elit
							interdum vel nisi, in enim sagittis at. Netus sagittis eleifend
							aliquet urna quis.
						</p>
						<Button size='s'>small button</Button>
					</div>
				</div>
				<div className='programs-section-b'>
					<img src={programimage} alt='programimage' />
					<div className='programs-section-b-right'>
						<h3>Program Name</h3>
						<p>
							Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed
							quisque velit, auctor at lobortis hac tincidunt sodales id. Elit
							interdum vel nisi, in enim sagittis at. Netus sagittis eleifend
							aliquet urna quis.
						</p>
						<Button size='s'>small button</Button>
					</div>
				</div>
				<div className='programs-section-b'>
					<img src={programimage} alt='programimage' />
					<div className='programs-section-b-right'>
						<h3>Program Name</h3>
						<p>
							Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed
							quisque velit, auctor at lobortis hac tincidunt sodales id. Elit
							interdum vel nisi, in enim sagittis at. Netus sagittis eleifend
							aliquet urna quis.
						</p>
						<Button size='s'>small button</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Programs;
