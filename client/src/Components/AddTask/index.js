import "./index.css";
import { useState } from "react";
import { useProjectContext } from "../../utils/context/ProjectContext";

const AddTask = ({ boardId }) => {
	const { addTask } = useProjectContext();
	const [taskTitle, setTaskTitle] = useState("");
	const [taskDescription, setTaskDescription] = useState("");
	return (
		<div className="add-task-container">
			<input
				placeholder="Title"
				id="taskTitle"
				value={taskTitle}
				onChange={(event) => setTaskTitle(event.target.value)}
			/>
			<input
				placeholder="Description"
				id="taskDescription"
				value={taskDescription}
				onChange={(event) => setTaskDescription(event.target.value)}
			/>
			<button
				className="addTask"
				onClick={() => {
					if (taskTitle.trim().length === 0) {
						alert("Must enter valid task!");
						return;
					}

					let newTask = {
						title: taskTitle,
						description: taskDescription,
						urgency: 2,
						board_id: parseInt(boardId),
					};
					addTask(newTask);
					setTaskTitle("");
					setTaskDescription("");
				}}
			>
				Add Task
			</button>
		</div>
	);
};

export default AddTask;
