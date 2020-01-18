import styled from 'styled-components';

export const Content = styled.div`
	width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	padding: 0 20px;
`;

export const AdminArea = styled.div`
	width: 100%;
	min-height: 800px;
	margin: 20px auto;
	background: #fff;
	box-shadow: 0px 0px 2px 1px #00000010;
	border-radius: 6px;
	box-sizing: border-box;
	padding: 20px 50px;
	font-size: 13px;
`;
export const OrderList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(0,0,0,0.9)
  box-sizing: border-box;
`;
export const OrderItem = styled.div`
	width: 100%;
	padding: 10px 0px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.9);
	display: flex;
	height: 120px;
	box-sizing: border-box;
	opacity: ${props => (props.semiTransparent ? '0.3' : '1')};
`;
export const OrderHeaderItem = styled.div`
	width: 100%;
	border-bottom: 1px solid rgba(0, 0, 0, 0.9);
	display: flex;
	height: 30px;
	box-sizing: border-box;
`;
export const OrderImage = styled.div`
	height: 100%;
	width: 150px;
	margin-right: 20px;
	box-sizing: border-box;
	position: relative;
	overflow: hidden;
	& > * {
		height: 175px !important;
	}
`;
export const OrderColumn = styled.div`
	height: 100%;
	width: 120px;
	margin-right: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	word-break: break-all;
`;
export const VerticalFlex = styled.div`
	height: 100%;
	width: 100px;
	display: flex;
	flex-direction: column;
	align-items: stratch;
`;
export const Overflowik = styled.div`
	overflow: auto;
`;
