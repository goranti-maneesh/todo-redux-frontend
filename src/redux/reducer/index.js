import { combineReducers } from "@reduxjs/toolkit";

import { todoReducer, statusReducer } from "./reducer";

export default combineReducers({
	todos: todoReducer,
	status: statusReducer,
});
