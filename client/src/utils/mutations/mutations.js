import { gql } from "@apollo/client";

export const UPDATE_TASK_STATUS = gql`
	mutation updateTaskStatus($_id: ID!, $status: String!) {
		updateTaskStatus(_id: $_id, status: $status) {
			_id
			title
			status
		}
	}
`;

export const ADD_TASK_BOARD = gql`
	mutation AddTaskBoard($title: String!, $projectId: ID!, $description: String) {
		addTaskBoard(title: $title, projectId: $projectId, description: $description) {
	  	_id
	  	title
	  	description
		}
  	}
`;

export const ADD_TASK = gql`
	mutation AddTask(
		$title: String!
		$boardId: ID!
		$description: String
		$userId: String
	) {
		addTask(
			title: $title
			boardId: $boardId
			description: $description
			userId: $userId
		) {
			title
			description
			userId
			boardId
		}
	}
`;

export const UPDATE_TASK = gql`
  mutation updateTask($_id: ID!, $boardId: ID!) {
    updateTask(_id: $_id, boardId: $boardId) {
      _id
      boardId
    }
  }
`;