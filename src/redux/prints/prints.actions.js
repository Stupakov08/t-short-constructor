import PrintActionTypes from './prints.types';

export const setPrints = (prints) => ({
	type: PrintActionTypes.SET_PRINTS,
	payload: prints
});
export const setActivePrint = (print) => ({
	type: PrintActionTypes.SET_ACTIVE_PRINT,
	payload: print
});
