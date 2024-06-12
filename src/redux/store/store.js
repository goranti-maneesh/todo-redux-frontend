import { configureStore } from "@reduxjs/toolkit";

import rootStore from "../reducer";

export const store = configureStore({
	reducer: rootStore,
});
