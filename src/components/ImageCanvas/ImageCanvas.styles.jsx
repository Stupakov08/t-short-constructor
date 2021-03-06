import styled from 'styled-components';

export const Canvas = styled.div`
	top: 23%;
	width: 30%;
	height: 25%;
	background: url(${props => props.url});
	background-size: cover;
	position: absolute;
	left: 50%;
	opacity: 0.9;
	transform: translateX(-50%);
	background-position: center top;
`;
