import styled from 'styled-components';

export const ItemIcon = styled.div`
    width: 80px;
    height: 80px;
	background: url(${props => props.url});
	background-size: 210%;
    background-position: center top
`;
