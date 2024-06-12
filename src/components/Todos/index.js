import { useSelector, useDispatch } from "react-redux";
import { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

import {
	addTodoAction,
	deleteTodoAction,
	updateTodoStatusAction,
	editTodoAction,
	editTodoStatusAction,
} from "../../redux/action/action";
import { getFilteredTodos } from "../../redux/selector/slector";
import { statusBtnsData, myTodosHeading } from "../../constants";

import TodoList from "../TodoList";
import DragAndDropComponent from "../DragAndDropComponent";

import "./index.css";

const Todos = () => {
	const [todo, setTodo] = useState("");
	const [isHover, setHover] = useState(true);
	const [displayedTodoStatus, setDisplayTodoStatus] = useState(
		statusBtnsData[0].statusType
	);

	const dispatch = useDispatch();

	const todos = useSelector((state) => {
		return getFilteredTodos(state.todos, displayedTodoStatus);
	});

	const onClickSetDisplayTodoStatus = (todoStatus) => {
		setDisplayTodoStatus(todoStatus);
	};

	const addTodo = (event) => {
		event.preventDefault();
		if (todo === "") return;
		const newTodo = {
			id: uuidv4(),
			todo,
			status: statusBtnsData[0].statusType,
			isEditable: false,
		};

		dispatch(addTodoAction(newTodo));
		setTodo("");
	};

	const deleteTodo = useCallback(
		(id) => {
			dispatch(deleteTodoAction(id));
			setHover(true);
		},
		[dispatch]
	);

	const updateTodoStatus = useCallback(
		(id, todoStatus) => {
			dispatch(updateTodoStatusAction(id, todoStatus));
		},
		[dispatch]
	);

	const editTodo = useCallback(
		(id, todo) => {
			dispatch(editTodoAction(id, todo));
			setHover(true);
		},
		[dispatch]
	);

	const editTodoStatus = useCallback(
		(id) => {
			dispatch(editTodoStatusAction(id));
			setHover(false);
		},
		[dispatch]
	);

	const renderStatusBtns = () => {
		return statusBtnsData.map((eachBtnData) => {
			return (
				<DragAndDropComponent
					updateTodoStatus={updateTodoStatus}
					todoStatus={eachBtnData.statusType}
					key={eachBtnData.statusType}
				>
					<button
						type="button"
						onClick={() =>
							onClickSetDisplayTodoStatus(eachBtnData.statusType)
						}
						className={
							displayedTodoStatus === eachBtnData.statusType
								? eachBtnData.selectedBtnClass
								: eachBtnData.unselectedBtnClass
						}
					>
						{eachBtnData.iconJSX}
						{eachBtnData.statusText}
					</button>
				</DragAndDropComponent>
			);
		});
	};

	return (
		<div className="todos-main-container">
			<div>
				<h1 className="my-todos-heading">{myTodosHeading}</h1>
			</div>
			<div>
				<form onSubmit={addTodo}>
					<input
						type="text"
						value={todo}
						onChange={(e) => setTodo(e.target.value)}
						className="add-todo-input"
						placeholder="Add Todo"
					/>
					<button type="submit" className="add-todo-button">
						Add Todo
					</button>
				</form>
				<div className="status-btn-container">{renderStatusBtns()}</div>
				<ul className="ul-ele">
					{todos.map((eachTodo) => (
						<TodoList
							key={eachTodo.id}
							deleteTodo={deleteTodo}
							updateTodoStatus={updateTodoStatus}
							editTodo={editTodo}
							editTodoStatus={editTodoStatus}
							eachTodo={eachTodo}
							isHover={isHover}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Todos;
