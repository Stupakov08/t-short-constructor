import React from 'react';
import { Canvas } from './ImageCanvas.styles';

const ImageCanvas = ({ activePrint }) => {
	const imgUrl = () => {
		let url = null;
		try {
			url = require(`../../assets/prints/${activePrint.url}`);
		} catch {}
		return url;
	};

	return (
		<>
			{activePrint ? <Canvas url={imgUrl()}></Canvas> : <div>Loading...</div>}
		</>
	);
};

export default ImageCanvas;
