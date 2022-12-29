import React from 'react';
import NavbarPart from '../NavbarPage/NavbarPage';
import './Blog.css';
import blogsecimage2 from '../../images/blogsecimage2.svg';
import blogsecimage3 from '../../images/blogsecimage3.svg';
import blogsecimage4 from '../../images/blogsecimage4.svg';
import blogsecimage5 from '../../images/blogsecimage5.svg';
import Button from '../../components/Button';

const Blog = () => {
	return (
		<div className='container-blog'>
			<NavbarPart />
			<div className='blogup'>
				<div className='blogup-right'>
					<p>Featured Article</p>
					<h2>How COVID-19 changed our outlook on helping from a distance.</h2>
					<Button size='m'>read</Button>
				</div>
			</div>
			<div className='blogposts'>
				<div className='blogposts-header'>All posts</div>
				<div className='blogposts-up'>
					<div className='blogposts-up-sec'>
						<img src={blogsecimage2} alt='blogsecimage2' />
						<div className='blogposts-up-sec-head'>
							<p className='blogposts-up-sec-head-a'>blog</p>
							<p className='blogposts-up-sec-head-b'>Blog Title</p>
						</div>
						<p className='blogposts-up-sec-c'>
							Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed
							quisque velit, auctor at lobortis hac tincidunt sodales id. Elit
							interdum vel nisi, in enim sagittis at. Netus sagittis eleifend
							aliquet urna quis.
						</p>
						<Button>read now</Button>
					</div>
					<div className='blogposts-up-sec'>
						<img src={blogsecimage3} alt='blogsecimage3' />
						<div className='blogposts-up-sec-head'>
							<p className='blogposts-up-sec-head-a'>blog</p>
							<p className='blogposts-up-sec-head-b'>Blog Title</p>
						</div>
						<p className='blogposts-up-sec-c'>
							Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed
							quisque velit, auctor at lobortis hac tincidunt sodales id. Elit
							interdum vel nisi, in enim sagittis at. Netus sagittis eleifend
							aliquet urna quis.
						</p>
						<Button>read now</Button>
					</div>
					<div className='blogposts-up-sec'>
						<img src={blogsecimage4} alt='blogsecimage4' />
						<div className='blogposts-up-sec-head'>
							<p className='blogposts-up-sec-head-a'>blog</p>
							<p className='blogposts-up-sec-head-b'>Blog Title</p>
						</div>
						<p className='blogposts-up-sec-c'>
							Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed
							quisque velit, auctor at lobortis hac tincidunt sodales id. Elit
							interdum vel nisi, in enim sagittis at. Netus sagittis eleifend
							aliquet urna quis.
						</p>
						<Button>read now</Button>
					</div>
					<div className='blogposts-up-sec'>
						<img src={blogsecimage5} alt='blogsecimage5' />
						<div className='blogposts-up-sec-head'>
							<p className='blogposts-up-sec-head-a'>blog</p>
							<p className='blogposts-up-sec-head-b'>Blog Title</p>
						</div>
						<p className='blogposts-up-sec-c'>
							Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed
							quisque velit, auctor at lobortis hac tincidunt sodales id. Elit
							interdum vel nisi, in enim sagittis at. Netus sagittis eleifend
							aliquet urna quis.
						</p>
						<Button>read now</Button>
					</div>
					<div className='blogposts-up-sec'>
						<img src={blogsecimage2} alt='blogsecimage2' />
						<div className='blogposts-up-sec-head'>
							<p className='blogposts-up-sec-head-a'>blog</p>
							<p className='blogposts-up-sec-head-b'>Blog Title</p>
						</div>
						<p className='blogposts-up-sec-c'>
							Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed
							quisque velit, auctor at lobortis hac tincidunt sodales id. Elit
							interdum vel nisi, in enim sagittis at. Netus sagittis eleifend
							aliquet urna quis.
						</p>
						<Button>read now</Button>
					</div>
					<div className='blogposts-up-sec'>
						<img src={blogsecimage3} alt='blogsecimage3' />
						<div className='blogposts-up-sec-head'>
							<p className='blogposts-up-sec-head-a'>blog</p>
							<p className='blogposts-up-sec-head-b'>Blog Title</p>
						</div>
						<p className='blogposts-up-sec-c'>
							Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed
							quisque velit, auctor at lobortis hac tincidunt sodales id. Elit
							interdum vel nisi, in enim sagittis at. Netus sagittis eleifend
							aliquet urna quis.
						</p>
						<Button>read now</Button>
					</div>
				</div>
				<div className='blogposts-slide'>
					<button>←</button>
					<button>→</button>
				</div>
				<div className='blogposts-down'>
					<div className='blogposts-down-content'>
						<div className='blogposts-down-head'>
							Ready to make a difference in the lives of emerging adults?
						</div>
						<div className='blogposts-down-btn'>
							<Button variant='ghost'>get involved</Button>
							<Button variant='ghost'>donate</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
