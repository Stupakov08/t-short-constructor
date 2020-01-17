import React from 'react';
import {
	ItemIcon
} from './cart-item.styles';
import './cart-item.styles.scss';
import { connect } from 'react-redux';
import { removeItem } from '../../redux/cart/cart.actions';

const CartItem = ({ item: { orderId, screenshot, price, name, quantity }, removeItem, item }) => {
	const deleteHandler = (item) => () => {
		removeItem(item);
	}
	return (
		<div className='cart-item'>
			<ItemIcon url={screenshot}></ItemIcon>
			<div className='item-details'>
				<span className='name'>{name}</span>
				<span className='price'>
					{quantity} x {price} UAH
			</span>
				<span className="delete" onClick={deleteHandler(item)}>X</span>
			</div>
		</div>
	)
};
const mapDispatchToProps = dispatch => ({
	removeItem: item => dispatch(removeItem(item))
});
export default connect(null, mapDispatchToProps)(CartItem);
