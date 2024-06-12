import {
	fetchRequestAction,
	fetchSuccessAction,
	fetchFailureAction,
} from "../action/action";

export const fetchTodoAchieveitContent = (todo) => {
	return async (dispatch) => {
		dispatch(fetchRequestAction());
		const url =
			"https://todo-redux-backend.onrender.com/api/generate/?todo=";
		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const response = await fetch(url + todo, options);
			const data = await response.json();
			console.log(
				typeof data.content[0].text,
				data.content[0].text,
				"data.content[0].text"
			);

			let updatedData = null;
			const parsedData = JSON.parse(data.content[0].text);

			if (parsedData.todo) {
				updatedData = parsedData;
			} else {
				updatedData = data.content[0].text;
			}
			dispatch(fetchSuccessAction(updatedData));
		} catch (error) {
			dispatch(fetchFailureAction(error));
			console.log(`Error: ${error}`);
		}
	};
};
