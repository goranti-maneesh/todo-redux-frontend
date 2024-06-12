export const addTodoAction = (todo) => ({
	type: "ADD_TODO",
	payload: todo,
});

export const deleteTodoAction = (id) => ({
	type: "DELETE_TODO",
	payload: id,
});

export const updateTodoStatusAction = (id, todoStatus) => ({
	type: "UPDATE_TODO_STATUS",
	payload: {
		id,
		todoStatus,
	},
});

export const editTodoAction = (id, todo) => ({
	type: "EDIT_TODO",
	payload: {
		id,
		todo,
	},
});

export const editTodoStatusAction = (id) => ({
	type: "EDIT_TODO_STATUS",
	payload: id,
});

export const fetchRequestAction = () => ({
	type: "FETCH_REQUEST",
});

export const fetchSuccessAction = (data) => ({
	type: "FETCH_SUCCESS",
	payload: data,
});

export const fetchFailureAction = (error) => ({
	type: "FETCH_FAILURE",
	payload: error,
});
