import React from 'react';
import ImageCanvas from '../ImageCanvas/SimpleImageCanvas';
import { ColorCanvas } from './canvas.styles';

const Canvas = ({ activeColor, activePrint, ...props }) => {
	const imgUrl = () => {
		let url = null;
		try {
			url = require(`../../assets/colors/${activeColor.url}`);
		} catch {}
		return url;
	};

	return (
		<>
			{activeColor ? (
				<ColorCanvas url={imgUrl()}>
					<ImageCanvas activePrint={activePrint}></ImageCanvas>
				</ColorCanvas>
			) : (
				<div>Loading...</div>
			)}
		</>
	);
};

export default Canvas;
