import { useState } from "react";
import { useProjectContext } from "../../utils/context/ProjectContext";

const NewTaskBoard = ({ userId }) => {
	const { addTaskBoard } = useProjectContext();
	const [taskBoardTitle, setTaskBoardTitle] = useState("");
	const [taskBoardDescription, setTaskBoardDescription] = useState("");
	return (
		<>
			<input
				placeholder="Title"
				id="taskBoardTitle"
				value={taskBoardTitle}
				onChange={(event) => setTaskBoardTitle(event.target.value)}
			/>
			<input
				placeholder="Description (optional)"
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
						userId: parseInt(userId),
					};
					addTaskBoard(newTaskBoard);
					setTaskBoardTitle("");
					setTaskBoardDescription("");
				}}
			>
				Add Task Board
			</button>
		</>
	);
};

export default NewTaskBoard;
