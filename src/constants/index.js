import { MdDone } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { GoDash } from "react-icons/go";

export const popupDescription = "Want to delete todo without completing";
export const cancelText = "Cancel";
export const achieveItText = "Achieve it";
export const yesText = "Yes";
export const myTodosHeading = "My Todos"

export const todosListClassnamesObj = {
	YET_TODO: "yet-todo",
	IN_PROGRESS: "in-progress",
	COMPLETED: "completed",
};

export const statusBtnsData = [
	{
		statusType: "YET_TODO",
		selectedBtnClass: "yetTodoBtn selectedYetTodoBtn",
		unselectedBtnClass: "yetTodoBtn",
		statusText: "Yet Todo",
		iconJSX: <GoDash className="dash-icon" />,
	},
	{
		statusType: "IN_PROGRESS",
		selectedBtnClass: "inProgressBtn selectedInProgressBtn",
		unselectedBtnClass: "inProgressBtn",
		statusText: "In Progress",
		iconJSX: <TfiReload className="reload-icon" />,
	},
	{
		statusType: "COMPLETED",
		selectedBtnClass: "completedBtn selectedCompletedBtn",
		unselectedBtnClass: "completedBtn",
		statusText: "Completed",
		iconJSX: <MdDone className="done-icon" />,
	},
];

export const eachTodoStatusBtns = [
	{
		statusType: "YET_TODO",
		btnClass: 'yet-todo-btn',
		iconJSX: <GoDash className="yet-todo-icon" />,
	},
	{
		statusType: 'IN_PROGRESS',
		btnClass: 'in-progress-btn',
		iconJSX: <TfiReload className="in-progress-icon" />,
	},
	{
		statusType: 'COMPLETED',
		btnClass: 'completed-btn',
		iconJSX: <MdDone className="completed-icon" />,
	},
]