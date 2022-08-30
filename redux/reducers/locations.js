import * as t from "../types";

const locations = (
	state = {
		locations: [],
	},
	action
) => {
	switch (action.type) {
		case t.SET_LOCATIONS:
			return {
				...state,
				locations: action.payload,
			};

		default:
			return { ...state };
	}
};

export default locations;
