import React from 'react';
import { connect } from 'react-redux';
import { Canvas } from './ImageCanvas.styles';

const ImageCanvas = ({ prints, activePrint }) => {
	return (
		<>
			{prints && activePrint ? (
				<Canvas
					url={require(`../../assets/prints/${activePrint.url}`)}
				></Canvas>
			) : (
				<div>Loading...</div>
			)}
		</>
	);
};

const mapStateToProps = props => ({
	prints: props.prints.prints,
	activePrint: props.prints.activePrint
});

export default connect(mapStateToProps)(ImageCanvas);
