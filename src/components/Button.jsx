import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	font-weight: 700;
	border: none;
	cursor: pointer;
	color: ${(props) =>
		props.variant === 'ghost' ? 'rgba(236, 96, 65, 1)' : '#fff'};
	text-transform: uppercase;
	background-color: ${(props) =>
		props.variant === 'ghost' ? '#fff' : 'rgba(236, 96, 65, 1)'};
	box-shadow: 4px 4px 0px 0px rgba(241, 135, 111, 1),
		8px 8px 0px 0px rgba(245, 174, 158, 1);
	padding: 1rem;
	max-width: max-content;
	height: ${(props) =>
		props.size === 'l'
			? '68px'
			: props.size === 'm'
			? '56px'
			: props.size === 's'
			? '36px'
			: '36px'};
	font-size: ${(props) =>
		props.size === 'l'
			? '20px'
			: props.size === 'm'
			? '16px'
			: props.size === 's'
			? '14px'
			: '14px'};
	letter-spacing: ${(props) =>
		props.size === 'l'
			? '0.1rem'
			: props.size === 'm'
			? '0.05rem'
			: props.size === 's'
			? '0.04rem'
			: '0.04rem'};
	&:hover {
		background-color: #fff;
		color: rgba(236, 96, 65, 1);
	}
`;

const Button = ({ type, variant, className, id, onClick, size, children }) => {
	return (
		<ButtonComponent
			type={type ? type : 'button'}
			variant={variant}
			className={className ? `button ${className}` : 'button'}
			id={id}
			onClick={onClick}
			size={size}
			children={children}
		></ButtonComponent>
	);
};

export default Button;
