import React from 'react';
import {
	ItemIcon
} from './cart-item.styles';
import './cart-item.styles.scss';

const CartItem = ({ item: { screenshot, price, name, quantity } }) => (
	<div className='cart-item'>
		<ItemIcon url={screenshot}></ItemIcon>
		<div className='item-details'>
			<span className='name'>{name}</span>
			<span className='price'>
				{quantity} x {price} UAH
			</span>
		</div>
	</div>
);

export default CartItem;
