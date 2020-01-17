
export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.orderId === cartItemToAdd.orderId
	);
	if (existingCartItem) {
		return cartItems.map(cartItem =>
			cartItem.orderId === cartItemToAdd.orderId
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.orderId === cartItemToRemove.orderId
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter(i => i.orderId !== cartItemToRemove.orderId);
	}

	return cartItems.map(cartItem =>
		cartItem.orderId === cartItemToRemove.orderId
			? {
				...cartItem,
				quantity: cartItem.quantity - 1
			}
			: cartItem
	);
};
