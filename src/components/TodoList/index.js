import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDownloadDone, MdDeleteOutline } from "react-icons/md";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import { useDrag } from "react-dnd";

import { fetchTodoAchieveitContent } from "../../redux/thunk/thunk";
import {
	popupDescription,
	todosListClassnamesObj,
	cancelText,
	achieveItText,
	yesText,
	eachTodoStatusBtns,
} from "../../constants";

import "./index.css";

const TodoList = React.memo((props) => {
	const {
		deleteTodo,
		updateTodoStatus,
		editTodo,
		eachTodo,
		editTodoStatus,
		isHover,
	} = props;
	const { id, todo, status, isEditable } = eachTodo;

	const dispatch = useDispatch();

	const inputRef = useRef(null);

	const [todoValue, updateTodoValue] = useState(todo);

	const [{ isDragging }, drag] = useDrag(() => ({
		type: "TODO_ITEM",
		item: { id },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));

	useEffect(() => {
		if (isEditable && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isEditable]);

	const onChangeTodoStatus = (status) => {
		updateTodoStatus(id, status);
	};

	const onClickDeleteTodo = () => {
		deleteTodo(id);
	};

	const onClickAchieveit = () => {
		dispatch(fetchTodoAchieveitContent(todo));
	};

	const renderCompletedTodoDeleteBtn = () => {
		return (
			<button
				className="delete-btn"
				type="button"
				onClick={onClickDeleteTodo}
			>
				<MdDeleteOutline className="delete-icon" />
			</button>
		);
	};

	const renderOtherTodosDeleteBtn = () => {
		return (
			<div className="popup-main-container">
				<Popup
					modal
					trigger={
						<button className="delete-btn" type="button">
							<MdDeleteOutline className="delete-icon" />
						</button>
					}
				>
					{(close) => (
						<>
							<div className="popup-container">
								<p className="popup-text">{popupDescription}</p>
							</div>
							<div className="popup-btns-container">
								<button
									type="button"
									className="trigger-button popup-cancel-btn"
									onClick={() => close()}
								>
									{cancelText}
								</button>
								<button
									type="button"
									className="popup-yes-btn"
									onClick={onClickDeleteTodo}
								>
									{yesText}
								</button>
							</div>
						</>
					)}
				</Popup>
			</div>
		);
	};

	const renderInputEle = () => {
		return (
			<div className="editing-each-todo-container">
				<input
					ref={inputRef}
					type="text"
					onChange={(e) => updateTodoValue(e.target.value)}
					value={todoValue}
					className={
						isEditable ? "editing-todo-input" : "edit-todo-input"
					}
				/>
				<button
					type="button"
					onClick={() => editTodo(id, todoValue)}
					className="done-btn"
				>
					<MdDownloadDone className="done-icon" />
				</button>
			</div>
		);
	};

	const renderParagraphEle = () => {
		const classname = isHover ? `each-todo-hover` : `each-todo`;
		return (
			<div
				className={
					isHover
						? `each-todo-container-hover ${todosListClassnamesObj[status]}`
						: `each-todo-container ${todosListClassnamesObj[status]}`
				}
			>
				<label htmlFor={`todo${id}`} className={classname}>
					{todo}
				</label>
				<button
					className="edit-btn"
					type="button"
					onClick={() => editTodoStatus(id)}
				>
					<AiOutlineEdit className="edit-icon" />
				</button>
			</div>
		);
	};

	const renderYetTodoStatusChangeBtn = (btnsData) => (
		<button
			className={btnsData.btnClass}
			onClick={() => onChangeTodoStatus(btnsData.statusType)}
			type="button"
		>
			{btnsData.iconJSX}
		</button>
	);

	return (
		<li key={todo.id} className="li-ele">
			<div
				className="each-todo-main-container"
				ref={drag}
				style={{ opacity: isDragging ? 0.5 : 1, cursor: "move" }}
			>
				<div className="checkbox-container">
					{!(status === eachTodoStatusBtns[0].statusType) &&
						renderYetTodoStatusChangeBtn(eachTodoStatusBtns[0])}
					{!(status === eachTodoStatusBtns[1].statusType) &&
						renderYetTodoStatusChangeBtn(eachTodoStatusBtns[1])}
					{!(status === eachTodoStatusBtns[2].statusType) &&
						renderYetTodoStatusChangeBtn(eachTodoStatusBtns[2])}
				</div>
				{isEditable ? renderInputEle() : renderParagraphEle()}
				{status === "COMPLETED"
					? renderCompletedTodoDeleteBtn()
					: renderOtherTodosDeleteBtn()}
				<Link to={`todo/${todo.split(" ").join("_")}`}>
					<button
						type="button"
						className="achieve-it-btn"
						onClick={onClickAchieveit}
					>
						{achieveItText}
					</button>
				</Link>
			</div>
		</li>
	);
});

export default TodoList;
