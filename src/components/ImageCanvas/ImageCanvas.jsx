import React from 'react';
import { connect } from 'react-redux';
import { Canvas } from './ImageCanvas.styles';

const ImageCanvas = ({ prints, activePrint }) => {

	const imgUrl = () => {
		let url = null;
		try {
			url = require(`../../assets/prints/${activePrint.url}`);
		} catch{

		}
		return url;
	}

	return (
		<>
			{prints && activePrint ? (
				<Canvas
					url={imgUrl()}
				></Canvas >
			) : (
					<div>Loading...</div>
				)
			}
		</>
	);
};

const mapStateToProps = props => ({
	prints: props.prints.prints,
	activePrint: props.prints.activePrint
});

export default connect(mapStateToProps)(ImageCanvas);
