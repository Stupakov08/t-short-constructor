import SizeActionTypes from './sizes.types';

export const setSizes = (sizes) => ({
	type: SizeActionTypes.SET_SIZES,
	payload: sizes
});
export const setActiveSize = (size) => ({
	type: SizeActionTypes.SET_ACTIVE_SIZES,
	payload: size
});
