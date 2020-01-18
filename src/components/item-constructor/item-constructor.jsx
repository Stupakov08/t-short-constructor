import React from 'react';
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
	return (
		<ConstructorArea>
			<RenderArea>
				<RenderWrapper>
					<Canvas />
				</RenderWrapper>
				<div className='capture'>
					This is an approximate view only. The product may differ from what you
					see above.
				</div>
			</RenderArea>
			<ControllWrapper>
				<Controlls />
				<PushDown>
					<OrderButton />
				</PushDown>
			</ControllWrapper>
		</ConstructorArea>
	);
};

export default ItemConstructor;
