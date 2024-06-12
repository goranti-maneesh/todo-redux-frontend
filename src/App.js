import { Route, Routes } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Todos from "./components/Todos";
import TodoContent from "./components/TodoContent";

const App = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<DndProvider backend={HTML5Backend}>
						<Todos />
					</DndProvider>
				}
			/>
			<Route path="/todo/:path" element={<TodoContent />} />
		</Routes>
	);
};

export default App;
