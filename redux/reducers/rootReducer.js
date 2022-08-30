import { combineReducers } from "redux";
import locations from "./locations";

const rootReducer = combineReducers({
	locations: locations,
});

export default rootReducer;
