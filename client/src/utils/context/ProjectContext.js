import React, { createContext, useContext, useEffect, useState } from "react";
import { ADD_TASK_BOARD } from "../mutations/mutations";

// Initialize new context for Project
const ProjectContext = createContext();

export const useProjectContext = () => useContext(ProjectContext);

// The provider is responsible for holding our state, updating the state, and persisting values to the children

// below is the query to replace the below text I believe

// query Tasks {
//   tasks {
//     _id
//     title
//     description
//     index
//     boardId
//     userId
//   }
// }

export const ProjectProvider = ({ children }) => {
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	});

	const [project, setProject] = useState({
		id: "1",
		title: "Get It Done",
		taskBoards: {
			1: {
				id: "1",
				title: "create a full stack web notes app",
				description: "make sure to find a creative name",
				tasks: [
					{
						id: "1",
						title: "Create the express server",
						description: "start the routes afterwards",
						urgency: 1,
						board_id: 1,
					},
					{
						id: "2",
						title: "generate the react app",
						description: "make sure it is set up in a separate 'client' folder",
						urgency: 1,
						board_id: 1,
					},
					{
						id: "3",
						title: "CSS for the home page",
						description: "style the nav bar",
						urgency: 2,
						board_id: 1,
					},
				],
			},
			2: {
				id: "2",
				title: "Lemonade Sales",
				description: "tracking all tasks for lemonade stand",
				tasks: [
					{
						id: "4",
						title: "server folder structure created",
						description: "schema, connection, models, and seeds created",
						urgency: 3,
						board_id: 2,
					},
					{
						id: "5",
						title: "get more lemons",
						description: "need by friday",
						urgency: 1,
						board_id: 2,
					},
					{
						id: "6",
						title: "create advertisements",
						description: "poster, and signs to put around town",
						urgency: 1,
						board_id: 2,
					},
					{
						id: "7",
						title: "get a cooler to have ice and a pitcher",
						description: "at least 64oz",
						urgency: 2,
						board_id: 2,
					},
				],
			},
		},
	});

	const addTask = (task_info) => {
		let taskBoardId = task_info.board_id.toString();
		let destinationBoard = project.taskBoards[taskBoardId];

		let id = Math.random().toString();
		let newTask = { ...task_info, id };
		let updatedTasks = [...destinationBoard.tasks, newTask];
		let updatedTaskBoard = { ...destinationBoard, tasks: updatedTasks };
		let updatedProjectBoards = {
			...project.taskBoards,
			[taskBoardId]: updatedTaskBoard,
		};
		let updatedProject = { ...project, taskBoards: updatedProjectBoards };

		setProject(updatedProject);
	};

	const addTaskBoard = (taskBoard) => {
		ADD_TASK_BOARD(taskBoard);
	};

	const moveTask = (fromBoardId, toBoardId, fromIndex, toIndex) => {
		let sourceBoard = project.taskBoards[fromBoardId];
		let destinationBoard = project.taskBoards[toBoardId];

		let sourceBoardTasks = Array.from(sourceBoard.tasks);
		let [movedTask] = sourceBoardTasks.splice(fromIndex, 1);

		let destinationBoardTasks;
		if (fromBoardId === toBoardId) {
			destinationBoardTasks = Array.from(sourceBoardTasks);
		} else {
			destinationBoardTasks = Array.from(destinationBoard.tasks);
		}

		destinationBoardTasks.splice(toIndex, 0, movedTask);
		let updatedSourceBoard = { ...sourceBoard, tasks: sourceBoardTasks };
		let updatedDestinationBoard = {
			...destinationBoard,
			tasks: destinationBoardTasks,
		};

		const updatedTaskBoards = {
			...project.taskBoards,
			[fromBoardId]: updatedSourceBoard,
			[toBoardId]: updatedDestinationBoard,
		};

		const updatedProject = { ...project, taskBoards: updatedTaskBoards };

		setProject(updatedProject);
	};

	//   // Function to remove a student
	//   const removeStudent = (id) => {
	//     // Copy the content of the students array into our new list with the spread operator, then filter out the student that matches the `id` that was passed
	//     const newStudentsList = [
	//       ...students.filter((student) => student.id !== id),
	//     ];

	//     // Update state with the new list after the student has been removed
	//     setStudents(newStudentsList);
	//   };

	// The value prop expects an initial state object
	return (
		<ProjectContext.Provider
			value={{
				project,
				isLoading,
				setProject,
				addTask,
				addTaskBoard,
				moveTask,
			}}
		>
			{/* We render children in our component so that any descendent can access the value from the provider */}
			{children}
		</ProjectContext.Provider>
	);
};
