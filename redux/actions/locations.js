import * as t from "../types";

export const setLocations = locations => dispatch => {
	dispatch({
		type: t.SET_LOCATIONS,
		payload: locations,
	});
};
