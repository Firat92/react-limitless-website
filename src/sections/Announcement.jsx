import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const Announcement = () => {
	const [modal, setModal] = useState(true);

	const closeModal = () => {
		setModal(!modal);
	};

	return (
		<>
			{modal && (
				<div className='announcement'>
					<div className='announcement-content'>
						<p>
							Purus consectetur feugiat consectetur imperdiet ante ac pulvinar
							nec.
						</p>
						<button>Learn More</button>
					</div>
					<IoMdClose className='announcement-close' onClick={closeModal} />
				</div>
			)}
		</>
	);
};

export default Announcement;
