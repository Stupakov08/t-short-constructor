import styled, { css } from 'styled-components';

const buttonStyles = css`
	background-color: black;
	color: white;
	border: none;
	border: 1px solid white;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

const invertedButtonStyles = css`
	background-color: white;
	color: black;
	border: 1px solid black;
	cursor: auto;
`;

const small = css`
	min-width: 100px;
	height: 40px;
`;

const getButtonStyles = props => {
	if (props.small) {
		return small;
	}
};
const getButtonStylesDisable = props => {
	if (props.disabled) {
		return invertedButtonStyles;
	}
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  min-height: 50px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 5px 5px 5px 0px;
  ${getButtonStyles}
  ${buttonStyles}
  ${getButtonStylesDisable}
`;
