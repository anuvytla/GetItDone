import { useState } from "react";
import { useProjectContext } from "../../utils/context/ProjectContext";

const NewTaskBoard = ({ userId }) => {
	const { addTaskBoard } = useProjectContext();
	const [taskBoardTitle, setTaskBoardTitle] = useState("");
	const [taskBoardDescription, setTaskBoardDescription] = useState("");
	return (
		<div className="add-task-board-container text-center">
			<input className="form .form-input mx-3"
				placeholder="Title"
				id="taskBoardTitle"
				value={taskBoardTitle}
				onChange={(event) => setTaskBoardTitle(event.target.value)}
			/>
			<input className="form .form-input mx-3"
				placeholder="Description (optional)"
				id="taskBoardDescription"
				value={taskBoardDescription}
				onChange={(event) => setTaskBoardDescription(event.target.value)}
			/>
			<button
				className="btn btn-add addTaskBoard ml-5 mb-5"
				onClick={() => {
					if (taskBoardTitle.trim().length === 0) {
						alert("Must enter valid taskboard name!");
						return;
					}

					let newTaskBoard = {
						title: taskBoardTitle,
						description: taskBoardDescription,
						userId: parseInt(userId),
					};
					addTaskBoard(newTaskBoard);
					setTaskBoardTitle("");
					setTaskBoardDescription("");
				}}
			>
				Add Task Board
			</button>
		</div>
	);
};

export default NewTaskBoard;
