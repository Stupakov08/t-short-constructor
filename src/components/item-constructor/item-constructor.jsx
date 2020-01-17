import React, { useRef } from 'react';
import Controlls from '../controlls/controlls';
import Canvas from '../canvas/canvas';
import OrderButton from '../order-button/order-button';


import {
	ConstructorArea,
	RenderArea,
	RenderWrapper,
	ControllWrapper,
	PushDown
} from './item-constructor.styles';

const ItemConstructor = ({
	currentUser,
	colors,
	prints,
	activePrint,
	activeColor,
	...props
}) => {
	const canvasRef = useRef();

	return (
		<ConstructorArea>
			<RenderArea>
				<RenderWrapper>
					<Canvas forvardcanvasRef={canvasRef} />
				</RenderWrapper>
				<div className="capture">This is an approximate view only. The product may differ from what you see above.</div>
			</RenderArea>
			<ControllWrapper>
				<Controlls />
				<PushDown>
					<OrderButton canvasRef={canvasRef} />
				</PushDown>
			</ControllWrapper>
		</ConstructorArea>
	);
};

export default ItemConstructor;
