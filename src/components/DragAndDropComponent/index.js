import { useDrop } from "react-dnd";

const DragAndDropComponent = (props) => {
	const { children, updateTodoStatus, todoStatus } = props;

	const [{ isOver }, drop] = useDrop(() => ({
		accept: "TODO_ITEM",
		drop: (item) => updateTodoStatus(item.id, todoStatus),
	}));

	return <div ref={drop}>{children}</div>;
};

export default DragAndDropComponent;
