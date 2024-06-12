import { createSelector } from "reselect";

let getTodos = (todos) => {
	return todos;
};

const getDisplayedTodoStatus = (state, displayedTodoStatus) =>
	displayedTodoStatus;

export const getFilteredTodos = createSelector(
	[getTodos, getDisplayedTodoStatus],
	(todos, displayedTodoStatus) => {
		return todos.filter(
			(eachTodo) => eachTodo.status === displayedTodoStatus
		);
	}
);
