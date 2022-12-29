import React from 'react';
import Button from '../components/Button';

const AboutLimitless = () => {
	return (
		<div className='limitless'>
			<div className='limitless-image'>
				<div className='limitless-left'>
					<div className='limitless-header'>
						<h2>About</h2>
						<p>Limitless</p>
					</div>
					<p>
						Convallis est lorem lorem vel consectetur. Mauris leo fermentum,
						tellus sollicitudin viverra feugiat risus blandit laoreet. Auctor
						lacinia turpis ultrices tempus. Ornare ullamcorper vivamus tellus
						leo elementum montes, quis imperdiet. Eget elit elementum gravida
						facilisi ac commodo elementum commodo. Tellus neque sagittis
						porttitor luctus pretium quam. Ultrices diam hendrerit pulvinar sit
						magna eget adipiscing eget etiam. Sed rhoncus vivamus urna mauris.
						Velit malesuada viverra amet duis nunc eget turpis.
					</p>
					<Button size='m'>get involved</Button>
				</div>
			</div>
		</div>
	);
};

export default AboutLimitless;
