import { useSelector } from "react-redux";
import { BallTriangle } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

import "./index.css";

const todoStatusConstraints = {
	success: "success",
	incorrect: "incorrect",
	error: "error",
	loading: "loading",
};

const TodoContent = () => {
	const navigate = useNavigate();

	const result = useSelector((state) => {
		return state.status;
	});

	const { data, status } = result;

	const renderCorrectTodoContent = () => {
		return (
			<div>
				<h1 className="todo-content-heading">{data.todo}</h1>
				{data.content.map((eachContent) => (
					<div>
						<h1>{eachContent.name}</h1>
						<ul>
							{eachContent.data.map((eachData) => (
								<li key={eachData}>{eachData}</li>
							))}
						</ul>
					</div>
				))}
				<button
					type="button"
					onClick={() => navigate("/", { replace: false })}
					className="back-and-home-btn back-btn"
				>
					Back
				</button>
			</div>
		);
	};

	const renderIncorrectTodoContent = () => {
		return (
			<div>
				<p>{data}</p>
			</div>
		);
	};

	const renderError = () => {
		console.log(data, "data");
		return (
			<div className="error-view-container">
				<img
					src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
					alt="error-view"
					className="error-view-img"
				/>
				<h1>Fetching Failed</h1>
				<button
					type="button"
					onClick={() => navigate("/", { replace: false })}
					className="back-and-home-btn"
				>
					Go To Home
				</button>
			</div>
		);
	};

	const renderLoader = () => {
		return (
			<div className="todo-content-loader">
				<h1>Loading... wait for a minute.</h1>
				<BallTriangle
					height={40}
					width={40}
					radius={5}
					color="#236099"
					ariaLabel="ball-triangle-loading"
					wrapperStyle={{}}
					wrapperClass=""
					visible={true}
				/>
			</div>
		);
	};

	const renderAllViews = () => {
		switch (status) {
			case todoStatusConstraints.success:
				return renderCorrectTodoContent();
			case todoStatusConstraints.incorrect:
				return renderIncorrectTodoContent();
			case todoStatusConstraints.error:
				return renderError();
			case todoStatusConstraints.loading:
				return renderLoader();
			default:
				return null;
		}
	};

	return (
		<div className="todo-content-container">
			<div>{renderAllViews()}</div>
		</div>
	);
};

export default TodoContent;
