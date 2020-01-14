import { createSelector } from 'reselect';

const selectColors = state => {
	return state.colors;
};

export const selectAllColors = createSelector(
	[selectColors],
);
