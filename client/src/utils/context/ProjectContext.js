import React, { createContext, useContext, useEffect, useState } from "react";
import { ADD_TASK, UPDATE_TASK, ADD_TASK_BOARD } from "../mutations/mutations";
import { useMutation, useQuery } from '@apollo/client';
import { FETCH_PROJECTS_QUERY } from '../../utils/queries/queries';

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

	const { loading, data } = useQuery(FETCH_PROJECTS_QUERY);
	const [updateTask, { error }] = useMutation(UPDATE_TASK, {refetchQueries: [
		{query: FETCH_PROJECTS_QUERY},
	  ]});
	const [addTaskMutation, {}] = useMutation(ADD_TASK, {refetchQueries: [
		{query: FETCH_PROJECTS_QUERY},
	  ]});
	
	const [addTaskBoardMutation, {}] = useMutation(ADD_TASK_BOARD, {refetchQueries: [
		{query: FETCH_PROJECTS_QUERY},
	  ]});
	useEffect(() => {
		if(data) {
			setLoading(false);
			setState({...state, projects: data.projects});
			setLoading(false);
		}
	}, [data]);

	const [state, setState] = useState({
		projects: []
});

function getTaskBoards(projectId, projs) {
  let project = projs.find(element => element._id === projectId);
  if(project) {
    return project.taskBoards;
  }

  return [];
}

function getTaskBoard(projectId, taskBoardId) {
  let taskBoards = getTaskBoards(projectId, state.projects);
  return taskBoards.find(element => element._id === taskBoardId);
}

function getTasks(projectId, boardId) {
  let taskBoard = getTaskBoard(projectId, boardId);
  if(taskBoard) {
    return taskBoard.tasks;
  }

  return [];
}

async function addTaskBoard (taskBoard) {
	console.log(taskBoard);
	await addTaskBoardMutation({
		variables: { ...taskBoard }
	});
}

	const addTask = async (task_info) => {
		await addTaskMutation({      
			variables: { ...task_info }
		  });
	};

	const moveTask = async (projectId, fromBoardId, toBoardId, fromIndex, toIndex) => {
		let sourceBoard = getTaskBoard(projectId, fromBoardId);
		let sourceBoardTasks = Array.from(sourceBoard.tasks);
		let movedTask = sourceBoardTasks[fromIndex];
		const data = await updateTask({      
			variables: { _id: movedTask._id, boardId: toBoardId }
		  });
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
				getTaskBoards,
				getTasks,
			}}
		>
			{/* We render children in our component so that any descendent can access the value from the provider */}
			{children}
		</ProjectContext.Provider>
	);
};
