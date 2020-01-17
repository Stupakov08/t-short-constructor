import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
	color: #202020;
	background-color: #fff;
	box-shadow: 1px 0px 3px 1px #00000020;
`;
export const Content = styled.div`
	width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	position: relative;
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	display: flex;
	align-items: center;
	color: #202020;
	text-decoration: none;
`;

export const OptionsContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;
export const OptionLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
	color: #202020;
	text-decoration: none;
`;
export const Title = styled.div`
	font-size: 1.6rem;
	white-space: nowrap;
`;
