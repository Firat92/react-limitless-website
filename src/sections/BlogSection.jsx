import React from 'react';
import blogimage1 from '../images/blogimage1.svg';
import blogimage2 from '../images/blogimage2.svg';
import blogimage3 from '../images/blogimage3.svg';
import blogimage4 from '../images/blogimage4.svg';
import Button from '../components/Button';

const Blog = () => {
	return (
		<div className='blog' id='blog'>
			<div className='blog-header'>
				<div className='blog-header-up'>
					The
					<p className='blog-header-up-underline'>Blog</p>
				</div>
				<p>
					Tortor sit nisl purus nunc massa diam velit hac in. Nisl, sem
					adipiscing risus pulvinar non sed nullam id integer. Integer quis
					porttitor mauris arcu, pretium orci quam. Enim cursus mattis nunc
					aliquam pharetra feugiat ante sollicitudin.
				</p>
			</div>
			<div className='blog-section'>
				<div className='blog-section-posts'>
					<img src={blogimage1} alt='blogimage1' />
					<div className='blog-section-posts-header'>
						<p>BLOG</p>
						<p>
							<strong>Blog Title</strong>
						</p>
					</div>
					<p>
						Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed
						quisque velit, auctor at lobortis hac tincidunt sodales id. Elit
						interdum vel nisi, in enim sagittis at. Netus sagittis eleifend
						aliquet urna quis.
					</p>
					<Button size='s'>read now</Button>
				</div>
				<div className='blog-section-posts'>
					<img src={blogimage2} alt='blogimage1' />
					<div className='blog-section-posts-header'>
						<p>BLOG</p>
						<p>
							<strong>Blog Title</strong>
						</p>
					</div>
					<p>
						Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed
						quisque velit, auctor at lobortis hac tincidunt sodales id. Elit
						interdum vel nisi, in enim sagittis at. Netus sagittis eleifend
						aliquet urna quis.
					</p>
					<Button size='s'>read now</Button>
				</div>
				<div className='blog-section-posts'>
					<img src={blogimage3} alt='blogimage1' />
					<div className='blog-section-posts-header'>
						<p>BLOG</p>
						<p>
							<strong>Blog Title</strong>
						</p>
					</div>
					<p>
						Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed
						quisque velit, auctor at lobortis hac tincidunt sodales id. Elit
						interdum vel nisi, in enim sagittis at. Netus sagittis eleifend
						aliquet urna quis.
					</p>
					<Button size='s'>read now</Button>
				</div>
				<div className='blog-section-posts'>
					<img src={blogimage4} alt='blogimage1' />
					<div className='blog-section-posts-header'>
						<p>BLOG</p>
						<p>
							<strong>Blog Title</strong>
						</p>
					</div>
					<p>
						Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed
						quisque velit, auctor at lobortis hac tincidunt sodales id. Elit
						interdum vel nisi, in enim sagittis at. Netus sagittis eleifend
						aliquet urna quis.
					</p>
					<Button size='s'>read now</Button>
				</div>
			</div>

			<Button size='l' className='blog-btn'>
				all blog posts
			</Button>
		</div>
	);
};

export default Blog;
