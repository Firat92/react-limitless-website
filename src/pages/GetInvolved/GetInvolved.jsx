import React from 'react';
import Button from '../../components/Button';
import NavbarPart from '../NavbarPage/NavbarPage';
import './GetInvolved.css';

const GetInvolved = () => {
	return (
		<div className='getinvolved'>
			<NavbarPart />
			<div className='getinvolved-section'>
				<div className='getinvolved-section-header'>All Products</div>
				<div className='getinvolved-section-content'>
					<div className='getinvolved-section-content-sample'>
						<div className='sample-image'>
							<Button>quick view</Button>
						</div>
						<h3>Mens Limitless T-Shirt</h3>
						<div className='price'>
							<p>$19.99</p>
							<p>$24.99</p>
						</div>
					</div>
					<div className='getinvolved-section-content-sample'>
						<div className='sample-image'>
							<Button>quick view</Button>
						</div>
						<h3>Mens Limitless T-Shirt</h3>
						<div className='price'>
							<p>$19.99</p>
							<p>$24.99</p>
						</div>
					</div>
					<div className='getinvolved-section-content-sample'>
						<div className='sample-image'>
							<Button>quick view</Button>
						</div>
						<h3>Mens Limitless T-Shirt</h3>
						<div className='price'>
							<p>$19.99</p>
							<p>$24.99</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GetInvolved;
