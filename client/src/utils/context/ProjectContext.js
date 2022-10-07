import React, { createContext, useContext, useEffect, useState } from "react";
import { UPDATE_TASK } from "../mutations/mutations";
import { useMutation } from '@apollo/client';

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

	const [updateTask, { error }] = useMutation(UPDATE_TASK);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	});

	const [state, setState] = useState({
		projects: [
			{
			_id: "633f8eebc808f88f408a26d1",
			title: "Get It Done"
			}
  		]
});

function getProject(projectId) {
  return state.projects.find(element => element._id === projectId);
}

function setProject(projectId, project) {
  let index = state.projects.findIndex(element => element._id === projectId);

  let updatedProjects = Array.from(state.projects);
  if(index === -1) {
    updatedProjects = [...state.projects, project];
  } else {
    updatedProjects[index] = project;
  }
  console.log("Updating projects");
  setState({...state, projects: updatedProjects});
}

function getTaskBoards(projectId, projs) {
  let project = projs.find(element => element._id === projectId);
  if(project) {
    return project.taskBoards;
  }

  return [];
}

function setTaskBoards(projectId, taskBoards) {
  let project = getProject(projectId);
  let updatedProject = {...project, taskBoards: taskBoards};
  setProject(projectId, updatedProject);
}

function getTaskBoard(projectId, taskBoardId) {
  let taskBoards = getTaskBoards(projectId, state.projects);
  return taskBoards.find(element => element._id === taskBoardId);
}

function setTaskBoard(projectId, taskBoardId, taskBoard) {
  let taskBoards = getTaskBoards(projectId, state.projects);
  let taskBoardIndex = taskBoards.findIndex(element => element._id === taskBoardId);
  
  if(taskBoardIndex === -1) {
    setTaskBoards(projectId, [...taskBoards, taskBoard]);
  } else {
    let updatedTaskBoards = Array.from(taskBoards);
    updatedTaskBoards[taskBoardIndex] = taskBoard;
    setTaskBoards(projectId, updatedTaskBoards);
  }
}

function setTasks(projectId, boardId, tasks) {
  let taskBoard = getTaskBoard(projectId, boardId);
  let updatedTaskBoard = {...taskBoard, tasks: tasks};
  setTaskBoard(projectId, boardId, updatedTaskBoard);
}

function getTasks(projectId, boardId) {
  let taskBoard = getTaskBoard(projectId, boardId);
  if(taskBoard) {
    return taskBoard.tasks;
  }

  return [];
}

	const addTask = (task_info) => {
		// let taskBoardId = task_info.board_id.toString();
		// let destinationBoard = project.taskBoards[taskBoardId];

		// let id = Math.random().toString();
		// let newTask = { ...task_info, id };
		// let updatedTasks = [...destinationBoard.tasks, newTask];
		// let updatedTaskBoard = { ...destinationBoard, tasks: updatedTasks };
		// let updatedProjectBoards = {
		// 	...project.taskBoards,
		// 	[taskBoardId]: updatedTaskBoard,
		// };
		// let updatedProject = { ...project, taskBoards: updatedProjectBoards };

		// setProject(updatedProject);
	};

	const addTaskBoard = (taskBoard) => {
		// let userId = taskBoard.userId.toString();
	};

	const moveTask = async (projectId, fromBoardId, toBoardId, fromIndex, toIndex) => {

    	let project = getProject(projectId);
		let sourceBoard = getTaskBoard(projectId, fromBoardId);
		let destinationBoard = getTaskBoard(projectId, toBoardId);

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
    
		const updatedTaskBoards = Array.from(project.taskBoards);
		let fromBoardIndex = updatedTaskBoards.findIndex(element => element._id ===fromBoardId );
		updatedTaskBoards[fromBoardIndex] = updatedSourceBoard;
		let toBoardIndex = updatedTaskBoards.findIndex(element => element._id ===toBoardId );
		updatedTaskBoards[toBoardIndex] = updatedDestinationBoard;
		console.log("moving task");
		const data = await updateTask({      
			variables: { _id: movedTask._id, boardId: toBoardId }
		  });
    	setTaskBoards(projectId, updatedTaskBoards);
	};

	// The value prop expects an initial state object
	return (
		<ProjectContext.Provider
			value={{
				state,
				isLoading,
				setState,
				addTask,
				addTaskBoard,
				moveTask,
				getProject,
				getTaskBoards,
				setTaskBoards,
				getTaskBoard,
				setTaskBoard,
				getTasks,
				setTasks,
			}}
		>
			{/* We render children in our component so that any descendent can access the value from the provider */}
			{children}
		</ProjectContext.Provider>
	);
};
