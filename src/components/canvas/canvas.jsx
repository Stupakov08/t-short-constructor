import React from 'react';
import { connect } from 'react-redux';
import ImageCanvas from '../ImageCanvas/ImageCanvas';
import { ColorCanvas } from './canvas.styles';

const Canvas = ({ colors, activeColor, forvardcanvasRef, ...props }) => {

	const imgUrl = () => {
		let url = null;
		try {
			url = require(`../../assets/colors/${activeColor.url}`);
		} catch{

		}
		return url;
	}

	return (
		<>
			{colors && activeColor ? (
				<ColorCanvas
					ref={forvardcanvasRef}
					url={imgUrl()}
				>
					<ImageCanvas></ImageCanvas>
				</ColorCanvas>
			) : (
					<div>Loading...</div>
				)}
		</>
	);
};

const mapStateToProps = props => ({
	colors: props.colors.colors,
	activeColor: props.colors.activeColor
});

export default connect(mapStateToProps)(Canvas);
