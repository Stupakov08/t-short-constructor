import styled from 'styled-components';

export const ConstructorArea = styled.div`
	width: 100%;
	min-height: 400px;
	margin: 20px auto;
	background: #fff;
	box-shadow: 0px 0px 2px 1px #00000010;
	border-radius: 6px;
	display: flex;
	flex-direction: row;
	align-items: stretch;
	overflow: auto;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
export const RenderArea = styled.div`
	width: 50%;
	min-width: 280px;
	height: 100%;
	box-sizing: border-box;
	box-shadow: 1px 0px 1px #00000010;
	padding: 15px;
	@media (max-width: 768px) {
		width: 100%;
		box-shadow: 0px 1px 1px #00000010;
		height: auto;
	}
`;
export const RenderWrapper = styled.div`
	padding: 20px;
	position: relative;
	width: 100%;
	padding-bottom: 100%;
	box-sizing: border-box;
	height: 0;
	overflow: hidden;
`;
export const Canvas = styled.div`
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
export const ImageCanvas = styled.div`
	top: 20%;
	width: 30%;
	height: 30%;
	background: url(${props => props.url});
	background-size: cover;
	position: absolute;
	left: 50%;
	opacity: 0.9;
	transform: translateX(-50%);
	background-position: center;
`;
export const ControllWrapper = styled.div`
	box-sizing: border-box;
	padding: 20px 40px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	@media (min-width: 769px) {
		max-width: 60%;
	}
`;
export const PushDown = styled.div`
	margin-top: auto;
`;
