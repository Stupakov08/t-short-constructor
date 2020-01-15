import ColorActionTypes from './colors.types';

export const setColors = (colors) => ({
	type: ColorActionTypes.SET_COLORS,
	payload: colors
});
export const setActiveColor = (color) => ({
	type: ColorActionTypes.SET_ACTIVE_COLOR,
	payload: color
});
