import "./index.css";
import { useState } from "react";
import { useProjectContext } from "../../utils/context/ProjectContext";

const AddTaskBoard = ({ projectId }) => {
	const { addTaskBoard } = useProjectContext();
	const [taskBoardTitle, setTaskBoardTitle] = useState("");
	const [taskBoardDescription, setTaskBoardDescription] = useState("");
	return (
		<div className="add-task-board-container">
			<input
				placeholder="Title"
				id="taskBoardTitle"
				value={taskBoardTitle}
				onChange={(event) => setTaskBoardTitle(event.target.value)}
			/>
			<input
				placeholder="Description"
				id="taskBoardDescription"
				value={taskBoardDescription}
				onChange={(event) => setTaskBoardDescription(event.target.value)}
			/>
			<button
				className="addTaskBoard"
				onClick={() => {
					if (taskBoardTitle.trim().length === 0) {
						alert("Must enter valid task!");
						return;
					}

					let newTaskBoard = {
						title: taskBoardTitle,
						description: taskBoardDescription,
						projectId: projectId,
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

export default AddTaskBoard;
