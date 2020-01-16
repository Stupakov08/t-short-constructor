import styled from 'styled-components';

export const ColorCanvas = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	background: url(${props => props.url});
	background-size: cover;
	margin: 0 auto;
	background-position: center top;
`;
