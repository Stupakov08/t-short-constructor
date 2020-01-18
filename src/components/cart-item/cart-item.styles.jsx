import styled from 'styled-components';

export const ItemIcon = styled.div`
	width: 80px;
	height: 80px;
	position: relative;
	overflow: hidden;
	& > * {
		transform: scale(2.2) translateY(20%) !important;
	}
`;
