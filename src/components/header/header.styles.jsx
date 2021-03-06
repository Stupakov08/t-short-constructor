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
	@media (max-width: 768px) {
		position: fixed;
		z-index: 100;
		top: 0px;
	}
`;
export const Content = styled.div`
	width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	position: relative;
	padding: 0 20px;
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 180px;
	display: flex;
	align-items: center;
	color: #202020;
	text-decoration: none;
	@media (max-width: 768px) {
		margin-left: 52px;
	}
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
export const Burger = styled.div`
	@media (min-width: 769px) {
		display: none;
	}
`;
export const DesktopMenu = styled.div`
	@media (max-width: 768px) {
		display: none;
	}
`;
